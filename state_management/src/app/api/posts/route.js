import { NextResponse } from 'next/server';

const mockPosts = [
    {user: "user1", message: "Hello from Next.js API!"},
    {user: "user2", message: "Hello to Next.js API!"}
]

export async function GET() {
    return NextResponse.json(mockPosts);
}