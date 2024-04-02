import React, { useState } from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { authenticateAction } from '../redux/actions/authenticateAction'

const Login = ({ setAuthenticate }) => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginUser = (event) => {
    event.preventDefault();
    dispatch(authenticateAction.login(id, password))
    navigate('/');
  }

  return (
    <Container>
      <Form onSubmit={(event) => loginUser(event)}>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Email
          </Form.Label>
          <Col sm="10">
            <Form.Control type="email" placeholder="name@example.com" onChange={(event)=>setId(event.target.value)}/>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Password
          </Form.Label>
          <Col sm="10">
            <Form.Control type="password" placeholder="Password" onChange={(event)=>setPassword(event.target.value)}/>
          </Col>
        </Form.Group>
        <Button variant='danger' type="submit">로그인</Button>
      </Form>
    </Container>
  )
}

export default Login