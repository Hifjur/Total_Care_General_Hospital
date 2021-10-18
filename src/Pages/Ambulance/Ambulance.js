import React from 'react';

const Ambulance = (props) => {
    const {name, description, img, fees, phone} = props.data;
    return (
        <div className="grid justify-items-center p-2 border-4 m-3 filter drop-shadow-2xl rounded">
            <img className="rounded border-4 border-blue-200" src={img} alt="" />
            <div className="pb-3 pt-3">
                <h1 className="text-xl font-black">{name}</h1>
                <p>{description}</p>
                <p>Fee: ${fees}</p>
                <p className="text-green-500">Phone: {phone}</p>
                <button className="bg-gray-300 hover:bg-gray-400 text-green-900 font-bold py-2 px-4 mt-3 rounded inline-flex items-center">Call to hire</button>
            </div>
        </div>
    );
};

export default Ambulance;