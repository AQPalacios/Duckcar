import { Client } from '@vercel/postgres';

const client = new Client({
  connectionString: process.env.POSTGRES_URL,
});

export async function connectToDatabase() {
  if (!client.connect) {
    await client.connect();
  }
  return client;
}