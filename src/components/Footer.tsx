
import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

const socialLinks = [
  { id: "facebook", icon: <FaFacebookF />, link: "#" },
  { id: "instagram", icon: <FaInstagram />, link: "#" },
  { id: "twitter", icon: <FaTwitter />, link: "#" },
  { id: "yelp", icon: <FaWhatsapp />, link: "#" },
];
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'Explore',
      links: [
        { name: 'Home', href: '#home' },
        { name: 'Menu', href: '#menu' },
        { name: 'About', href: '#about' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'Contact', href: '#contact' },
      ],
    },
    {
      title: 'Information',
      links: [
        { name: 'Reservations', href: '#reservations' },
        { name: 'Private Events', href: '#' },
        { name: 'Gift Cards', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Press', href: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' },
        { name: 'Accessibility', href: '#' },
      ],
    },
  ];

  return (
    <footer className="bg-coastal-navy text-white">
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <a href="#home" className="inline-block mb-6">
              <img src="lovable-uploads/f50d015b-a4e2-43e4-a2fa-6e6682c44f95.png" alt="Coastal Dine" className="h-16" />
            </a>
            <p className="text-white/70 mb-6 max-w-md">
              Coastal Dine offers a refined dining experience with the freshest seafood and impeccable service in a stunning waterfront setting.
            </p>
            <div className="flex space-x-4">
      {socialLinks.map(({ id, icon, link }) => (
        <motion.a
          key={id}
          href={link}
          className="text-white/70 hover:text-coastal-gold transition-colors text-xl"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="sr-only">{id}</span>
          {icon}
        </motion.a>
      ))}
    </div>

          </div>
          
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="text-xl font-semibold mb-6">{column.title}</h3>
              <ul className="space-y-4">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-white/70 hover:text-coastal-gold transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm">
            &copy; {currentYear} Coastal Dine. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-white/70 hover:text-coastal-gold transition-colors text-sm">
              Website designed by Coastal Studios
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
