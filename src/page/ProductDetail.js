import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Container, Col, Row, Button, Form } from 'react-bootstrap';

const ProductDetail = () => {
  let {id} = useParams();

  const [product, setProduct] = useState(null);
//  const [size, setSize] = useState(null);

  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/hong-sehyun/shopping-app/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProduct(data);
  }

  useEffect(() => {
    getProductDetail();
  },[])
  return (
    <Container>
      <Row>
        <Col className='product-img'>
          <img src={product?.img}/>
        </Col>
        <Col>
          <div>{product?.title}</div>
          <div>₩{product?.price}</div>
          <div>{product?.choice == true ? "Conscious Choice" : ""}</div>
          {product?.size && (
            <Form.Select aria-label="Default select example">
              <option>사이즈 선택</option>
              {product.size.map((size) => (
                <option value={size}>{size}</option>
              ))}
            </Form.Select>
          )}
          <div><Button variant='danger' type="submit">추가</Button></div>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail