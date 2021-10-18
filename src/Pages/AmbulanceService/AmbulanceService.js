import React from 'react';
import useAmbulance from '../../Hooks/useAmbulance';
import Ambulance from '../Ambulance/Ambulance';

const AmbulanceService = () => {
    const ambulances = useAmbulance();
    
    const { ambulance } = ambulances;
    return (
        <div>
            <h1 className="text-4xl text-gray-300 p-20 bg-gray-700 font-black">Ambulance Service</h1>
            <div className=" container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    ambulance.map(ambulance => <Ambulance key={ambulance.id} data={ambulance}></Ambulance>)
                }
            </div>
        </div>
    );
};

export default AmbulanceService;