import { NextResponse } from 'next/server';
import { user_database } from '../route';

export async function GET(req, {params}) {
    const {id} = await params;
    console.log("id", id)
    const user = user_database.find((user) => Number(user.id) === Number(id));
    console.log("userdb", user_database)
    console.log("user", user)
  return NextResponse.json(user);
}