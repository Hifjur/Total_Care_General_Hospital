import React from 'react';

const Service = (props) => {
    console.log("sinlge service", props);
    const { name, description, fees, img } = props.data
    return (
        <div className="grid justify-items-center p-2 border-4 m-3 filter drop-shadow-2xl rounded ">
            <img className="rounded border-4 border-blue-200" src={img} alt="" />
            <div className="pb-3 pt-3">
                <h1 className="text-xl font-black text-blue-600">{name}</h1>
                <p>{description}</p>
                <p>Fee: ${fees}</p>
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 mt-3 rounded inline-flex items-center ">Book Appointment</button>
            </div>
        </div>
    );
};

export default Service;