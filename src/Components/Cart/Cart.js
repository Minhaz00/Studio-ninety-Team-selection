import React from 'react';
import Hired from '../Hired/Hired';
import './Cart.css';
//=======================================
//       Modification of Cart
//=======================================        
const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    for (const candidate of cart) {
        total += candidate.Value;
    }
    return (
        <div className='cart'>
            <h3>Budget for selected Candidates</h3>
            <p>Total Hired: {cart.length}</p>
            <p>Total Expense: {total}</p>
            <h3>Selected Members: </h3>
            <p><Hired hired={cart}></Hired></p> 
        </div>
    );
};

export default Cart;