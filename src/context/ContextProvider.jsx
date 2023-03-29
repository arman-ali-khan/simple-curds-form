import React, { createContext, useState } from 'react';

export const UpdateProvider = createContext()
const ContextProvider = ({children}) => {
    const [update,setUpdate] = useState(false)
    const updateInfo = {update,setUpdate}
    return (
        <UpdateProvider.Provider value={updateInfo}>
            {children}
        </UpdateProvider.Provider>
    );
};

export default ContextProvider;