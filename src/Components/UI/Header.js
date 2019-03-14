import React from 'react';
import {NavLink} from "react-router-dom";



const Header = () =>{
    const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
    return(
        <div>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/register'>Register</NavLink>
                <NavLink to='/login'>Login</NavLink>


                {user !== null ? <NavLink to='/addproduct'>Add Product</NavLink> : null}

            </nav>
        </div>
    )
};

export default Header;