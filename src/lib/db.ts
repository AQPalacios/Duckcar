import { Client, sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

const client = new Client({
  host: process.env.POSTGRES_HOST,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
});

export async function GET(request?: Request){
    const res = await sql`SELECT * FROM autoescuela`;
    return NextResponse.json({res})
}