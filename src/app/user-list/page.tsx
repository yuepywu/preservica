'use client'

import React from 'react'
import { Provider } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'
import store from 'states/store'
import Header from 'components/Header'
import UserList from 'components/UserList'
import UserProfile from 'components/UserProfile'

const UserListPage = () => {
    return (
        <Provider store={store}>
            <Container fluid>
                <Row>
                    <Header />
                </Row>
                <Container>
                    <Row>
                        <Col xs="12" md="6" lg="6">
                            <UserList />
                        </Col>
                        <Col xs="12" md="6" lg="6">
                            <UserProfile />
                        </Col>
                    </Row>
                </Container>
            </Container>
        </Provider>
    )
}

export default UserListPage
