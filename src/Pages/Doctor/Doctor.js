import React from 'react';

const Doctor = (props) => {
    const {name, img, hours, Specialist} = props.data;
    return (
        <div className="grid justify-items-center p-2 border-4 m-3 filter drop-shadow-2xl rounded">
            <img className="rounded border-4 border-blue-200" src={img} alt="" />
            <div className="pb-3 pt-3">
                <h1 className="text-xl font-black">{name}</h1>
                <p className="text-green-500  font-semibold">{Specialist}</p>
                <p>Hours: <span className="text-red-500">{hours}</span></p>
                
            </div>
        </div>
    );
};

export default Doctor;