import { Card, Form, InputGroup } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Avatar, ProfileWrapper } from './styles'
import { IStoreState, IUserStoreState } from 'states/types'
import { IUser } from 'types/user'

const UserProfile = () => {

  const users = useSelector((state: IStoreState) => state.usersStore.users)

  const selectedUsers = users.find((user: IUserStoreState) => user.isSelected  && !user.isHide) || {}

  console.log('selectedUsers', selectedUsers)

  if (Object.keys(selectedUsers).length === 0) return (<>Please select a user to read the profile.</>)
  
  const {
    username,
    name,
    email,
    address: { city, street, suite, zipcode },
    phone,
    company: { name: comapanyName }
  } = selectedUsers as IUser

  const concatenatedAddress = `${city}\n${street}\n${suite}\n${zipcode}`

  return (
    <Card className="mb-3">
        <Card.Body>
            <ProfileWrapper>
                <Avatar />
                <Card.Title>{name}</Card.Title>
                <Card.Text>{username}</Card.Text>
                <InputGroup size="sm" className="mb-3">
                    <InputGroup.Text>Email</InputGroup.Text>
                    <Form.Control type="email" value={email} disabled />
                </InputGroup>
                <InputGroup size="sm" className="mb-3">
                    <InputGroup.Text>Address</InputGroup.Text>
                    <Form.Control as="textarea" rows={4} value={concatenatedAddress} disabled/>
                </InputGroup>
                <InputGroup size="sm" className="mb-3">
                    <InputGroup.Text>Phone Number</InputGroup.Text>
                    <Form.Control type="text" value={phone} disabled/>
                </InputGroup>
                <InputGroup size="sm" className="mb-3">
                    <InputGroup.Text>Company Name</InputGroup.Text>
                    <Form.Control type="text" value={comapanyName} disabled/>
                </InputGroup>
            </ProfileWrapper>
        </Card.Body>
    </Card>
  )
}

export default UserProfile