import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react'
import LoginForm from 'components/LoginForm'

describe('LoginForm', () => {
    
    // Behaviour test
    it('should have Email must be more than 7 characters message shown after email address input was <= 7', () => {
        const { getByText, getByLabelText } = render(<LoginForm onClickContinue={() => undefined} />)
    
        const emailInput = getByLabelText('Email address')
        fireEvent.change(emailInput, { target: { value: 'a@b.com' } })
    
        const continueButton = getByText('Continue')
        fireEvent.click(continueButton)
    
        expect(getByText('Email must be more than 7 characters')).toBeTruthy()
    })

    it('should have Password must be more than 8 characters message shown after invalid email address input', () => {
        const { getByText, getByLabelText } = render(<LoginForm onClickContinue={() => undefined} />)
    
        const passwordInput = getByLabelText('Password')
        fireEvent.change(passwordInput, { target: { value: 'pass1234' } })
    
        const continueButton = getByText('Continue')
        fireEvent.click(continueButton)
    
        expect(getByText('Password must be more than 8 characters')).toBeTruthy()
    })

    it('should have Invalid email invalid address message shown after invalid email address input', () => {
        const { getByText, getByLabelText } = render(<LoginForm onClickContinue={() => undefined} />)
    
        const emailInput = getByLabelText('Email address')
        fireEvent.change(emailInput, { target: { value: 'invalid-email' } })
    
        const continueButton = getByText('Continue')
        fireEvent.click(continueButton)
    
        expect(getByText('Invalid email address format')).toBeTruthy()
    })

})