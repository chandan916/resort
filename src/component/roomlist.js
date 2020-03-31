import React from 'react';
import Room from './room';

export default function roomlist({rooms}) 
{
if(rooms.length===0){
    return( <div className="empty-search">
        <h3>No match found</h3>
    </div>
    )
}
else{
return (
        <section className="roomslist">
            <div className="roomslist-center">
                {rooms.map(item=>  {return <Room key={item.id} room={item}/>;}  )
                }
            </div>
        </section>
    )
}

}
