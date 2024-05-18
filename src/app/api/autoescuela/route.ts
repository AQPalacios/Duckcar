// import { sql } from "@vercel/postgres";
// import { NextResponse } from "next/server";


// export async function GET(request: Request) {
//     const autoescuelas = await sql`SELECT * FROM autoescuela`;
//     return NextResponse.json(autoescuelas);
// }

import { query } from '@/lib/db';
import { NextApiRequest, NextApiResponse } from 'next';
// import { query } from '../../lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const result = await query('SELECT * FROM autoescuela');
    console.log(result);
    res.status(200).json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}