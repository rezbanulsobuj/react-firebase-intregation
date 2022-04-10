import React from 'react';
import usetown from '../town/town';


import './Login.css'

const Login = () => {
    const { newTown } = usetown()

    return (
        <div>
            <h1> Please LogIn</h1>

            <div className='signin'>
                <button onClick={newTown} >Google Sign In</button>
            </div>
            <form>
                <input type="text" name="" id="" placeholder='your name' /> <br />
                <input type="email" name="" id="" placeholder='please enter your email' /> <br />
                <input type="password" name="" id="" placeholder='plase enter password' /> <br />
                <input type="submit" value="Log In" />
            </form>
        </div>
    );
};

export default Login;