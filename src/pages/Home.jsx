import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import products from '../assets/data/products';
import '../styles/home.css';
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img.png';
import Services from '../Services/Services';
import ProductsList from '../components/UI/ProductsList';
import Clock from '../components/UI/Clock';
import counterImg from '../assets/images/counter-timer-img.png'
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [mobileProducts, setMobileProducts] = useState([]);
  const [wirelessProducts, setWirelessProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);

  const year = new Date().getFullYear();

  useEffect(() => {
    const filteredTrendingProducts = products.filter(
      (item) => item.category === "chair"
    );

    const filteredBestSalesProducts = products.filter(
      (item) => item.category === "sofa"
    );

    const filteredMobileProducts = products.filter(
      (item) => item.category === "mobile"
    );

    const filteredWirelessProducts = products.filter(
      (item) => item.category === "wireless"
    );

    const filteredPopularProducts = products.filter(
      (item) => item.category === "watch"
    );

    setTrendingProducts(filteredTrendingProducts);
    setBestSalesProducts(filteredBestSalesProducts);
    setMobileProducts(filteredMobileProducts);
    setWirelessProducts(filteredWirelessProducts);
    setPopularProducts(filteredPopularProducts);
  }, []);

  return <Helmet title={"Home"}>
    <section className="hero__section">
      <Container>
        <Row>
          <Col lg="12" >
          <Carousel controls={false} className="carousel-container">
                <Carousel.Item>
                  <div className="hero__content">
                    <div className="hero__text-container">
                      <div className="hero__text">
                        <p className="hero__subtitle">Trending products in {year}</p>
                        <h2>Make Your Interior More Minimalistic & Modern</h2>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nihil quidem voluptate enim deleniti. Vero ipsam nobis aspernatur error alias!
                        </p>
                        <motion.button whileTap={{ scale: 1.2 }} className="btn btn-primary buy__btn">
                          <Link to='/shop'>SHOP NOW</Link>
                        </motion.button>
                      </div>
                    </div>
                    <div className="hero__img">
                      <img src={heroImg} alt="Hero" />
                    </div>
                  </div>
                </Carousel.Item>
                {/* Replicate the above Carousel.Item structure for additional slides */}
                <Carousel.Item>
                <div className="hero__content">
                    <div className="hero__text-container">
                      <div className="hero__text">
                        <p className="hero__subtitle">Trending products in {year}</p>
                        <h2>Make Your Interior More Minimalistic & Modern</h2>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nihil quidem voluptate enim deleniti. Vero ipsam nobis aspernatur error alias!
                        </p>
                        <motion.button whileTap={{ scale: 1.2 }} className="btn btn-primary buy__btn">
                          <Link to='/shop'>SHOP NOW</Link>
                        </motion.button>
                      </div>
                    </div>
                    <div className="hero__img">
                      <img src={heroImg} alt="Hero" />
                    </div>
                  </div>
                </Carousel.Item>
                {/* Add more Carousel.Item for additional slides */}
                <Carousel.Item>
                <div className="hero__content">
                    <div className="hero__text-container">
                      <div className="hero__text">
                        <p className="hero__subtitle">Trending products in {year}</p>
                        <h2>Make Your Interior More Minimalistic & Modern</h2>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nihil quidem voluptate enim deleniti. Vero ipsam nobis aspernatur error alias!
                        </p>
                        <motion.button whileTap={{ scale: 1.2 }} className="btn btn-primary buy__btn">
                          <Link to='/shop'>SHOP NOW</Link>
                        </motion.button>
                      </div>
                    </div>
                    <div className="hero__img">
                      <img src={heroImg} alt="Hero" />
                    </div>
                  </div>
                </Carousel.Item>
              </Carousel>
          </Col>
        </Row>
      </Container>
    </section>

    <Services />
    <section className="trending__products">
      <Container>
        <Row>
          <Col lg="12" className="text-center">
            <h2 className="section__title">Trending Products</h2>
          </Col>
          <ProductsList data={trendingProducts} />
        </Row>
      </Container>
    </section>

    <section className="best__sales">
    <Container>
        <Row>
          <Col lg="12" className="text-center">
            <h2 className="section__title">Best Sales</h2>
          </Col>

          <ProductsList data={bestSalesProducts} />
        </Row>
      </Container>
    </section>

    <section className="timer__count">
      <Container>
        <Row>
        <Col lg='3' md='6' className='text-end counter__img'>
            <img src={counterImg} alt="" />          
          </Col>
          <Col lg='4' md='8' className='count__down-col my-3'>

            <div className="clock__top-content">
              <h4 className='text-white fs-6 mb-2'>Limited Offers</h4>
              <h4 className='text-white fs-5 mb-3'>Quality Armchair</h4>
            </div>
            <Clock />

            
          </Col>
          <Col lg="2" md="4">
          </Col>
          <Col lg='3' md='6'>
          <motion.button whileTap={{ scale: 1.2 }} className='buy__btn store__btn'>
              <Link to="/shop">Visit Store</Link>
            </motion.button>
          </Col>
          
        </Row>
      </Container>
    </section>

    <section className="new__arrivals">
    <Container>
        <Row>
          <Col lg="12" className="text-center mb-5">
            <h2 className="section__title">New Arrivals</h2>
          </Col>

          <ProductsList data={mobileProducts} />
          <ProductsList data={wirelessProducts} />
        </Row>
      </Container>
    </section>

    <section className="popular__category">
    <Container>
        <Row>
          <Col lg="12" className="text-center mb-5">
            <h2 className="section__title">Popular in Category</h2>
          </Col>
          <ProductsList data={popularProducts} />
        </Row>
      </Container>
    </section>


  </Helmet>;
};

export default Home
