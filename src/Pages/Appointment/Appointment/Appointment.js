import { useEffect, useState } from 'react';
import { useParams } from 'react-router';





const Appointment = (props) => {
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Hifjur/test/main/services.json')
            .then(res => res.json())
            .then(data => setService(data));
    }, [])
    console.log(service);
    const { appointmentId } = useParams();
    const bookingInfo = service[appointmentId - 1];
    console.log(bookingInfo);
    return (
        <div>
        { bookingInfo &&   <div className="grid justify-items-center p-2 border-4 m-3 filter drop-shadow-2xl rounded ">
                <img className="rounded border-4 border-blue-200" src={bookingInfo.img} alt="" />
                <div className="pb-3 pt-3">
                    <h1 className="text-xl font-black text-blue-600">{bookingInfo.name}</h1>
                    <p>{bookingInfo.description}</p>
                    <p>Fee: ${bookingInfo.fees}</p>

                    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 mt-3 rounded inline-flex items-center ">Confirm</button>
                </div>
            </div>}


        </div>
    );


};

export default Appointment;