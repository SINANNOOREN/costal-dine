
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FadeIn, ScaleIn, Stagger, StaggerItem } from './ui/animation-provider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  featured?: boolean;
}

type MenuCategory = 'starters' | 'mains' | 'desserts' ;

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('starters');

  const menuItems: Record<MenuCategory, MenuItem[]> = {
    starters: [
      {
        id: 1,
        name: "Spicy Crab Cakes",
        description: "Golden-crisp crab cakes with a hint of spice, served with tangy aioli",
        price: "₹450",
        featured: true,
      },
      {
        id: 2,
        name: "Coconut Prawn Skewers",
        description: "Succulent prawns marinated in coconut and spices, grilled to perfection",
        price: "₹520",
      },
      {
        id: 3,
        name: "Smoked Fish Tacos",
        description: "Soft tortillas filled with smoked fish, avocado salsa, and lime drizzle",
        price: "₹380",
      },
      {
        id: 4,
        name: "Malabar Calamari Rings",
        description: "Lightly battered calamari with a hint of Malabar spice, served with a zesty dip",
        price: "₹400",
      },
    ],
    mains: [
      {
        id: 1,
        name: "Grilled Lobster with Garlic Butter",
        description: "Fresh lobster grilled to perfection, drizzled with garlic herb butter",
        price: "₹1,800",
        featured: true,
      },
      {
        id: 2,
        name: "Coastal Seafood Platter",
        description: "A grand assortment of grilled fish, prawns, and crab, served with coastal dips",
        price: "₹2,200",
      },
      {
        id: 3,
        name: "Kerala Pepper Beef Roast",
        description: "Tender beef cooked with cracked pepper and aromatic spices",
        price: "₹750",
      },
      {
        id: 4,
        name: "Spicy Prawn Moilee",
        description: "Prawns simmered in creamy coconut gravy with curry leaves and chilies",
        price: "₹680",
      },
    ],
    desserts: [
      {
        id: 1,
        name: "Tender Coconut Mousse",
        description: "Silky smooth mousse infused with tender coconut and a hint of vanilla",
        price: "₹300",
        featured: true,
      },
      {
        id: 2,
        name: "Choco Lava Cake",
        description: "Decadent chocolate cake with a molten center, served warm with ice cream",
        price: "₹350",
      },
      {
        id: 3,
        name: "Cardamom Panna Cotta",
        description: "Creamy panna cotta with a subtle hint of cardamom, topped with berry compote",
        price: "₹320",
      },
      {
        id: 4,
        name: "Mango Cheesecake",
        description: "Smooth cheesecake with a rich mango topping and buttery crust",
        price: "₹380",
      },
    ],
 
 
  
  };

  return (
    <section id="menu" className="section-padding bg-section-pattern">
      <div className="container mx-auto ">
        <FadeIn className="text-center mb-16">
          <h3 className="section-subheading">Culinary Excellence</h3>
          <h2 className="section-heading">Our Menu</h2>
          <div className="w-24 h-1 bg-coastal-gold mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-coastal-navy/80">
        Savor the freshest coastal flavors with our signature dishes, crafted to perfection
          </p>
        </FadeIn>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="starters" className="w-full">
            <TabsList className="flex justify-center mb-10 bg-transparent border-b border-coastal-navy/10">
              {Object.keys(menuItems).map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="px-6 py-3 font-montserrat text-sm uppercase tracking-wider text-coastal-navy/60 data-[state=active]:text-coastal-gold data-[state=active]:border-b-2 data-[state=active]:border-coastal-gold rounded-none bg-transparent"
                  onClick={() => setActiveCategory(category as MenuCategory)}
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(menuItems).map(([category, items]) => (
              <TabsContent key={category} value={category} className="mt-0">
                <Stagger className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {items.map((item) => (
                    <StaggerItem key={item.id}>
                      <motion.div
                        className={`p-6 rounded-lg transition-all duration-300 ${
                          item.featured
                            ? 'bg-coastal-navy/5 border-l-4 border-coastal-gold'
                            : 'hover:bg-white hover:shadow-lg'
                        }`}
                        whileHover={{ y: -5 }}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-playfair text-xl font-semibold text-coastal-navy">
                            {item.name}
                          </h3>
                          <span className="text-coastal-gold font-semibold">{item.price}</span>
                        </div>
                        <p className="text-coastal-navy/70 text-sm">{item.description}</p>
                        {item.featured && (
                          <span className="inline-block mt-3 text-xs font-medium py-1 px-2 bg-coastal-gold/10 text-coastal-gold rounded">
                            Chef's Recommendation
                          </span>
                        )}
                      </motion.div>
                    </StaggerItem>
                  ))}
                </Stagger>
              </TabsContent>
            ))}
          </Tabs>

          <ScaleIn className="text-center mt-16">
            <motion.a
              href="#reservations"
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Make a Reservation
            </motion.a>
          </ScaleIn>
        </div>
      </div>
    </section>
  );
};

export default Menu;
