import { useEffect, useState } from "react";

const useServices = () => {
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch('./services.json')
        .then(res => res.json())
        .then(data => setService(data));
    },[])
    const loadData = (id) =>{
        const booked =service.filter(service.id === id);
        return booked;
    }
    return {service,
    loadData};
};

export default useServices;