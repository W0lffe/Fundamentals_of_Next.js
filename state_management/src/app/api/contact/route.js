import { NextResponse } from 'next/server';

export async function POST(req) {
    const body = await req.json();

    if(!req.headers.get("authorization") === "Bearer eztoken"){
        return NextResponse.json(
            { message: `Not authorized!` },
            { status: 401 }
        )
    }

    if (!body.name || !body.message) {
        return NextResponse.json(
            { message: `Bad request, missing name or message!` },
            { status: 400 }
        )
    }

    return NextResponse.json(
        { message: `Hello received, ${body.name}!` },
        { status: 201 }
    );
}