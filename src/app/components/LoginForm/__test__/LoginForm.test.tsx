import '@testing-library/jest-dom'
import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { FillFormAndSubmit } from '../LoginForm.types'
import LoginForm from '../LoginForm'

const fillFormAndSubmit: FillFormAndSubmit = (getByLabelText, getByText, email, password) => {
    const emailInput = getByLabelText('Email address')
    const passwordInput = getByLabelText('Password')
    const continueButton = getByText('Continue')
  
    fireEvent.change(emailInput, { target: { value: email } })
    fireEvent.change(passwordInput, { target: { value: password } })
    fireEvent.click(continueButton)
  }

describe('LoginForm', () => {
  it('displays validation errors for an email input with less than 8 characters', () => {
    const { getByText, getByLabelText } = render(<LoginForm />)
    fillFormAndSubmit(getByLabelText, getByText, 'a@a', 'short')
    
    // Ensure the error messages are displayed
    expect(getByText('Email must be more than 7 characters')).toBeInTheDocument()
  })

  it('displays validation errors for an invalid email', () => {
    const { getByText, getByLabelText } = render(<LoginForm />)
    fillFormAndSubmit(getByLabelText, getByText, 'a@somelogndomain', 'short')
    
    // Ensure the error messages are displayed
    expect(getByText('Invalid email address format')).toBeInTheDocument()
  })

  it('displays validation errors for a password input with less than 9 characters', () => {
    const { getByText, getByLabelText } = render(<LoginForm />)
    fillFormAndSubmit(getByLabelText, getByText, 'abc@test', 'password')
    
    // Ensure the error message is displayed
    expect(getByText('Password must be more than 8 characters')).toBeInTheDocument()
  })

  it('displays a validation error for an invalid email format', () => {
    const { queryByText, getByLabelText, getByText } = render(<LoginForm />)
    fillFormAndSubmit(getByLabelText, getByText, 'valid@example.com', 'password123')
    
    // Ensure no error messages are displayed
    expect(queryByText('Email must be more than 7 characters')).toBeNull()
    expect(queryByText('Invalid email address format')).toBeNull()
    expect(queryByText('Password must be more than 8 characters')).toBeNull()
  })
})