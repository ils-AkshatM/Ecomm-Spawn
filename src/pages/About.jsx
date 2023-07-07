import React from 'react';

import CommonSection from '../components/UI/CommonSection';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';
import tableImg from '../assets/images/table.jpg';
import '../styles/about.css';


const About = () => {
  return (
    <Helmet title="About">
        <CommonSection title="About US" />

        <section>
            <Container>
                <Row>
                    <Col lg='6'>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sunt sit obcaecati tempora dolores hic amet odit natus minima quos aliquid nam placeat, iste dignissimos nihil. Ex sint consequatur at praesentium facilis molestias provident ea, ab illum esse ratione inventore ipsa. Accusantium quos, qui praesentium eos in iusto suscipit explicabo.
                      </p>
                      <br />
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sunt sit obcaecati tempora dolores hic amet odit natus minima quos aliquid nam placeat, iste dignissimos nihil. Ex sint consequatur at praesentium facilis molestias provident ea, ab illum esse ratione inventore ipsa. Accusantium quos, qui praesentium eos in iusto suscipit explicabo.
                      </p>
                      <br />
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nesciunt iure qui a ad dolore adipisci, voluptate, unde aliquid eum officiis deleniti dolorem placeat hic expedita neque, quis dolores inventore atque vitae repellendus quas! Iusto sit labore, impedit facilis eum obcaecati maiores tempore itaque, consectetur rem minus vero perspiciatis commodi. Ipsam vitae fugit qui, quaerat quis quidem at ad totam aut eaque illum nobis, inventore impedit, provident assumenda. Corrupti sint obcaecati modi saepe officiis quae praesentium unde explicabo, dolorem quia laboriosam provident eum expedita voluptatibus cumque, molestias error, facere nesciunt? Neque, quis animi. Ipsa cumque numquam fugiat optio perspiciatis odio.</p>
                    </Col>
                    <Col lg='6'>
                      <img src={tableImg} alt="" className='aboutimg' height= '600px' />
                    </Col>
                </Row>
            </Container>
        </section>


    </Helmet>
  )
}

export default About
