import React from 'react';
import useServices from '../../../Hooks/useServices';
import Service from '../Service/Service';

const Services = () => {
    const services = useServices();
    console.log(services);
    const { service } = services;
    return (
        <div>
            <h1 className="text-4xl text-gray-300 p-20 bg-gray-700 font-black">Our Services</h1>
            <div  className=" container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    service.map(service => <Service key={service.id} data={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;