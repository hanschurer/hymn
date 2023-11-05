/* eslint-disable prettier/prettier */
const { db } = require('@vercel/postgres')

const projects = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'User',
    description: 'user@nextmail.com',
  },
]

async function seedProjects(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS projects (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description TEXT NOT NULL
      );
    `

    console.log(`Created "project" table`)

    // Insert data into the "users" table
    const insertedProjects = await Promise.all(
      projects.map(async (project) => {
        return client.sql`INSERT INTO projects (id, name, description)
        VALUES (${project.id}, ${project.name}, ${project.description})
        ON CONFLICT (id) DO NOTHING;
      `
      })
    )

    console.log(`Seeded ${insertedProjects.length} users`)

    return {
      createTable,
      projects: insertedProjects,
    }
  } catch (error) {
    console.error('Error seeding projects:', error)
    throw error
  }
}

async function main() {
  const client = await db.connect()

  await seedProjects(client)

  await client.end()
}

main().catch((err) => {
  console.error('An error occurred while attempting to seed the database:', err)
})
