import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../component/ProductCard';

const ProductAll = () => {

    const [productList, setProductList] = useState([]);

    const getProducts = async() => {
        let url = `https://my-json-server.typicode.com/hong-sehyun/shopping-app/products/${id}`;
        let response = await fetch(url);
        let data = await response.json();
        
        setProductList(data);

    }

    useEffect(() => {
        getProducts()
    },[])

  return (
    <div>
        <Container>
          <Row>
            {productList.map((menu) => (
              <Col xl={3} lg={4} md={6} sm={12}>
                <ProductCard item={menu}/>
              </Col>
            ))}
          </Row>
        </Container>
        <ProductCard />
    </div>
  )
}

export default ProductAll