
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
    comment: "Coastal Dine offers an authentic taste of Kerala’s coastal cuisine with a touch of elegance. The flavors and presentation are simply outstanding!",
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

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section-padding">
      <div className="container mx-auto">
        <FadeIn className="text-center mb-16">
          <h3 className="section-subheading">Guest Experiences</h3>
          <h2 className="section-heading">What People Say</h2>
          <div className="w-24 h-1 bg-coastal-gold mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-coastal-navy/80">
            Discover what our guests have to say about their dining experiences at Coastal Dine.
          </p>
        </FadeIn>

        <div className="relative max-w-4xl mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-xl p-8 md:p-12 relative overflow-hidden"
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
                
                <div className="flex-1 text-center md:text-left">
                  <div className="flex mb-4 justify-center md:justify-start">
                    {[...Array(5)].map((_, i) => (
                      <motion.svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill={i < testimonials[currentIndex].rating ? "#BE9D58" : "#E2E8F0"}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </motion.svg>
                    ))}
                  </div>
                  
                  <p className="text-coastal-navy/80 text-lg mb-6 italic">
                    "{testimonials[currentIndex].comment}"
                  </p>
                  
                  <h4 className="font-playfair text-xl font-semibold text-coastal-navy">
                    {testimonials[currentIndex].name}
                  </h4>
                  
                  <p className="text-coastal-gold">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          <div className="flex justify-center mt-8 space-x-4">
      
            
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === currentIndex ? 'bg-coastal-gold' : 'bg-coastal-navy/20'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                ></motion.button>
              ))}
            </div>
            
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
