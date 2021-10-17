import React from 'react';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    return (
        <div>
            <h1>login</h1>
            <button onClick={signInUsingGoogle} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">Login</button>
        </div>
    );
};

export default Login;