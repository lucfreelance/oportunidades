import React from 'react';
import { Link } from 'react-router-dom';

const MiOrden = () => {
  return (
    <div>
      <h1>My Order</h1>
      <p>Your selected shops:</p>
      {/* Display the list of selected shops */}
      <ul>
        <li>Shop 1</li>
        <li>Shop 2</li>
        <li>Shop 3</li>
        {/* Add more shops */}
      </ul>

      <p>Total amount:</p>
      <p>$100</p>
      {/* Display the total amount */}
      
      <p>E-wallet:</p>
      <p>$50</p>
      {/* Display the e-wallet balance */}
      
      <p>Please note that the payment process is currently unavailable.</p>
      
      <p>You can proceed to complete your purchase manually:</p>
      <button>
        <Link to="/checkout">Proceed to Checkout</Link>
      </button>
    </div>
  );
}

export default MiOrden;
