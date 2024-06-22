import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import CreateItem from './CreateItem';
import Order from './Order'

export default function Nav() {

    const navStyle = {
        color: '#213547',
        textAlign: 'center',
        padding: '10px',
      
    }

    const flx = {
        display:'flex',
        justifyContent:'space-around',
        alignItems:'none',
        listStyleType:'none'
    }
    return (
       
        

        
            <div style={navStyle}>
                <ul style={flx}>
                    <li>
                        <Link to="/">
                            Create Item  
                        </Link>
                        
                                         
                    </li>
                    <li>
                        <Link to="/items">
                            Items for Sale
                        </Link>
                    </li>
                </ul>

                <hr/>
                <Routes>
                  
                <Route path="*" element={<Order />} />
            
                </Routes>
            </div>
           
    
    );
}