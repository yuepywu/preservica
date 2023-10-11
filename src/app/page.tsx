"use client"

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import LoginForm from './components/LoginForm/LoginForm'

export default function Page() {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Welcome to Login Page!</h1>
          <LoginForm />
        </Col>
      </Row>
    </Container>
  )
}
