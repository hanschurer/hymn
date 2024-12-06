const { sql } = require('@vercel/postgres')
// import { unstable_noStore as noStore } from 'next/cache'

export async function fetchTags() {
  // noStore()
  try {
    const data = await sql`Select * from tags_data;`
    return data.rows.pop().tags
  } catch (error) {
    console.error('Database Error:', error)
    throw new Error('Failed to fetch tags data.')
  }
}

export async function fetchProjects() {
  try {
    const data = await sql`Select * from projects;`
    return data.rows
  } catch (error) {
    console.error('Database Error:', error)
    throw new Error('Failed to fetch projects data.')
  }
}
