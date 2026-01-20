import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

import hero1 from '@/assets/hero-1.jpeg';
import hero2 from '@/assets/hero-2.jpeg';
import hero3 from '@/assets/hero-3.jpeg';
import roomAc1 from '@/assets/room-ac-1.jpeg';
import roomAc2 from '@/assets/roomac-2.jpeg';
import roomBathroom from '@/assets/room-bathroom.jpeg';
import templeImage from '@/assets/temple.png';
import girivalam from '@/assets/girivalam.jpg';
import ashram from '@/assets/ashram.jpg';

const Galleries = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    { src: hero1, title: 'Hotel Exterior' },
    { src: hero2, title: 'standard Room' },
    { src: hero3, title: 'Bedroom' },
    { src: roomAc1, title: 'Deluxe Room' },
    { src: roomAc2, title: 'Room Interior' },
    { src: roomBathroom, title: 'Bedroom' },
    { src: templeImage, title: 'Temple View' },
    { src: girivalam, title: 'Girivalam Path' },
    { src: ashram, title: 'Ashram' },
    { src: hero1, title: 'Evening View' },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            Gallery
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our beautiful property and surroundings
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="relative h-80 overflow-hidden rounded-lg group cursor-pointer"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-lg font-semibold">{image.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <button
                className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X size={32} />
              </button>
              <motion.img
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                src={selectedImage}
                alt="Gallery Image"
                className="max-w-full max-h-full object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Galleries;
