
import { useState, useRef } from 'react'
import {
    Form,
    Alert,
    Card, 
    ListGroup,
    Button
} from 'react-bootstrap'
import { Heading } from './styles'
import { ILoginValidationErrors, ILoginFormProps } from './types'

const LoginForm: React.FC<ILoginFormProps> = ({ onClickContinue }) => {
    const emailRef = useRef<HTMLInputElement | null>(null)
    const passwordRef = useRef<HTMLInputElement | null>(null)
    const [formErrors, setFormErrors] = useState<ILoginValidationErrors>({
      email: '',
      password: '',
    })
  
    const validateForm = () => {
        let errors: ILoginValidationErrors = { email: '', password: '' }
        if (emailRef.current && emailRef.current.value.length < 8) {
            errors.email = 'Email must be more than 7 characters'
        } else if (emailRef.current && !/\S+@\S+\.\S+/.test(emailRef.current.value)) {
            errors.email = 'Invalid email address format'
        }
        if (passwordRef.current && passwordRef.current.value.length < 9) {
            errors.password = 'Password must be more than 8 characters'
        }
        setFormErrors(errors)
        return Object.values(errors).every((error) => error === '')
    }
  
    const handleContinueClick = () => {
        if (validateForm()) {
            onClickContinue()
        }
    }
  
    return (
        <Card>
            <Form>
                <ListGroup variant="flush">
                    <RenderForm
                        emailRef={emailRef}
                        passwordRef={passwordRef}
                        formErrors={formErrors}
                    />
                    <ListGroup.Item>
                        <Button variant="info" onClick={handleContinueClick}>
                            Continue
                        </Button>
                    </ListGroup.Item>
                </ListGroup>
            </Form>
        </Card>
    )
}
  
const RenderForm = ({
    emailRef,
    passwordRef,
    formErrors,
} : {
    emailRef: any
    passwordRef: any
    formErrors: ILoginValidationErrors
}) => {
    return (
        <>
            <ListGroup.Item>
                <Heading>Login</Heading>
            </ListGroup.Item>
            <ListGroup.Item>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="emailInput">Email address</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        ref={emailRef}
                        id="emailInput"
                    />
                    {formErrors.email && <Alert variant="danger">{formErrors.email}</Alert>}
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="passwordInput">Password</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        placeholder="Password"
                        ref={passwordRef}
                        id="passwordInput"
                    />
                    {formErrors.password && (
                        <Alert variant="danger">{formErrors.password}</Alert>
                    )}
                </Form.Group>
            </ListGroup.Item>
        </>
    )
}
  
export default LoginForm