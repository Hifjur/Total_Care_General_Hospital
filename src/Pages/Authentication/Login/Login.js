import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const { signInUsingGoogle, userInfoLogin, error, setUser, setIsLoading } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home'
    const onSubmit = data => {
        userInfoLogin(data);
    };

    const loginHandler =() =>{
        signInUsingGoogle()
        .then(result => {
            setUser(result.user);
            history.push(redirect_uri);
        })
        .finally(() => setIsLoading(false));
    }
    return (
        <div>
            <h1>login</h1>
            <div className="container mx-auto w-full max-w-lg">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Email
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Email" {...register("email", { required: true })} />
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Password
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Password" {...register("password", { required: true })} />
                    {errors.email && <span className="text-red-500 text-xs italic">This field is required</span>}
                    <br />
                    <p className="text-red-500">{error}</p>
                    <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-5 rounded focus:outline-none focus:shadow-outline" type="submit" />
                </form>
            </div>
            <button onClick={loginHandler} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">Google Login</button>
        </div>
    );
    
};

export default Login;