import React from 'react';
import useHoking from '../../hooking/useHoking';
import './Signing.css'

const Signing = () => {
    const { sign } = useHoking()
    return (
        <div>
            <h2>please Log in</h2>
            <div className='btn'>
                <button onClick={sign}>Log In</button>
            </div>
            <form>
                <input type="text" name="" id="" placeholder='your name' /> <br />
                <input type="email" name="" id="" placeholder='please enter your email' /> <br />
                <input type="password" name="" id="" placeholder='plase enter password' /> <br />
                <input type="submit" value="Registration" />
            </form>
        </div>
    );
};

export default Signing;