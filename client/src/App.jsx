
//import Nav from './Nav';

import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import CreateItem from './CreateItem';
import ItemsForSale from './ItemsForSale'


export default function App(){

    
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
        <Router>

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
                  
                <Route path="*" element={<CreateItem />} />
                <Route path="/items" element={<ItemsForSale />} />
            
                </Routes>
            </div>
        

        </Router>
    )
}