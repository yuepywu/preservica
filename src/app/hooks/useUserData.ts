import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setUserAction } from 'states/usersReducer'

const useUserData = () => {
	const dispatch = useDispatch()
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch('/api/users')
				if (response.ok) {
					const data = await response.json()
					dispatch(setUserAction(data))
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
	}, [dispatch])

	return {
		loading,
	}
}

export default useUserData