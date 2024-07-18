import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongoose';
import Appointment from '@/models/Appointment';

export async function GET() {
  await dbConnect();

  const startDate = new Date();
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + 30); // Get dates for the next 30 days

  const bookedDates = await Appointment.find({
    date: { $gte: startDate, $lte: endDate }
  }).distinct('date');

  const availableDates = [];
  for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
    if (!bookedDates.some(bookedDate => bookedDate.toDateString() === d.toDateString())) {
      availableDates.push(new Date(d));
    }
  }

  return NextResponse.json({ dates: availableDates });
}
