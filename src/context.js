import React, { Component } from 'react';
//import items from './data.js';
import client from './contentful';

//client.getEntries({
//    content_type:"roominfo"
//})
//.then((response) => console.log(response.items))
//.catch(console.error);
const RoomContext=React.createContext();

 class RoomProvider extends Component {
         state={
            rooms:[],
            frooms: [],
            sortedrooms: [],
            loading:true,
            minprice:0,
            price:0,
            maxprice:0,
            minsize:0,
            maxsize:0,
            type:'all',
            breakfast:false,
            pets:false,
            capacity:1
         }

        getdata=async()=>{
            try {
                let response=await client.getEntries({ content_type:"roominfo"});
                let rooms=this.formatdata(response.items);
        let frooms=rooms.filter( room => room.featured === true );
        let maxprice=Math.max(...rooms.map(room=> room.price));
        let maxsize=Math.max(...rooms.map(item=>item.size));
         this.setState({
            rooms,
            frooms,
            sortedrooms:rooms,
            loading:false,
            price:maxprice,
            maxprice,
            maxsize,
      
        });
                } 
            catch (error) {
                console.log(error);
            }
         }
     
     componentDidMount(){
         this.getdata();
     };   

     formatdata(items){
         let tempItems=items.map(item=>{
            let id=item.sys.id;
            let images =item.fields.images.map(image=> image.fields.file.url);
            let room={...item.fields,images,id};       // *images are overrided and id is added into fields 
            return room;
         });
         return tempItems;
     }

     getrooms=(slug)=>{
         let temprooms=[...this.state.rooms];
         const room=temprooms.find((room)=>room.slug===slug);
         return room;
     }

     handleChange=(e)=>{
         const target=e.target;
         const value=target.type==='checkbox'?target.checked:target.value;
         const name=e.target.name;
         this.setState({ [name]:value,
                     },this.filterroom);
     }

     filterroom=(e)=>{
        let {rooms,minsize,maxsize,type,breakfast,pets,capacity,price}=this.state;
        let temprooms=[...rooms];
        capacity=parseInt(capacity);

        if(capacity!==1){
            temprooms=temprooms.filter(room=>room.capacity>=capacity);
        }
        if(type!=="all"){
            temprooms=temprooms.filter(room=>room.type===type);
        }

        temprooms=temprooms.filter(room=>room.price<=price);

        temprooms=temprooms.filter(room=>room.size>=minsize&&room.size<=maxsize);

        if(breakfast){
            temprooms=temprooms.filter(room=>room.breakfast===true);
        }
        if(pets){
            temprooms=temprooms.filter(room=>room.pets===true);
        }
        this.setState({
            sortedrooms:temprooms
        });
     };
       
    render() {
        return (
            <RoomContext.Provider value={{...this.state,getroom:this.getrooms,handleChange:this.handleChange}}>
                {this.props.children}
            </RoomContext.Provider>
        );
    }
}
const RoomConsumer=RoomContext.Consumer;

export {RoomProvider,RoomConsumer,RoomContext};

export function contextwrapper(Component){
    return function a(props){
        return <RoomConsumer>
            {value=><Component {...props} context={value}/>}
        </RoomConsumer>
    }
}
