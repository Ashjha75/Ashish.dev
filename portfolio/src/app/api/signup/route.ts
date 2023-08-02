import { connect } from '@/dbconfig/dbconfig';
import User from '@/models/userModels';
import { NextRequest, NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs';

connect();
export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { userName, email, password } = reqBody;
    console.log(reqBody);
    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json({ error: 'User already exists' });
    }

    const salt = await bcryptjs.hash;
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = new User({
      userName,
      email,
      password: hashedPassword,
    });
    const SavedUser = await newUser.save();
    return NextResponse.json({
      message: 'User created successfully',
      status: 200,
      SavedUser,
    });
  } catch (err: any) {
    return NextResponse.json({
      error: err.message,
      status: 500,
    });
  }
}
