
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FadeIn, ScaleIn } from './ui/animation-provider';
import { Calendar, Clock, Users } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const timeSlots = [
  '17:00', '17:30', '18:00', '18:30', '19:00', 
  '19:30', '20:00', '20:30', '21:00', '21:30'
];

const guestOptions = [1, 2, 3, 4, 5, 6, 7, 8];

const Reservation = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    specialRequests: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Reservation data:', formData);
    
    // Form validation
    if (!formData.name || !formData.email || !formData.phone || !formData.date || !formData.time || !formData.guests) {
      toast({
        title: 'Missing Information',
        description: 'Please fill in all required fields.',
        variant: 'destructive',
      });
      return;
    }
    
    // Success message
    toast({
      title: 'Reservation Submitted',
      description: `Thank you, ${formData.name}! Your table for ${formData.guests} has been reserved for ${formData.date} at ${formData.time}.`,
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: '',
      specialRequests: '',
    });
  };

  return (
    <section 
      id="reservations" 
      className="section-padding relative"
      style={{
        backgroundImage: 'linear-gradient(rgba(15, 45, 64, 0.9), rgba(15, 45, 64, 0.85)), url("https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?q=80&w=2070&auto=format&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="container mx-auto">
        <FadeIn className="text-center mb-16">
          <h3 className="section-subheading text-coastal-gold">Book Your Table</h3>
          <h2 className="section-heading text-white">Make a Reservation</h2>
          <div className="w-24 h-1 bg-coastal-gold mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-white/80">
            Reserve your table to experience our exceptional cuisine and atmosphere. 
            We look forward to serving you a memorable dining experience.
          </p>
        </FadeIn>

        <ScaleIn>
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12 bg-coastal-navy text-white">
                <h3 className="text-2xl font-playfair font-semibold mb-6">Reservation Details</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold mb-2">Opening Hours</h4>
                    <p className="text-white/80"> 9:00 MA - 10:00 PM</p>
                  
                  </div>
                  
                  <div>
                    <h4 className="font-bold mb-2">Contact Information</h4>
                    <p className="text-white/80">Phone:91 123 456-7890</p>
                    <p className="text-white/80">Email: coastaldine@gmail.com</p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold mb-2">Location</h4>
                    <p className="text-white/80">Beach side,calicut</p>
                    <p className="text-white/80">kerala,india</p>
                  </div>
                </div>
                
                <div className="mt-8">
                  <p className="text-white/80 text-sm">
                    For parties larger than 8, please contact us directly by phone for availability.
                  </p>
                </div>
              </div>
              
              <div className="p-8 md:p-12">
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-coastal-navy mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-coastal-gold"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-coastal-navy mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-coastal-gold"
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-coastal-navy mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-coastal-gold"
                          placeholder="(123) 456-7890"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="relative">
                        <label htmlFor="date" className="block text-sm font-medium text-coastal-navy mb-1">
                          Date
                        </label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-coastal-gold" size={18} />
                          <input
                            type="date"
                            id="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-coastal-gold"
                            min={new Date().toISOString().split('T')[0]}
                            required
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="time" className="block text-sm font-medium text-coastal-navy mb-1">
                          Time
                        </label>
                        <div className="relative">
                          <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-coastal-gold" size={18} />
                          <select
                            id="time"
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-coastal-gold appearance-none"
                            required
                          >
                            <option value="" disabled>Select a time</option>
                            {timeSlots.map((time) => (
                              <option key={time} value={time}>
                                {time}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="guests" className="block text-sm font-medium text-coastal-navy mb-1">
                        Number of Guests
                      </label>
                      <div className="relative">
                        <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-coastal-gold" size={18} />
                        <select
                          id="guests"
                          name="guests"
                          value={formData.guests}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-coastal-gold appearance-none"
                          required
                        >
                          <option value="" disabled>Select number of guests</option>
                          {guestOptions.map((num) => (
                            <option key={num} value={num}>
                              {num} {num === 1 ? 'Guest' : 'Guests'}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="specialRequests" className="block text-sm font-medium text-coastal-navy mb-1">
                        Special Requests (Optional)
                      </label>
                      <textarea
                        id="specialRequests"
                        name="specialRequests"
                        value={formData.specialRequests}
                        onChange={handleChange}
                        rows={3}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-coastal-gold"
                        placeholder="Any dietary restrictions or special occasions?"
                      ></textarea>
                    </div>
                    
                    <div className="pt-2">
                      <motion.button
                        type="submit"
                        className="w-full bg-coastal-gold text-white py-3 rounded-md font-medium hover:bg-coastal-lightGold transition-colors"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Confirm Reservation
                      </motion.button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </ScaleIn>
      </div>
    </section>
  );
};

export default Reservation;
