import React, { useState } from 'react';

const Checkout = () => {
  const [deliveryMethod, setDeliveryMethod] = useState('pickup');

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>

      {/* Order Summary */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Order Summary</h2>
        <div className="border rounded p-4">
          <ul>
            <li className="flex justify-between">
              <span>Tomatoes (2kg)</span>
              <span>$6.00</span>
            </li>
            <li className="flex justify-between">
              <span>Seed Pack</span>
              <span>$2.50</span>
            </li>
          </ul>
          <hr className="my-3" />
          <div className="flex justify-between font-semibold">
            <span>Subtotal</span>
            <span>$8.50</span>
          </div>
          <div className="flex justify-between">
            <span>Delivery Fee</span>
            <span>{deliveryMethod === 'delivery' ? '$2.00' : '$0.00'}</span>
          </div>
          <div className="flex justify-between font-bold mt-2">
            <span>Total</span>
            <span>{deliveryMethod === 'delivery' ? '$10.50' : '$8.50'}</span>
          </div>
        </div>
      </section>

      {/* Buyer Info */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Buyer Information</h2>
        <div className="grid grid-cols-1 gap-4">
          <input className="input" type="text" placeholder="Full Name" required />
          <input className="input" type="tel" placeholder="Phone Number" required />
          <input className="input" type="email" placeholder="Email (optional)" />
        </div>
      </section>

      {/* Delivery Method */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Delivery</h2>
        <div className="flex gap-4 mb-4">
          <label>
            <input
              type="radio"
              value="pickup"
              checked={deliveryMethod === 'pickup'}
              onChange={() => setDeliveryMethod('pickup')}
            />
            <span className="ml-2">Pickup</span>
          </label>
          <label>
            <input
              type="radio"
              value="delivery"
              checked={deliveryMethod === 'delivery'}
              onChange={() => setDeliveryMethod('delivery')}
            />
            <span className="ml-2">Delivery</span>
          </label>
        </div>

        {deliveryMethod === 'delivery' && (
          <div className="grid grid-cols-1 gap-4">
            <input className="input" type="text" placeholder="Location / Area" required />
            <input className="input" type="text" placeholder="Street or House Name" />
            <textarea className="input" placeholder="Delivery Instructions (optional)" />
          </div>
        )}
      </section>

      {/* Payment Method */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Payment</h2>
        <select className="input">
          <option>M-Pesa</option>
          <option>Paystack</option>
          <option>Stripe</option>
          <option>Cash on Delivery</option>
        </select>
      </section>

      {/* Terms and Submit */}
      <div className="mb-4">
        <label className="flex items-center">
          <input type="checkbox" required />
          <span className="ml-2">I agree to the terms and conditions.</span>
        </label>
      </div>

      <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
        Place Order & Pay
      </button>
    </div>
  );
};

export default Checkout;
