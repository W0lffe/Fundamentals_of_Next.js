import { NextResponse } from 'next/server';

export const user_database = [];

export async function GET() {
    return NextResponse.json({ users: user_database });
}

export async function POST(req) {
    const body = await req.json();

    if (!body.name || !body.email || !body.phone) {
        return NextResponse.json(
            { message: "Error: Missing user info! Fill all fields!" },
            { status: 400 }
        )
    }

    user_database.push({
        name: body.name,
        email: body.email,
        phone: body.phone,
        id: Date.now()
    });

    return NextResponse.json(
        { message: `User: ${body.name}, successfully added!` },
        { status: 201 }
    );
}