import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            
            <div className="p-10 bg-gray-700 lg:hidden sm:grid md:grid sm:grid-cols-1 md:grid-col-1 ">
                <NavLink activeClassName="underline text-green-500" className="p-5 text-lg font-bold text-gray-300" to="/home">Home</NavLink>
                <NavLink activeClassName="underline text-green-500" className="p-5 text-lg font-bold text-gray-300" to="/ambulance">Ambulance Service</NavLink>
                <NavLink activeClassName="underline text-green-500" className="p-5 text-lg font-bold text-gray-300" to="/doctors">Doctors</NavLink>
                <NavLink activeClassName="underline text-green-500" className="p-5 text-lg font-bold text-gray-300" to="/register">Register</NavLink>
                {/* <NavLink activeClassName="underline text-green-500" className="p-5 text-lg font-bold text-gray-300" to="/login">Login</NavLink>
                {user.displayName && <span className="text-gray-200 bg-blue-700 p-2 rounded mx-4"> Hi {user.displayName} </span>}
                {user.displayName && <button onClick={logOut} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">Log out</button>} */}
            </div>
            <div className="p-10 bg-gray-700 lg:block md:hidden sm:hidden xs:hidden">
                <NavLink activeClassName="underline text-green-500" className="p-5 text-lg font-bold text-gray-300" to="/home">Home</NavLink>
                <NavLink activeClassName="underline text-green-500" className="p-5 text-lg font-bold text-gray-300" to="/ambulance">Ambulance Service</NavLink>
                <NavLink activeClassName="underline text-green-500" className="p-5 text-lg font-bold text-gray-300" to="/doctors">Doctors</NavLink>
                <NavLink activeClassName="underline text-green-500" className="p-5 text-lg font-bold text-gray-300" to="/register">Register</NavLink>
                <NavLink activeClassName="underline text-green-500" className="p-5 text-lg font-bold text-gray-300" to="/login">Login</NavLink>
                {user.displayName && <span className="text-gray-200 bg-blue-700 p-2 rounded mx-4"> Hi {user.displayName} </span>}
                {user.displayName && <button onClick={logOut} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">Log out</button>}
            </div>
        </div>
    );
};

export default Header;