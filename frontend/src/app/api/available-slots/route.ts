
import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongoose';
import Appointment from '@/models/Appointment';

const ALL_SLOTS = ['3:30pm', '4:00pm', '4:30pm', '5:00pm', '5:30pm', '6:00pm'];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const date = searchParams.get('date');

  if (!date) {
    return NextResponse.json({ error: 'Date is required' }, { status: 400 });
  }

  await dbConnect();

  const selectedDate = new Date(date);
  const bookedSlots = await Appointment.find({ date: selectedDate }).distinct('time');

  const availableSlots = ALL_SLOTS.filter(slot => !bookedSlots.includes(slot));

  return NextResponse.json({ slots: availableSlots });
}
