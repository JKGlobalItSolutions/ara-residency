import { useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import {
  FaWifi,
  FaTv,
  FaSnowflake,
  FaConciergeBell,
  FaBed,
  FaShower,
} from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import roomAc1 from '@/assets/room-ac-1.jpeg';

interface CategoryFilter {
  id: 'all' | 'ac' | 'non-ac';
  label: string;
}
import roomAc2 from '@/assets/room-ac-2.jpeg';
import roomBathroom from '@/assets/room-bathroom.jpeg';

const Rooms = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'ac' | 'non-ac'>('all');

  const roomCategories = [
    {
      category: 'ac',
      title: 'Standard Room - AC',
      price: '₹2000',
      images: [roomAc1, roomAc2, roomBathroom],
      facilities: [
        { icon: FaSnowflake, name: 'Air Conditioning' },
        { icon: FaWifi, name: 'Free WiFi' },
        { icon: FaTv, name: 'LED TV' },
        { icon: FaConciergeBell, name: 'Room Service' },
        { icon: FaBed, name: 'Comfortable Bedding' },
        { icon: FaShower, name: 'Modern Bathroom' },
      ],
    },
    {
      category: 'non-ac',
      title: 'Standard Room - Non AC',
      price: '₹1500',
      images: [roomAc1, roomAc2, roomBathroom],
      facilities: [
        { icon: FaWifi, name: 'Free WiFi' },
        { icon: FaTv, name: 'LED TV' },
        { icon: FaConciergeBell, name: 'Room Service' },
        { icon: FaBed, name: 'Comfortable Bedding' },
        { icon: FaShower, name: 'Modern Bathroom' },
      ],
    },
  ];

  const filteredRooms = roomCategories.filter(
    (room) => selectedCategory === 'all' || room.category === selectedCategory
  );

  const filters: CategoryFilter[] = [
    { id: 'all', label: 'All Rooms' },
    { id: 'ac', label: 'AC Rooms' },
    { id: 'non-ac', label: 'Non-AC Rooms' },
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
            Our Rooms
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose from our comfortable and well-appointed rooms
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(filter.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                selectedCategory === filter.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-foreground hover:bg-muted/80'
              }`}
            >
              {filter.label}
            </motion.button>
          ))}
        </div>

        {/* Room Cards */}
        <div className="space-y-16">
          {filteredRooms.map((room, index) => (
            <motion.div
              key={room.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-2xl overflow-hidden shadow-xl"
            >
              <div className="grid md:grid-cols-2 gap-6 p-6">
                {/* Image Slider */}
                <div className="relative">
                  <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{ clickable: true }}
                    className="h-80 rounded-lg"
                  >
                    {room.images.map((img, imgIndex) => (
                      <SwiperSlide key={imgIndex}>
                        <img
                          src={img}
                          alt={`${room.title} - Image ${imgIndex + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  {room.category === 'ac' && (
                    <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-2 rounded-full font-semibold z-10 flex items-center gap-2">
                      <FaSnowflake /> AC Room
                    </div>
                  )}
                </div>

                {/* Room Details */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-3xl font-bold text-foreground mb-2">
                      {room.title}
                    </h3>
                    <p className="text-4xl text-primary font-bold mb-6">{room.price}/night</p>

                    <h4 className="text-lg font-semibold text-foreground mb-4">
                      Room Facilities:
                    </h4>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {room.facilities.map((facility, facIndex) => (
                        <div
                          key={facIndex}
                          className="flex items-center gap-3 text-muted-foreground"
                        >
                          <facility.icon className="text-primary text-xl" />
                          <span>{facility.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-primary text-primary-foreground py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors"
                  >
                    Book Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rooms;
