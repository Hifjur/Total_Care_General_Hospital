import { useParams } from 'react-router';
import useServiceContext from '../../../Hooks/useServiceContext';
import useServices from '../../../Hooks/useServices';

import AppointmentCard from '../AppointmentCard/AppointmentCard';


const Appointment = () => {
    const { appointmentId } = useParams();
    const {loadData} = useServices()
    const booked =loadData(appointmentId);
    console.log(booked);
    //const Booked = services.filter(service => service.id === appointmentId)
    return (
        <div>
            {/* {
               Booked.map(service => <AppointmentCard key={service.id} data={service}></AppointmentCard>)
            } */}
        </div>
    );


};

export default Appointment;