import { NextResponse } from 'next/server'
import { promises as fs } from 'fs'

export async function GET() {
	try {
		const data = await fetchDataFromAPI()

		return NextResponse.json(data)
	} catch (error) {
		console.error('Error while fetching data:', error)

		const fallbackData = await readLocalJSONFile('app/api/users/fallback.json')
		return NextResponse.json(fallbackData)
  }
}

async function fetchDataFromAPI() {
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

async function readLocalJSONFile(filePath) {
	const fullPath = process.cwd() + filePath

	try {
		const localData = await fs.readFile(fullPath, 'utf-8')
		return JSON.parse(localData)
	} catch (error) {
		console.error('Failed to read local JSON file:', error)
		return []
	}
}