import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({name: "Henry", title: "Aspiring Web Dev"});
}