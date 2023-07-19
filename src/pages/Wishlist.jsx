import React from "react";
import "../styles/cart.css";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Container, Row, Col } from "reactstrap";

// import { motion } from "framer-motion";
import { wishlistActions } from "../redux/slices/wishlistSlice";
import { useSelector, useDispatch } from "react-redux";

import ProductCard from "../components/UI/ProductCard";

const Wishlist = () => {
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);
  const dispatch = useDispatch();

  const removeFromWishlist = (id) => {
    dispatch(wishlistActions.removeItem(id));
  };
  console.log(wishlistItems);

  return ( 
    <Helmet title="Cart">
      <CommonSection title="Wishlist" />
      <section>
        <Container>
          <Row>
            <Col lg="9" className="wishlist_items">
              {wishlistItems.length === 0 ? (
                <h2 className="fs-4 text-center">No Items added to the wishlist</h2>
              ) : (
                wishlistItems?.map((item, index  ) =>(
                  <ProductCard item={item} key={index} isWishlistPage removeFromWishlist={() => removeFromWishlist(item.id)} />
                ))
              )}
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Wishlist;