import React from 'react';
import { Link } from 'react-router-dom';
import thumb1 from "../../../Images/Doctors/doc01.jpg"
import thumb2 from "../../../Images/Ambulance/01sm.jpg"
const VipServices = () => {
    return (
        <div>
            <h1 className="text-4xl text-gray-300 p-20 bg-gray-700 font-black mt-20 mb-20">Our VIP Services</h1>
            <div className="grid container mx-auto lg:grid-cols-2 md:grid-flow-col1">
                <div className="grid justify-items-center p-2 border-4 m-3 filter drop-shadow-2xl rounded ">
                    <img className="rounded border-4 border-blue-200" src={thumb1} alt="" />
                    <div className="pb-3 pt-3">
                        <h1 className="text-xl font-black text-blue-600">Special Doctors</h1>
                        <p>World Class Doctors For Your Personal Service</p>

                        <Link to={'/doctors'}>
                            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 mt-3 rounded inline-flex items-center ">Show More</button>
                        </Link>
                    </div>
                </div>
                <div className="grid justify-items-center p-2 border-4 m-3 filter drop-shadow-2xl rounded ">
                    <img className="rounded border-4 border-blue-200" src={thumb2} alt="" />
                    <div className="pb-3 pt-3">
                        <h1 className="text-xl font-black text-blue-600">VIP Ambulance Service</h1>
                        <p>Ambulance Service For Members</p>
                        <Link to={'/ambulance'}>
                            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 mt-3 rounded inline-flex items-center ">Show More</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VipServices;