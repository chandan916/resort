import React from 'react';
import Roomfilter from './Roomfilter';
import Roomlist from './roomlist';
//import {RoomConsumer} from '../context';
import Loading from './loading';
import {contextwrapper} from '../context';

function Roomcontainer({context}){
    const {loading,rooms,sortedrooms}=context;
        if(loading)
        {   return <Loading/> }
         return (  <div>

                    <Roomfilter rooms={rooms}/>
                    <Roomlist rooms={sortedrooms}/>
                    </div>
                )

}
export default contextwrapper(Roomcontainer);

/*
export default function Roomcontainer() {
    return(
    <RoomConsumer>
    {value=>{
        const {loading,rooms,sortedrooms}=value;
        if(loading)
        {   return <Loading/> }
         return (  <div>
                    Hello from room container.
                    <Roomfilter/>
                    <Roomlist/>
                    </div>
                )
    }
    }      
    </RoomConsumer>  
    );
}

*/
