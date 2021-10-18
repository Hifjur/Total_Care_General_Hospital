import { useEffect, useState } from "react";

const useAmbulance = () => {
    const [ambulance, setAmbulance] = useState([]);
    useEffect(() => {
        fetch('./ambulance.json')
        .then(res => res.json())
        .then(data => setAmbulance(data));
    },[])
    return {ambulance};
};

export default useAmbulance;