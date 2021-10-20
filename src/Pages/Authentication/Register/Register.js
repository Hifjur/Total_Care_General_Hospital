import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Register = () => {
    const { userInfoRegister, error } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        userInfoRegister(data);
    }



    return (
        <div>
            <h1 className="text-4xl text-gray-300 p-20 bg-gray-700 font-black">Sign Up</h1>
            <div className="container mx-auto w-full max-w-lg">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Username
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Name" {...register("name")} />
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Email
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Email"  {...register("email", { required: true })} />
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Password
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Password" {...register("password", { required: true })} />
                    {errors.email && <span className="text-red-500 text-xs italic">This field is required</span>}
                    <p className="text-red-500">{error}</p>
                    <br />
                    <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-5 rounded focus:outline-none focus:shadow-outline" type="submit" />
                </form>

            </div>
            <Link to="/login">
                <p className="text-sm text-blue-400 pb-64 bg-gray-300 bg-opacity-80 font-bold hover:text-green-500 text-center">Already Have An Toatal Care Account? Login Here here</p>
            </Link>
        </div>
    );
};

export default Register;