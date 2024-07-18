import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HeroPic from '../public/assets/hero.png';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-base-200">
        {/* Visually hidden Image for optimization */}
      <div className="hidden">
        <Image src={HeroPic} alt="Background" layout="fill" objectFit="cover" quality={100} />
      </div>
      {/* Hero Section */}
      <section
  className="hero bg-primary text-primary-content py-20" // Increased padding for a bigger hero section
  style={{ backgroundImage: `url(${HeroPic.src})`, backgroundSize: 'cover', backgroundPosition: 'center 20%' }} // Adjusted background position
>
  <div className="hero-content text-center z-10">
    <div className="max-w-md bg-white p-2 md:p-8 rounded-xl opacity-85 shadow-xl">
      <h1 className="text-5xl font-bold">Elevate Your Wealth with OpulenceFin</h1>
      <p className="py-6">Expert Wealth Management Tailored to Your Ambitions</p>
      <button className="btn btn-secondary">Start Your Wealth Journey</button>
    </div>
  </div>
</section>

      {/* Key Benefits */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12 p-2">Why Choose OpulenceFin</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {['Personalized Strategies', 'Expert Financial Team', 'Comprehensive Wealth Solutions', 'Cutting-edge Technology'].map((benefit, index) => (
              <div key={index} className="card bg-base-100 shadow-xl m-2">
                <div className="card-body items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mb-4">
                    {/* Add icon here */}
                  </div>
                  <h3 className="card-title">{benefit}</h3>
                  <p>Brief description of the benefit</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-base-300 py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {['Financial Planning', 'Investment Management', 'Retirement Planning', 'Tax Strategies'].map((service, index) => (
              <div key={index} className="card bg-base-100 shadow-xl m-2">
                <div className="card-body">
                  <h3 className="card-title">{service}</h3>
                  <p>Brief description of the service</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <div key={index} className="card bg-base-100 shadow-xl m-2">
                <div className="card-body">
                  <p>"Testimonial text here..."</p>
                  <p className="font-semibold">- Client Name</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Insights */}
      <section className="bg-base-300 py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12">Recent Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <div key={index} className="card bg-base-100 shadow-xl m-2">
                <div className="card-body">
                  <h3 className="card-title">Blog Post Title</h3>
                  <p>Brief excerpt from the blog post...</p>
                  <div className="card-actions justify-end">
                    <Link href="/blog/post-slug" className="btn btn-primary btn-sm">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
  <section className="hero bg-primary text-primary-content">
    <div className="hero-content text-center">
      <div className="max-w-md">
        <h2 className="text-3xl font-semibold my-4">Ready to Secure Your Financial Future?</h2>
        <Link href="/calendar" className="btn btn-secondary">
          Schedule a Consultation
        </Link>
      </div>
    </div>
  </section>
    </div>
  );
};

export default HomePage;