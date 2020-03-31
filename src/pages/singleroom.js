import React, { Component } from 'react';
import defaultbcg from '../images/room-1.jpeg';

import Banner from '../component/banner';
import {Link} from 'react-router-dom';
import {RoomContext} from '../context';
import Styledhero from '../component/styledcomponent';

export default class Singleroom extends Component {
    constructor(props){
        super(props);
        this.state={
            slug:this.props.match.params.roomtype,
            defaultbcg
        };
    }
    static contextType=RoomContext;

    render() {
        const {getroom}=this.context;
        const room=getroom(this.state.slug);
        if(!room){
            return <div className="error">
                <h3>No such room found</h3>
                <Link to='/rooms' className="btn-primary">Back to rooms</Link>
            </div>
        }
        const{   name,description,capacity, size, price, extras, breakfast,pets,images}=room;

        const [mainimages,...defaultimg]=images;
        return (
            <>
            <Styledhero img={mainimages|| defaultbcg}>
                <Banner title={`${name} room`}>
                    <Link to="/room" className="btn-primary">
                        Back to rooms
                    </Link>
                </Banner>
            </Styledhero>
            <section className="single-room">
                <div className="single-room-images">
                {defaultimg.map((item,index)=>
                    {return <img key={index} src={item} alt={name}/>}
                )}
                </div>


                <div className="single-room-info">
                <article className="desc">
                    <h3>Details</h3>
                    <p>${description}</p>
                </article>

                <article className="info">
                <h3>Info</h3>
                <h6>price:${price}</h6>
                <h6>size:{size}</h6>
                <h6>Max capacity:{capacity} people</h6>
                <h6>pets:{pets?"Allowed":"Not allowed"}</h6>
                <h6>{breakfast?"Free breakfast":""}</h6>
                </article>

                </div>
            </section>

            <section className="room-extras">
            <h6>Extras</h6>
            <ul className="extras">
            {extras.map((item,index)=>{
                return <li key={index}> -{item}</li>
            })}

            </ul>



            </section>



            </>
        )
    }
}
