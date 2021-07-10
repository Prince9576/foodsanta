import React from 'react';

const AddressContext = React.createContext({
    address: {},
    isAddressAvailable: false,
    addAddress: (addressObj) => { },
})

export default AddressContext;