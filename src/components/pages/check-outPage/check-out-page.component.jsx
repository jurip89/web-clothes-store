import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


import { selectCartItem, selectCartTotal } from '../../../redux/cart/cart.selector'; 

import CheckoutItem from '../../checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../stripe-button/stripe-button.component';

import './check-out-page.style.scss';

const CheckOutPage = ({cartItems,total}) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>PRODUCT</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {cartItems.map(cartItem => 
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />)}
        <div className="total">
            <span>TOTAL: ${total }</span>
        </div>
        <div className="warning-message">
            *Please Use the following method of payment:*<br/>
            card n:4242 4242 4242 4242
            exp date: 10/22
            ccv: 123 
        </div>
        <StripeCheckoutButton price={total}/>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItem,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckOutPage)