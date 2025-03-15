
import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn, ScaleIn } from './ui/animation-provider';

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="right" className="order-2 lg:order-1">
            <h3 className="section-subheading">Our Story</h3>
            <h2 className="section-heading">About Coastal Dine</h2>
            <div className="w-24 h-1 bg-coastal-gold mb-6"></div>
            
            <div className="space-y-4 text-coastal-navy/80">
              <p>
              Established in 2015, Coastal Dine is a premium seafood restaurant located in the heart of Calicut, Kerala. We bring you an exquisite dining experience with a menu inspired by five-star coastal cuisine, crafted with the finest ingredients and modern techniques.

At Coastal Dine, we blend tradition with innovation, offering a luxurious ambiance, impeccable service, and a passion for perfection in every dish. Whether you’re savoring our freshly caught seafood, signature gourmet dishes, or handcrafted drinks, every bite is a journey through the flavors of the sea.

Join us for an unforgettable culinary experience where taste meets elegance.
              </p>
          
            </div>
            
            <div className="mt-8 flex flex-wrap gap-6">
              <div className="text-center">
                <h4 className="text-4xl font-playfair font-bold text-coastal-gold">10</h4>
                <p className="text-sm uppercase tracking-wide text-coastal-navy/70">Years of Excellence</p>
              </div>
              
              <div className="text-center">
                <h4 className="text-4xl font-playfair font-bold text-coastal-gold">15</h4>
                <p className="text-sm uppercase tracking-wide text-coastal-navy/70">Culinary Awards</p>
              </div>
              
              <div className="text-center">
                <h4 className="text-4xl font-playfair font-bold text-coastal-gold">30+</h4>
                <p className="text-sm uppercase tracking-wide text-coastal-navy/70">Signature Dishes</p>
              </div>
            </div>
          </FadeIn>
          
          <div className="relative order-1 lg:order-2">
            <ScaleIn className="relative z-10">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="rounded-lg overflow-hidden shadow-xl"
              >
                <img 
                  src="https://img.freepik.com/free-photo/restaurant-hall-with-lots-table_140725-6309.jpg?t=st=1742012867~exp=1742016467~hmac=ddbbf9b2acaea5c5cbb38de145b1457382bdbc16213866b14736457f327df55b&w=1380" 
                  alt="Chef preparing food" 
                  className="w-full h-[500px] object-cover"
                />
              </motion.div>
            </ScaleIn>
            
            <motion.div 
              className="absolute -bottom-6 -right-6 w-48 h-48 rounded-full bg-coastal-gold opacity-20 z-0"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            
            <motion.div 
              className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-coastal-navy opacity-10 z-0"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
