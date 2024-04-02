import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../component/ProductCard';
import { useSearchParams } from 'react-router-dom';
import { productAction } from "../redux/actions/productAction";
import { useDispatch, useSelector } from 'react-redux';

const ProductAll = () => {

  //  const [productList, setProductList] = useState([]);
  const productList = useSelector((state) => state.product.productList);
  const [query, setQuery] = useSearchParams();
  const dispatch = useDispatch();

  const getProducts = () => {
    let searchQuery = query.get('q') || "";
    dispatch(productAction.getProducts(searchQuery));
  }

  useEffect(() => {
    getProducts()
  }, [query])

  return (
    <div>
      <Container>
        <Row>
          {productList.map((menu, index) => (
            <Col key={index} xl={3} lg={4} md={6} sm={12} className="product-list-container">
              <ProductCard item={menu} />
            </Col>
          ))}
        </Row>
      </Container>
      <ProductCard />
    </div>
  )
}

export default ProductAll