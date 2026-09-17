import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({name: "Henry", courses: "43", credits: "189", school: "VAMK"});
}