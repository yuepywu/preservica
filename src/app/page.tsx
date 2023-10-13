'use client'

import { useRouter } from 'next/navigation'
import { Container, Row, Col } from 'react-bootstrap'
import Header from 'components/Header'
import LoginForm from 'components/LoginForm'

const Page = () => {
    
    const router = useRouter()

    const nextPage = () => {
        router.push('/user-list')
    }

    return (
        <Container fluid>
            <Row>
                <Header />
            </Row>
            <Container>
                <Row>
                    <Col xs md="3" lg="4" />
                    <Col xs="12" md="6" lg="4">
                        <LoginForm onClickContinue={nextPage} />
                    </Col>
                    <Col xs md="3" lg="4" />
                </Row>
            </Container>
        </Container>
    )
}

export default Page
