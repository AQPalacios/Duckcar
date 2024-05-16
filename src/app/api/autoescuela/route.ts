import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const res = await sql`SELECT * FROM autoescuela`;
        return NextResponse.json({ res });
    } catch (error) {
        console.log(error);
    }
}
