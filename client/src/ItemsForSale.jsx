import React, { useState, useEffect } from "react"
import axios from "axios";
import SingeItem from "./Card";

export default function ItemsForSale(){

    const [items, setItems] = useState([]);

    const placeHolder = null

    const noBul = {
        listStyleType: 'none',
        display: 'flex',
        gap: '4px',
        flexWrap: 'wrap'
    }
    
   


    useEffect(() => {

        const fetchItems = async() => {

            try{
                const response = await axios.get('http://127.0.0.1:8000/api/showitems')
                const data = response.data
                setItems(data)
                console.log(data)
            } catch(err) {
                console.log(err.message)
            }

        }

        fetchItems();

    }, [])

    const renderItemImage = (item) =>{
        if(item.imagepath === 'http://127.0.0.1:8000/storage/no Image'){
            return placeHolder;
        } else{
            return item.imagepath
        }
    }

    return(
        <div>
            <h1>Items for Sale</h1>
            <div>
            {items.length > 0}
            <ul style={noBul}>
               {items.map ((item, index) => (
                <li key={index} > 
                
               
                <SingeItem title={item.name} seller={item.seller} img={renderItemImage(item)}></SingeItem>
                </li>
               ))}

            </ul>
            </div>  
           
        </div>
    )
}

/*
http://127.0.0.1:8000/storage/no Image

*/