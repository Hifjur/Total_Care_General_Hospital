import { useEffect, useState } from "react";

const useServices = () => {
    const [service, serService] = useState([]);
    useEffect(() => {
        fetch('./services.json')
        .then(res => res.json())
        .then(data => serService(data));
    },[])
    return {service};
};

export default useServices;