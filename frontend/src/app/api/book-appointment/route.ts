import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongoose';
import Appointment from '@/models/Appointment';

export async function POST(request: Request) {
  const body = await request.json();
  const { date, time, name, email, phone } = body;

  if (!date || !time || !name || !email || !phone) {
    return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
  }

  await dbConnect();

  // Check if the slot is still available
  const existingAppointment = await Appointment.findOne({ date, time });
  if (existingAppointment) {
    return NextResponse.json({ error: 'This slot is no longer available' }, { status: 409 });
  }

  // Create new appointment
  const newAppointment = new Appointment({ date, time, name, email, phone });
  await newAppointment.save();

  return NextResponse.json({ message: 'Appointment booked successfully' }, { status: 201 });
}
