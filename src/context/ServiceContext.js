import React, { createContext } from 'react';
import useServices from "../Hooks/useServices";


export const serviceContext = createContext();
const ServiceProvider = ({children}) => {
    const allContext = useServices();
    return(
        <serviceContext.Provider value={allContext}>
            {children}
        </serviceContext.Provider>
    )
}

export default ServiceProvider;