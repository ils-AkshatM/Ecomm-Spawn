import React, { useEffect, useState } from 'react';
import CommonSection from '../components/UI/CommonSection';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';
import '../styles/shop.css';
import products from '../assets/data/products';
import ProductsList from '../components/UI/ProductsList';

const Shop = () => {
  const [productsData, setProductsData] = useState(products);
  const [sortOrder, setSortOrder] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleFilter = (e) => {
    const filterValue = e.target.value;
    let filteredProducts = [];

    if (filterValue === 'sofa') {
      filteredProducts = products.filter((item) => item.category === 'sofa');
    } else if (filterValue === 'mobile') {
      filteredProducts = products.filter((item) => item.category === 'mobile');
    } else if (filterValue === 'chair') {
      filteredProducts = products.filter((item) => item.category === 'chair');
    } else if (filterValue === 'watch') {
      filteredProducts = products.filter((item) => item.category === 'watch');
    } else if (filterValue === 'wireless') {
      filteredProducts = products.filter((item) => item.category === 'wireless');
    }

    setFilteredProducts(filteredProducts);
    handleSearch('', filteredProducts);
  };

  const handleSearch = (searchTerm, filteredProducts = []) => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    let searchedProducts = [];

    if (filteredProducts.length > 0) {
      searchedProducts = filteredProducts.filter((item) =>
        item.productName.toLowerCase().includes(lowerCaseSearchTerm)
      );
    } else {
      searchedProducts = products.filter((item) =>
        item.productName.toLowerCase().includes(lowerCaseSearchTerm)
      );
    }

    setProductsData(searchedProducts);
  };

  useEffect(() => {
    const handleSort = (order) => {
      const sortedProducts = [...productsData].sort((a, b) => {
        if (order === 'ascending') {
          return a.price - b.price;
        } else if (order === 'descending') {
          return b.price - a.price;
        }
        return 0;
      });

      setProductsData(sortedProducts);
    };

    handleSort(sortOrder);
  }, [productsData, sortOrder]);

  return (
    <Helmet title="Shop">
      <CommonSection title="Products" />

      <section className='shop'>
        <Container>
          <Row>
            <Col lg="3" md="6">
              <div className="filter__widget">
                <select onChange={handleFilter}>
                  <option>Filter By Category</option>
                  <option value="sofa">Sofa</option>
                  <option value="mobile">Mobile</option>
                  <option value="chair">Chair</option>
                  <option value="watch">Watch</option>
                  <option value="wireless">Wireless</option>
                </select>
              </div>
            </Col>
            <Col lg="3" md="6" className="text-end">
              <div className="filter__widget">
                <select onChange={(e) => setSortOrder(e.target.value)}>
                  <option>Sort By</option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </select>
              </div>
            </Col>
            <Col lg="6" md="12">
              <div className="search__box">
                <input
                  type="text"
                  placeholder="Search......."
                  onChange={(e) => handleSearch(e.target.value, filteredProducts)}
                />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          <Row>
            {productsData.length === 0 ? (
              <h1 className="text-center">No Products are found!</h1>
            ) : (
              <ProductsList data={productsData} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Shop;
