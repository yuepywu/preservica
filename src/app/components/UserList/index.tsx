import { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button, Form, InputGroup } from 'react-bootstrap'
import useUserData from 'hooks/useUserData'
import { IStoreState, IUserStoreState } from 'states/types'
import { IUser } from 'types/user'
import {
    SET_SEARCH_TERM,
    TOGGLE_USER_VISIBILITY,
    SET_SELECTED_USER
} from 'states/actionTypes'
import {
    Media,
    MediaLeft,
    MediaBody,
    Avatar,
    Name,
    UserName,
    Email
} from './styles'

const getPropertyValue = (obj: any, path: string): any => {
    const properties = path.split('.');
    return properties.reduce((acc, prop) => (acc && acc[prop]) || undefined, obj);
}

const searchProperties = [
    'name',
    'username',
    'email',
    'phone',
    'website',
    'address.street',
    'address.suite',
    'address.city',
    'address.zipcode',
    'address.geo.lat',
    'address.geo.lng',
    'company.name',
    'company.catchPhrase',
    'company.bs',
]

const UserList = () => {

    useUserData()
    
    const users = useSelector((state: IStoreState) => state.usersStore.users)

    console.log('Redux Store Users:', users)

    const searchTerm = useSelector((state: IStoreState) => state.usersStore.searchTerm)

    const filteredUsers = users.filter((user: IUserStoreState) => {
        const searchTermLower = searchTerm.toLowerCase()
        return !user.isHide && searchProperties.some((prop) => {
          const propertyValue = getPropertyValue(user, prop)
          return propertyValue.toLowerCase().includes(searchTermLower)
        })
    })

    const dispatch = useDispatch()

    const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: SET_SEARCH_TERM, payload: e.target.value })
    }, [])

    const toggleUserVisibility = useCallback((userId: number) => {
        dispatch({ type: TOGGLE_USER_VISIBILITY, payload: userId })
    }, [])

    const toggleUserSelection = useCallback((userId: number) => {
        dispatch({ type: SET_SELECTED_USER, payload: userId })
    }, [])

    console.log('Front End Visible Users', filteredUsers)

    return (
        <>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Search</InputGroup.Text>
                <Form.Control
                type="text"
                placeholder="Username"
                
                    value={searchTerm}
                    onChange={handleSearch}
                />
            </InputGroup>
            {filteredUsers.map((item: IUser) => (
                <Media key={`UserList-${item.id}`}>
                    <MediaLeft>
                        <Avatar />
                    </MediaLeft>
                    <MediaBody>
                        <Name>{item.name}</Name>
                        <UserName>{item.username}</UserName>
                        <Email>- {item.email}</Email>
                        <div>
                            <Button
                                variant="info"
                                size="sm"
                                onClick={() => toggleUserSelection(item.id)}
                            >
                                Details
                            </Button>
                            {' '}
                            <Button
                                variant="danger"
                                size="sm"
                                onClick={() => toggleUserVisibility(item.id)}
                            >
                                Delete
                            </Button>
                        </div>
                    </MediaBody>
                </Media>
            ))}
        </>
    )
}
  
export default UserList
