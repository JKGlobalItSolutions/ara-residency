import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCreative } from 'swiper/modules';
import { FaWifi, FaTv, FaSnowflake, FaConciergeBell } from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-creative';
import './slider-styles.css';

interface RoomCardProps {
  title: string;
  price: string;
  images: string[];
  features: string[];
  hasAC: boolean;
}

const RoomCard = ({ title, price, images, features, hasAC }: RoomCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
    >
      <div className="relative h-64 overflow-hidden">
        <Swiper
          modules={[Navigation, Pagination, EffectCreative]}
          navigation
          pagination={{ 
            clickable: true,
            dynamicBullets: true,
          }}
          effect="creative"
          creativeEffect={{
            prev: {
              translate: ['-20%', 0, -1],
            },
            next: {
              translate: ['100%', 0, 0],
            },
          }}
          speed={600}
          className="h-full rounded-t-lg room-card-swiper"
        >
          {images.map((img, imgIndex) => (
            <SwiperSlide key={imgIndex}>
              <div className="relative w-full h-full group/slide">
                <img
                  src={img}
                  alt={`${title} - Image ${imgIndex + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover/slide:opacity-100 transition-opacity duration-500" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {hasAC && (
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1.5 rounded-full text-sm font-semibold flex items-center gap-2 z-10 shadow-lg backdrop-blur-sm"
          >
            <FaSnowflake className="animate-pulse" /> AC
          </motion.div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-foreground mb-2">{title}</h3>
        <p className="text-3xl text-primary font-bold mb-4">{price}</p>
        <div className="flex flex-wrap gap-3 mb-4">
          {features.slice(0, 4).map((feature, index) => (
            <span key={index} className="flex items-center text-muted-foreground text-sm">
              {feature === 'WiFi' && <FaWifi className="mr-1" />}
              {feature === 'TV' && <FaTv className="mr-1" />}
              {feature === 'Room Service' && <FaConciergeBell className="mr-1" />}
              {feature}
            </span>
          ))}
        </div>
        <Link to="/rooms">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            View Details
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

export default RoomCard;
