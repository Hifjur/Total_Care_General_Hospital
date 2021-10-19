import React from 'react';

const Photo = (props) => {
    const {name, img} = props.data
    return (
        <div className="flex items-center justify-center ">
            <figure className="relative max-w-xs cursor-pointer">
                <img className="rounded-lg shadow-xl hover:shadow-2xl" src={img} alt=""/>
                <figcaption class ="absolute text-lg -mt-16 text-white px-4">
                <div>
                <h1 className="font-semibold">{name}</h1>
                </div>
                </figcaption>
            </figure>
        </div>
    );
};

export default Photo;