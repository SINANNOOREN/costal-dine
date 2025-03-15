import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { FadeIn } from './ui/animation-provider';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  comment: string;
  image: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Aisha Rahman",
    role: "Food Blogger",
    comment: "Coastal Dine offers an authentic taste of Kerala's coastal cuisine with a touch of elegance. The flavors and presentation are simply outstanding!",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2787&auto=format&fit=crop",
    rating: 5,
  },
  {
    id: 2,
    name: "Rohan Nair",
    role: "Regular Customer",
    comment: "Every visit to Coastal Dine is an unforgettable experience. The fresh seafood and warm ambiance make it my favorite spot in Calicut.",
    image: "https://img.freepik.com/free-photo/medium-shot-guy-holding-thumbs-up_23-2148228008.jpg?uid=R180539201&ga=GA1.1.487039513.1735102471&semt=ais_hybrid",
    rating: 5,
  },
  {
    id: 3,
    name: "Neha Menon",
    role: "Travel Enthusiast",
    comment: "A hidden gem in Kerala! The seafood is divine, and the restaurant's atmosphere makes it a perfect place to unwind and indulge.",
    image: "https://img.freepik.com/free-photo/young-woman-wearing-red-shirt_273609-21092.jpg?uid=R180539201&ga=GA1.1.487039513.1735102471&semt=ais_hybrid",
    rating: 4,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const controls = useAnimation();
  const [dragStart, setDragStart] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-swipe functionality
  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(timer);
  }, []);

  // Handle drag gestures
  const handleDragStart = (event: any, info: any) => {
    setDragStart(info.point.x);
  };

  const handleDragEnd = (event: any, info: any) => {
    const dragEnd = info.point.x;
    const dragDifference = dragEnd - dragStart;

    if (Math.abs(dragDifference) > 50) { // Minimum drag distance to trigger swipe
      if (dragDifference > 0) {
        prevTestimonial();
      } else {
        nextTestimonial();
      }
    }
  };

  return (
    <section id="testimonials" className="section-padding bg-coastal-navy/5">
      <div className="container mx-auto">
        <FadeIn className="text-center mb-16">
          <h3 className="section-subheading">What Our Guests Say</h3>
          <h2 className="section-heading">Guest Testimonials</h2>
          <div className="w-24 h-1 bg-coastal-gold mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-coastal-navy/80">
            Don't just take our word for it. Here's what our valued guests have to say about their dining experience at Coastal Dine.
          </p>
        </FadeIn>

        <div className="relative max-w-4xl mx-auto px-4">
          {/* Navigation Buttons */}
      
          
     

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
              className="bg-white rounded-lg shadow-xl p-8 md:p-12 relative overflow-hidden cursor-grab active:cursor-grabbing"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gold-gradient"></div>
              
              <Quote className="text-coastal-gold opacity-20 w-20 h-20 absolute top-8 right-8" />
              
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="relative">
                  <motion.div
                    className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-coastal-gold/30"
                    whileHover={{ scale: 1.05 }}
                  >
                    <img 
                      src={testimonials[currentIndex].image} 
                      alt={testimonials[currentIndex].name} 
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>

                <div className="flex-1 text-left">
                  <motion.p 
                    className="text-lg md:text-xl text-coastal-navy/80 italic mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    "{testimonials[currentIndex].comment}"
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h4 className="text-xl font-semibold text-coastal-navy">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-coastal-gold">{testimonials[currentIndex].role}</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-coastal-gold w-6' : 'bg-coastal-gold/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
