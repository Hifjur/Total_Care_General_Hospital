import React from 'react';
import { Link, Nav, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import banner from '../../../Images/Banner.jpg'
const Banner = () => {
    return (
        <div className="lg:mb-96 md:mb-40 sm:mb-28">



            <figure className="relative cursor-pointer">
                <img clasName="mx-auto" src={banner} alt="" />
                <figcaption className="relative text-lg lg:-mt-96 md:-mt-40 sm:-mt-28 mx-auto px-auto text-white px-4">
                    <div>

                        <Link to="/doctors">
                            <h1 className="text-4xl text-blue-400 bg-gray-200 bg-opacity-80 font-bold hover:text-green-500 text-center">TOTAL CARE GENERAL HOSPITAL</h1>
                        </Link>
                    </div>
                    <div>
                        <h1>We Care!</h1>
                    </div>
                </figcaption>
            </figure>
        </div>
    );
};

export default Banner;