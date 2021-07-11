import React, { useContext } from 'react';
import styles from './OrderSuccessful.module.css';
import CartList from './CartList';
import AddressContext from '../../store/AddressContext';

const OrderSuccessful = (props) => {
    const addressCtx = useContext(AddressContext);
    return (
        <React.Fragment>
            <div className={styles["cartlist-ctr"]}>
                <CartList configurable={false} />
            </div>
            <hr></hr>
            <div className={styles.delivering}>Delivering To :</div>
            <div className={styles["address-ctr"]}>
                <div
                    className={styles.heading}
                >{`${addressCtx.address.quarter}, ${addressCtx.address.apartment}`}</div>
                {addressCtx.address.sector && addressCtx.address.street && <div
                    className={styles.heading}
                >{`Street ${addressCtx.address.street}, Sector ${addressCtx.address.sector}`}</div>}
                <div
                    className={styles.heading}
                >{`${addressCtx.address.city}, ${addressCtx.address.state}, ${addressCtx.address.zip}`}</div>
            </div>
        </React.Fragment >

    )
}
export default OrderSuccessful;