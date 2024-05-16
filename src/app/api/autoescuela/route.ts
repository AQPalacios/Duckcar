import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function getAutoescuelas(){
    const res = await sql`SELECT * FROM autoescuela`;
    return NextResponse.json({res})
}