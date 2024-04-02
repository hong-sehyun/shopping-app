import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Container, Col, Row, Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { productAction } from "../redux/actions/productAction";

const ProductDetail = () => {
  let {id} = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.productDetail);

  // const [product, setProduct] = useState(null);
//  const [size, setSize] = useState(null);

  const getProductDetail = async () => {
    dispatch(productAction.getProductDetail(id));
    // console.log(data);
    // setProduct(data);
  }

  useEffect(() => {
    getProductDetail();
  },[id])

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