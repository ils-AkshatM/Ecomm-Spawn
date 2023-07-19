import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "../styles/checkout.css";

const Checkout = () => {
  const totalQty = useSelector(state => state.cart.totalQuantity);
  const totalAmount = useSelector(state => state.cart.totalAmount);

  const [billingDetails, setBillingDetails] = useState({
    name: '',
    email: '',
    number: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
  });

  const isOrderDisabled = Object.values(billingDetails).some(value => value === '');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBillingDetails(prevState => ({ ...prevState, [name]: value }));
  };

  const handlePlaceOrder = () => {
    if (!isOrderDisabled) {
      // Place the order and show the success toast message
      toast.success("Order placed successfully!", {
        position: "bottom-right",
        autoClose: 3000, // Auto close the toast after 3 seconds
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <h6 className='mb-4 fw-bold'>Billing Information</h6>
              <Form className='billing__form'>
                <FormGroup className='form__group'>
                  <input
                    type="text"
                    name="name"
                    placeholder='Enter your Name'
                    value={billingDetails.name}
                    onChange={handleInputChange}
                  />
                </FormGroup>

                <FormGroup className='form__group'>
                  <input
                    type="email"
                    name="email"
                    placeholder='Enter your Email (optional)'
                    value={billingDetails.email}
                    onChange={handleInputChange}
                  />
                </FormGroup>

                <FormGroup className='form__group'>
                  <input
                    type="number"
                    name="number"
                    placeholder='Enter your Number'
                    value={billingDetails.number}
                    onChange={handleInputChange}
                  />
                </FormGroup>

                <FormGroup className='form__group'>
                  <input
                    type="text"
                    name="address"
                    placeholder='Street Address'
                    value={billingDetails.address}
                    onChange={handleInputChange}
                  />
                </FormGroup>

                <FormGroup className='form__group'>
                  <input
                    type="text"
                    name="city"
                    placeholder='City'
                    value={billingDetails.city}
                    onChange={handleInputChange}
                  />
                </FormGroup>

                <FormGroup className='form__group'>
                  <input
                    type="text"
                    name="postalCode"
                    placeholder='Postal Code'
                    value={billingDetails.postalCode}
                    onChange={handleInputChange}
                  />
                </FormGroup>

                <FormGroup className='form__group'>
                  <input
                    type="text"
                    name="country"
                    placeholder='Country'
                    value={billingDetails.country}
                    onChange={handleInputChange}
                  />
                </FormGroup>
              </Form>
            </Col>

            <Col lg='4'>
              <h3 className='mb-2'>Order Details</h3>
              <div className="checkout__cart">
                <h6>Total Qty: <span>{totalQty} items </span></h6>
                <h6>Subtotal: <span>${totalAmount}</span></h6>
                <h6><span>Shipping: <br />
                  Free Shipping</span>
                  <span>$0</span>
                </h6>
                <h4>Total Cost: <span>${totalAmount}</span></h4>
                {/* Disable the button if billingDetails are not complete */}
                <motion.button
                  whileTap={{ scale: 1.2 }}
                  className='buy__btn auth__btn w-100'
                  onClick={handlePlaceOrder}
                  disabled={isOrderDisabled}
                >
                  Place an Order
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
