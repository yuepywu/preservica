import { NextResponse } from 'next/server'
import { promises as fs } from 'fs'

export async function GET() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')

    if (!res.ok) {
      return NextResponse.error(`Failed to fetch data from the API: ${res.statusText}`, res.status)
    }

    const data = await res.json()

    return NextResponse.json(data)
  } catch (error) {
    
    const fallbackData = await readLocalJSONFile()
    return NextResponse.json(fallbackData)
  }
}

async function readLocalJSONFile() {
  try {
    const localData = await fs.readFile(process.cwd() + 'app/api/users/fallback.json', 'utf-8')
    return JSON.parse(localData)
  } catch (error) {
    console.error('Failed to read local JSON file:', error)
    return []
  }
}