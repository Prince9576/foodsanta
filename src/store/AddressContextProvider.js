import React, { useState } from 'react';
import AddressContext from './AddressContext';
const AddressContextProvider = (props) => {

    const [address, setAddress] = useState();
    const [isAddressAvailable, setIsAddressAvailable] = useState(false);
    const addAddressHandler = (addressObj) => {
        console.log("Address added", addressObj);
        setAddress(addressObj)
        setIsAddressAvailable(true);
    }
    const addressContext = {
        address,
        isAddressAvailable,
        addAddress: addAddressHandler
    }
    return (
        <AddressContext.Provider value={addressContext}>
            {props.children}
        </AddressContext.Provider>
    )
}

export default AddressContextProvider;