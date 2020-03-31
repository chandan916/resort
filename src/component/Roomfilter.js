import React from 'react';
import {useContext} from 'react';
import {RoomContext} from '../context';
import Title from './title';

const getUnique=(items,value)=>{
    return [...new Set(items.map(item=>item[value] ) )]
}

export default function Roomfilter({rooms}) {
    const context=useContext(RoomContext);
    const { handleChange,
            minprice,
            maxprice,
            minsize,
            maxsize,
            type,
            breakfast,
            pets,
            capacity,
            price
    }=context;
    let types=getUnique(rooms,'type');
    types=['all',...types];
    types=types.map((item,index)=>{
        return <option value={item} key={index}>{item}</option>
    });
    let people=getUnique(rooms,'capacity');
    people=people.map((item,index)=>{
        return <option value={item} key={index}>{item}</option>
    })
    return (
        <section className="filter-container">
            <Title title="Search rooms"/>

            <form className="filter-form">
             {/*Select type */}
            <div className="form-group">
                <label htmlFor="type">Room type</label>
                <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
                {types}
                </select>
            </div>
            {/*End of select type*/}

            {/*Guest */}
            <div className="form-group">
                <label htmlFor="capacity">Guests</label>
                <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange}>
                {people}
                </select>
            </div>
            {/*guest*/}

            {/*room price*/}
            <div className="form-group">
                <label htmlFor="price">Price: ${price}</label>
                <input type="range" name="price" min={minprice} max={maxprice} id="price" value={price} onChange={handleChange} className="form-control"/>
            </div>
            {/*Room price*/}

            {/*Room size */}
            <div className="from-group">
                <label htmlFor="size">Room size</label>
                <div className="size-inputs">
                <input type="number" name="minsize" value={minsize} id="size" onChange={handleChange} className="size-input"/>
                <input type="number" name="maxsize" value={maxsize} id="size" onChange={handleChange} className="size-input"/>
                </div>
            </div>
            {/*Room size */}

            {/*extras */}
            <div className="form-group">
                <div className="single-extra">
                    <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange}/>
                    <label htmlFor="breakfast">breakfast</label>
                </div>
                <div className="single-extra">
                    <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange}/>
                    <label htmlFor="pets">pets</label>
                </div>
            </div>
            {/*extras */}

            </form>
        </section>
    )
}
