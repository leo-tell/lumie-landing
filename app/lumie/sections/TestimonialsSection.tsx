'use client';
import { useState } from 'react';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      quote: "I've tested countless AI tools, but this one feels different — less like software, more like a guide that clears the fog in my projects.",
      author: "Sophia M.",
      role: "Product Designer",
      rating: "4d"
    },
    {
      quote: "Within days, it streamlined my workflow. The balance of precision and imagination it offers is unlike anything I've seen.",
      author: "David K.",
      role: "Data Analyst",
      rating: "2d"
    },
    {
      quote: "At first I was skeptical. But the clarity it brings into complex problems has almost become working with a second brain.",
      author: "Aria L.",
      role: "Researcher",
      rating: "3d"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-32 px-20">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-4">
          <p className="text-blue-400 text-sm mb-2">↗ Testimonials</p>
          <h2 className="text-4xl font-bold mb-2">What others whisper</h2>
          <p className="text-2xl text-gray-400">about the experience</p>
        </div>
        
        <div className="mt-16 relative">
          <div className="bg-gray-900 rounded-2xl p-8 shadow-xl min-h-[250px] flex flex-col justify-between">
            <p className="text-xl leading-relaxed mb-6 italic">
              "{testimonials[currentIndex].quote}"
            </p>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-lg">{testimonials[currentIndex].author}</p>
                <p className="text-gray-400">{testimonials[currentIndex].role}</p>
              </div>
              <div className="text-gray-500 text-sm">{testimonials[currentIndex].rating}</div>
            </div>
          </div>
          
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
