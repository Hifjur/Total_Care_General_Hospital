import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useServices from '../../../Hooks/useServices';




const Appointment = (props) => {
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch('./services.json')
        .then(res => res.json())
        .then(data => setService(data));
    },[])
    console.log(service);
    const { appointmentId } = useParams();
    //  const a= useContext(ServiceContext);
     //console.log(a);
    return (
        <div>
            <h1>id: {appointmentId}</h1>
            
            
        </div>
    );


};

export default Appointment;