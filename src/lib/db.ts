import { Pool } from '@vercel/postgres';

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL, // Asegúrate de tener la URL de la base de datos en tus variables de entorno
});

export async function query(text: string, params?: any[]) {
  const res = await pool.query(text, params);
  return res;
}