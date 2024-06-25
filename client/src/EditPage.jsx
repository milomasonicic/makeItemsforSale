import React from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios'
import { useRef } from 'react';


export default function EditPage(){

    const location = useLocation();
    const { order } = location.state || {};
    const descriptionRef = useRef('')
    const imageRef = useRef(null);

    const formContainer = {
        margin: '0 auto',
        background: 'linear-gradient(90deg, rgba(255,252,252,1) 0%, rgba(225,225,227,1) 35%, rgba(255,255,255,1) 100%)',
        padding:'20px'
    }
    
    const inputFile = {
        margin: '0 auto',
        minWidth:'256px',        
        padding:'10px',
        marginTop:'15px'
    }
 
    const handleSubmit = async(e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('id', 1); // Dummy ID, možeš koristiti UUID kao što smo prethodno pokazali
        formData.append('seller', order.seller);
        formData.append('description', descriptionRef.current.value);
        formData.append('price', "222"); // Trenutno je fiksna vrednost, možeš promeniti da se dinamički unese
        formData.append('name', order.productName);
        formData.append('image', imageRef.current.files[0]); // Dodavanje izabrane slike      

        try{
            const response = await axios.post('http://127.0.0.1:8000/api/items', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response.data)
        }
        catch(error){
            console.log('Error', error)
        }
    }

    

    return(
        <div>
            Edit
            <div>
      <h1>Edit and Publish Item</h1>
      {order ? (
        <div>
           <form action="" style={formContainer} onSubmit={handleSubmit}>
                <div>
                    <div>Seller:</div>
                    <input style={inputFile} type="text" value={order.seller}/>
                </div>

                <div>
                    <div>Price:</div>
                    <input style={inputFile} type="text" value={order.price}/>
                </div>

                <div>
                    <div>Name:</div>
                    <input style={inputFile} type="text" defaultValue={order.productName} />
                </div>

                <div>
                    <div>Description:</div>
                    <textarea  style={{...inputFile, height:'110px'}} ref={descriptionRef} name="" id="" placeholder='Descritpion'></textarea>
                </div>

                <div>
                    <div>Image:</div>
                    <input style={inputFile} type="file" ref={imageRef} />
                </div>
                
                <button type='submit'>Publish</button>
            </form> 
         
        </div>
      ) : (
        <p>No order data</p>
      )}
    </div>
        </div>
    )
}

