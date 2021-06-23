import React from 'react';

function OrderComplete() {
  return (
    <div className='row'>
      <div className='col-sm-10 offset-sm-1 text-center'>
        <p className='icon-addcart'>
          <span>
            <i className='icon-check'></i>
          </span>
        </p>
        <h2 className='mb-4'>
          Thank you for purchasing, Your order is complete
        </h2>
        <p>
          <a href='index.html' className='btn btn-primary btn-outline-primary'>
            Home
          </a>
          <a href='shop.html' className='btn btn-primary btn-outline-primary'>
            <i className='icon-shopping-cart'></i> Continue Shopping
          </a>
        </p>
      </div>
    </div>
  );
}

export default OrderComplete;
