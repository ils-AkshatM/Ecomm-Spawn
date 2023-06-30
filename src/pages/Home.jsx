import React from 'react';

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import '../styles/home.css';
import Helmet from "../components/Helmet/Helmet";

import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img.png';

import Services from '../Services/Services';

const Home = () => {
  const year = new Date().getFullYear();
  return <Helmet title={"Home"}>
    <section className="hero__section">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <p className="hero__subtitle">Trending products in {year}</p>
              <h2>Make Your Interior More Minimalistic & Modern</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nihil quidem voluptate enim deleniti. Vero ipsam nobis aspernatur error alias!
              </p>

              <motion.button whileTap={{ scale: 1.2 }} className="buy__btn">
                <Link to='/shop'>SHOP NOW</Link>
              </motion.button>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="hero__img">
              <img src={heroImg} alt="Hero" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    <Services />
  </Helmet>;
};

export default Home
