import React from 'react';
import useDoctors from '../../Hooks/useDoctors';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const Doctors = useDoctors();
    const { doctors } = Doctors;
    return (
        <div>
            <h1 className="text-4xl text-gray-300 p-20 bg-gray-700 font-black underline">Doctors At Your Service</h1>
            <div className=" container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    doctors.map(doctor => <Doctor key={doctor.id} data={doctor}></Doctor>)
                }
            </div>
        </div>
    );
};

export default Doctors;