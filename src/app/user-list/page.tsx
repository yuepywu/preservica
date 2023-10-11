'use client'

import { useState, useEffect } from 'react'
import { Container, Row, Col, Table, Button } from 'react-bootstrap'
import { User } from './page.types'

const UserListPage = () => {
  
    const [users, setUsers] = useState<User[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('/api/users') // Use your API route path
                if (response.ok) {
                    const data = await response.json()
                    setUsers(data)
                } else {
                    console.error('API request failed:', response.status, response.statusText)
                }
            } catch (error) {
                console.error('An error occurred while fetching data:', error)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])

  return (
    <Container>
        <Row>
            <Col>
                <h1>User List</h1>
            </Col>
        </Row>
        <Row>
            <Col>
                {loading ? (
                    <p>Loading user data...</p>
                ) : (
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user.id}>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>
                                    <Button variant="info" disabled>
                                        Details
                                    </Button>{' '}
                                    <Button variant="danger" disabled>
                                        Delete
                                    </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                )}
            </Col>
        </Row>
    </Container>
  )
}

export default UserListPage