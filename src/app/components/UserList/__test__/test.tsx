
import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import UserList from 'components/UserList'

const mockStore = configureStore()

describe('UserList', () => {
  it('handles "Details" and "Delete" button clicks', () => {

    const initialState = {
      usersStore: {
        users: [
          {
            id: 1,
            name: 'User 1',
            username: 'user1',
            email: 'user1@example.com',
            isHide: false,
          },
        ],
        searchTerm: '',
        selectedUser: null,
      },
    }

    const store = mockStore(initialState)

    const { getByText } = render(
      <Provider store={store}>
        <UserList />
      </Provider>
    )

    const detailsButton = getByText('Details')
    fireEvent.click(detailsButton)

    const actions = store.getActions()
    expect(actions).toContainEqual({ type: 'SET_SELECTED_USER', payload: 1 })

    const deleteButton = getByText('Delete')
    fireEvent.click(deleteButton)

    const updatedActions = store.getActions()
    expect(updatedActions).toContainEqual({ type: 'TOGGLE_USER_VISIBILITY', payload: 1 })
  })
})