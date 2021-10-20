
import { faMailBulk, faMapSigns, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
    return (
        <div className="mt-10 p-20 bg-gray-700 text-white object-bottom">
            <div>
            <h1 className="text-lg text-gray-300 font font-extrabold">About US</h1>
            <p>Treatment for every one!</p>
            <p><FontAwesomeIcon icon={faPhone} /> Contact us: 99867889996</p>
            <p><FontAwesomeIcon icon={faMailBulk} /> Email us:  totalcare@hospital.org</p>
            <p><FontAwesomeIcon icon={faMapSigns} /> Canada</p>
            
        </div>
            <small className="text-green-500">Copyright Total Care 2021 All Rights Reseved</small>
        </div>
    );
};

export default Footer;