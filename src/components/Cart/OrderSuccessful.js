import React from 'react';
import CartList from './CartList';

const OrderSuccessful = (props) => {
    return (
        <React.Fragment>
            <CartList configurable={false} />
            <hr></hr>
        </React.Fragment>

    )
}
export default OrderSuccessful;