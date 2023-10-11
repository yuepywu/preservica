import React, { useState, ChangeEvent } from 'react'
import { Form, Button, Alert } from 'react-bootstrap'
import { ValidationErrors, email, password } from './LoginForm.types'

function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [formErrors, setFormErrors] = useState<ValidationErrors>({ email: '', password: '' })

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    if (name === 'email') {
      setEmail(value)
      validateEmail(value)
    } else if (name === 'password') {
      setPassword(value)
      validatePassword(value)
    }
  }

  const validateEmail = (value: email) => {
    if (value.length < 8) {
      setFormErrors((prevErrors) => ({ ...prevErrors, email: 'Email must be more than 7 characters' }))
    } else if (!/\S+@\S+\.\S+/.test(value)) {
      setFormErrors((prevErrors) => ({ ...prevErrors, email: 'Invalid email address format' }))
    } else {
      setFormErrors((prevErrors) => ({ ...prevErrors, email: '' }))
    }
  }

  const validatePassword = (value: password) => {
    if (value.length < 9) {
      setFormErrors((prevErrors) => ({ ...prevErrors, password: 'Password must be more than 8 characters' }))
    } else {
      setFormErrors((prevErrors) => ({ ...prevErrors, password: '' }))
    }
  }

  const handleSubmit = () => {
    console.log('Email:', email)
    console.log('Password:', password)
  }

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="Enter email"
          value={email}
          onChange={handleInputChange}
        />
        {formErrors.email && <Alert variant="danger">{formErrors.email}</Alert>}
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleInputChange}
        />
        {formErrors.password && <Alert variant="danger">{formErrors.password}</Alert>}
      </Form.Group>

      <Button variant="primary" onClick={handleSubmit} disabled={!!formErrors.email || !!formErrors.password}>
        Continue
      </Button>
    </Form>
  )
}

export default LoginForm