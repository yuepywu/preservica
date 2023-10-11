"use client"

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import LoginForm from './components/LoginForm/LoginForm'

export default function Page() {
  return (
    <Container>
      <Row>
        <Col></Col>
        <Col>
          <h1 className="mt-5 mb-4">Login</h1>
          <LoginForm />
        </Col>
        <Col></Col>
      </Row>
    </Container>
  )
}
