import React, { Component } from 'react';
import Title from './title';
import {FaShuttleVan,FaBeer,FaCocktail,FaHiking} from 'react-icons/fa';

export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaShuttleVan/>,
                head:"Shuttlevan",
                info:"Shuttle van is available for transport"
            },
            {
                icon:<FaCocktail/>,
                head:"Cocktail",
                info:"cocktail is served here"
            },
            {
                icon:<FaHiking/>,
                head:"Hiking",
                info:"lorem ipsum is a sample paragraph"
            },
            {
                icon:<FaBeer/>,
                head:"Beer",
                info:"lorem ipsum is a sample paragraph"
            }
        ]
    };
    render() {
        return (
            <section className="services">
            <Title title="services"/>
            <div className="services-center">
                {this.state.services.map((item,index)=>{
                    return <article key={index} className="service">
                        <span>{item.icon}</span>
                        <h6>{item.head}</h6>
                        <p>{item.info}</p>
                    </article>
                })}
            </div>
            </section>  
        )
    }
}
