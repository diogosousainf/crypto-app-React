import React from 'react';
import {FaCoins} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = (props) => {
    return (
        <Link to ='/'>
            <div className='navbar'>
                <FaCoins className='icon' />
                <h1>Crypto <span className='title'>Search</span></h1>
            </div>                           
        </Link>
    )
    }

export default Navbar;