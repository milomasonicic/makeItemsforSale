import React from 'react';
import { useLocation } from 'react-router-dom';

export default function EditPage(){

    const location = useLocation();
    const { order } = location.state || {};

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

    

    return(
        <div>
            Edit
            <div>
      <h1>Edit and Publish Item</h1>
      {order ? (
        <div>
           <form action="" style={formContainer}>
                <div>
                    <input style={inputFile} type="text" value={order.seller}/>
                </div>

                <div>
                    <input style={inputFile} type="text" value={order.price}/>
                </div>

                <div>
                    <input style={inputFile} type="text" value={order.price}/>
                </div>

                <div>
                    <input style={inputFile} type="text" defaultValue={order.productName} />
                </div>

                <div>
                    <div>
                        Image:

                    </div>
                    <input type="file" />
                </div>

                <div>
                    <textarea  style={{...inputFile, height:'90px'}} name="" id="" placeholder='Descritpion'></textarea>
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