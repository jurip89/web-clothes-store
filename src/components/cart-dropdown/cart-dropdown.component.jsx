import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import { selectCartItem } from "../../redux/cart/cart.selector";
import { toggleCartHidden } from "../../redux/cart/cart.action";

import CustomButton from "../custom-button/custom-button-component";
import './cart-dropdown.style.scss'
import CartItem from "../cart-item/cart-item.component";

const CartDropdown = ({ cartItems, history, dispatch}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.length ?
                (cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />))
                :
                (<span className="empty-message">Your cart is empty</span>)
            }
        </div>
        <CustomButton onClick={
            () => {history.push('/checkout');
        dispatch(toggleCartHidden());}}>
            Go to Check Out
        </CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItem
})

export default withRouter(connect(mapStateToProps)(CartDropdown))
