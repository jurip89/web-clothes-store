import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const puclishableKey = 'pk_test_51JfmcfGNozaUjf5YhYKT2FpehKxle7GxugO5MDOT9U0WtnxKiJaKgyRo3UKNqcLHz9kNTEJ1GxtPhOv6aREFtX9U00iseB2QGo';
    
    const onToken = token => {
        console.log(token);
        alert('Payment was successfull')
    }
    
    return (
        <StripeCheckout
            label='Pay Now!'
            name='CRWN clothing S.p.A.'
            billingAddress
            shippingAddress
            image="https://images.unsplash.com/photo-1560060141-7b9018741ced?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=579&q=80"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now!"
            token={onToken}
            stripeKey={puclishableKey}
        />
    )
}

export default StripeCheckoutButton