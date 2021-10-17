import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <div className="p-10 bg-gray-700 ">
            <NavLink activeClassName="underline text-green-500" className="p-5 text-lg font-bold text-gray-300" to="/home">Home</NavLink>
            <NavLink activeClassName="underline text-green-500" className="p-5 text-lg font-bold text-gray-300" to="/shipping">Shipping</NavLink>
            <NavLink activeClassName="underline text-green-500" className="p-5 text-lg font-bold text-gray-300" to="/placeorder">Placec order   </NavLink>
            <NavLink activeClassName="underline text-green-500" className="p-5 text-lg font-bold text-gray-300" to="/register">Register</NavLink>
            <NavLink activeClassName="underline text-green-500" className="p-5 text-lg font-bold text-gray-300" to="/login">Login</NavLink>
            {user.displayName && <span className="text-gray-200 bg-blue-700 p-2 rounded mx-4"> Hi {user.displayName} </span>}
            {user.displayName && <button onClick={logOut} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">Log out</button>}
        </div>
    );
};

export default Header;