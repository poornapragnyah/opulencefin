'use client'
import React, { useState } from 'react';
import '../globals.css';
import Image from 'next/image';

const AppointmentBooking = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    // Move to confirmation step
    setStep(3);
  };

  const renderStep1 = () => (
    <div>
      <h2 className="text-2xl font-bold mb-4">Select a Service</h2>
      <select 
        name="service" 
        value={formData.service} 
        onChange={handleInputChange}
        className="select select-bordered w-full max-w-xs"
        required
      >
        <option value="financial-planning">Financial Planning</option>
        <option value="investment-management">Investment Management</option>
        <option value="retirement-planning">Retirement Planning</option>
        <option value="tax-strategies">Tax Strategies</option>
      </select>
      <button className="btn btn-primary mt-4 rounded-xl" onClick={() => setStep(2)}>Next</button>
    </div>
  );

  const renderStep2 = () => (
    <form onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-4">Enter Your Details</h2>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className="input input-bordered"
          required
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="input input-bordered"
          required
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Phone</span>
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          className="input input-bordered"
          required
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Preferred Date</span>
        </label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleInputChange}
          min={new Date().toISOString().split('T')[0]}
          className="input input-bordered"
          required
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Preferred Time</span>
        </label>
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleInputChange}
          className="input input-bordered"
          min="08:00"
          max="18:00"
          required
        />
      </div>
      <div className="mt-4">
        <button type="button" className="btn btn-secondary mr-2 rounded-xl" onClick={() => setStep(1)}>Back</button>
        <button type="submit" className="btn btn-primary rounded-xl">Book Appointment</button>
      </div>
    </form>
  );

  const renderStep3 = () => (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Appointment Booked!</h2>
      <p>Thank you for booking an appointment with OpulenceFin. We'll be in touch soon to confirm your appointment.</p>
      <div className="mt-4">
        <button className="btn btn-primary rounded-xl" onClick={() => setStep(1)}>Book Another Appointment</button>
      </div>
    </div>
  );

  return (

    <div className="min-h-screen bg-base-200 flex items-center justify-center">
      <div className="card w-96 bg-base-100 shadow-xl rounded-xl">
        <div className="card-body">
          {step === 1 && renderStep1()}
          {step === 2 && renderStep2()}
          {step === 3 && renderStep3()}
        </div>
      </div>
    </div>

  );
};

export default AppointmentBooking;