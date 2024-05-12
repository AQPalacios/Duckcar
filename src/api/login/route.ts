import {sql, db} from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request){
    const response = await sql`SELECT * FROM autoescuela`;
    return NextResponse.json({response});
}