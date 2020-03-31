import React, { Component } from 'react';
import {RoomContext} from '../context';
import Loading from './loading';
import Title from  "./title";
import Room from './room';

export default class Featuredroom extends Component {
    static contextType=RoomContext;
  
    render() {
        let {loading,frooms}=this.context;
        frooms=frooms.map(room=>{
            return <Room key={room.id} room={room}/>
        })
        return (
            <section className="featured-rooms">
            <Title title="Feartured room"/>
            <div className="featured-rooms-center">
                {loading?<Loading/>:frooms}
            </div>
            </section>
        );
    }
}
