import React from 'react';
import { Link } from 'react-router-dom';
import useHoking from '../../hooking/useHoking';
import './Header.css'

const Header = () => {
    const { user, haldleSignOut } = useHoking()
    return (
        <div className='header'>
            <nav>
                <Link to="/">Home</Link>
                <span>{user?.displayName && user.displayName}</span>
                {user?.uid ?
                    <button onClick={haldleSignOut}>Log out</button> :
                    <Link to="/login">Login</Link>
                }
                <Link to="/register">Register</Link>
                <Link to="/products">Products</Link>
                <Link to="/about">About</Link>

            </nav>
        </div>
    );
};

export default Header;