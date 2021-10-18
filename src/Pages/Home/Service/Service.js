import React from 'react';

const Service = (props) => {
    console.log("sinlge service", props);
    const {name, description, fees, img} = props.data
    return (
        <div className="grid justify-items-center p-2 border-2 m-3 filter drop-shadow-lg rounded">
            <img src={img} alt="" />
            <h1 className="text-xl">{name}</h1>
            <p>{description}</p>
            <p>Fee: {fees}</p>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">Book Appointment</button>
        </div>
    );
};

export default Service;