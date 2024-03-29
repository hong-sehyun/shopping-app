import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Container, Col, Row } from 'react-bootstrap';

const ProductDetail = () => {
  let {id} = useParams();

  const [product, setProduct] = useState(null);

  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/hong-sehyun/shopping-app/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
  }

  useEffect(() => {
    getProductDetail();
  },[])
  return (
    <Container>
      <Col>
        <img src={product?.img}/>
      </Col>
      <Col>
        <div>{product?.title}</div>
        <div>{product?.price}</div>
      </Col>
    </Container>
  )
}

export default ProductDetail