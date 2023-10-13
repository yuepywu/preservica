import { NextResponse } from 'next/server'
import { promises as fs } from 'fs'

const handleDataFetching = async (fetchFunction, fallbackFunction) => {
	try {
		const data = await fetchFunction()
		return NextResponse.json(data)
	} catch (error) {
		console.error('Error while fetching data:', error)
		const fallbackData = await fallbackFunction()
		return NextResponse.json(fallbackData)
	}
}

export const GET = async () => {
	return handleDataFetching(fetchDataFromAPI, () =>
		readLocalJSONFile('app/api/users/fallback.json')
	)
}

export const fetchDataFromAPI = async () => {
	const apiEndpoint = 'https://jsonplaceholder.typicode.com/users'
	try {
		const res = await fetch(apiEndpoint)
	if (!res.ok) {
		throw new Error(`Failed to fetch data from the API: ${res.statusText}`)
	}
		return await res.json()
	} catch (error) {
		throw error
	}
}

export const readLocalJSONFile = async (filePath) => {
	const fullPath = process.cwd() + filePath
	try {
		const localData = await fs.readFile(fullPath, 'utf-8')
		return JSON.parse(localData)
	} catch (error) {
		console.error('Failed to read local JSON file:', error)
		return []
	}
}