import connect from '@/dbconfig/dbconfig';
import User from '@/models/userModels';
import { NextRequest, NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs';

export async function POST(request: NextRequest) {
  await connect();
  try {
    const reqBody = await request.json();
    const { userName, email, password } = reqBody;
    console.log(reqBody);
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: 'User already exists', status: 400 });
    }

    const saltRounds = 10;
    const hashedPassword = await bcryptjs.hash(password, saltRounds);

    const newUser = new User({
      userName,
      email,
      password: hashedPassword,
    });
    const savedUser = await newUser.save();
    return NextResponse.json({
      message: 'User created successfully',
      status: 200,
      user: savedUser, // Avoid returning the full user object if it contains sensitive data
    });
  } catch (err: any) {
    return NextResponse.json({
      error: err.message, // Avoid exposing sensitive error details
      status: 500,
    });
  }
}
