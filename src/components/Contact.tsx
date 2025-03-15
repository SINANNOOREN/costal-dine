
import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn, ScaleIn } from './ui/animation-provider';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-section-pattern">
      <div className="container mx-auto">
        <FadeIn className="text-center mb-16">
          <h3 className="section-subheading">Get In Touch</h3>
          <h2 className="section-heading">Contact Us</h2>
          <div className="w-24 h-1 bg-coastal-gold mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-coastal-navy/80">
            Have questions or need more information? We're here to help. Reach out to us using the contact details below.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ScaleIn>
            <div className="bg-white rounded-lg shadow-xl p-8 h-full">
              <h3 className="text-2xl font-playfair font-semibold mb-8 text-coastal-navy">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-coastal-gold/10 p-3 rounded-full mr-4">
                    <MapPin className="text-coastal-gold h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-coastal-navy mb-1">Location</h4>
                    <p className="text-coastal-navy/70"> Beachside Road, Calicut</p>
                    <p className="text-coastal-navy/70"> Kerala, Indi</p>
                    <a 
                      href="https://maps.google.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-coastal-gold hover:underline mt-2 text-sm"
                    >
                      View on map <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-coastal-gold/10 p-3 rounded-full mr-4">
                    <Phone className="text-coastal-gold h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-coastal-navy mb-1">Phone</h4>
                    <p className="text-coastal-navy/70">Reservations:91 123 456-7890</p>
                    <p className="text-coastal-navy/70">General Inquiries:91 123 456-7890</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-coastal-gold/10 p-3 rounded-full mr-4">
                    <Mail className="text-coastal-gold h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-coastal-navy mb-1">Email</h4>
                 
                    <p className="text-coastal-navy/70"> coastaldine@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-coastal-gold/10 p-3 rounded-full mr-4">
                    <Clock className="text-coastal-gold h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-coastal-navy mb-1">Hours of Operation</h4>
                    <p className="text-coastal-navy/70"> 9:00 MA - 10:00 PM</p>
                    
                  </div>
                </div>
              </div>
       
            </div>
          </ScaleIn>
          
          <FadeIn direction="left">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden h-full">
              <div className="h-full">
                <iframe
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.153072351564!2d75.78041!3d11.258753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65c3a1f3e3e4b%3A0x4c1a8b2e1f3e3e4b!2sCalicut%2C%20Kerala%2C%20India!5e0!3m2!1sen!2sus!4v1649275138564!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '400px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Restaurant Location"
                ></iframe>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Contact;
