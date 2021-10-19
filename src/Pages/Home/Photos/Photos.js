import React, { useEffect, useState } from 'react';
import Photo from '../Photo/Photo';

const Photos = () => {
    const [photos, setPhotos] = useState([]);
    useEffect(() => {
        fetch('./photo.json')
            .then(res => res.json())
            .then(data => setPhotos(data));
    }, [])
    return (
        <div>
            <h1 className="mt-20 mb-20 text-4xl text-gray-300 p-20 bg-gray-700 font-black" id="photo-gallery"> Photo Gallery</h1>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    photos.map(photo => <Photo key={photo.id} data={photo}></Photo>)
                }
            </div>
        </div>
    );
};

export default Photos;