import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaWifi, FaTv, FaSnowflake, FaConciergeBell } from 'react-icons/fa';

interface RoomCardProps {
  title: string;
  price: string;
  image: string;
  features: string[];
  hasAC: boolean;
}

const RoomCard = ({ title, price, image, features, hasAC }: RoomCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {hasAC && (
          <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-2">
            <FaSnowflake /> AC
          </div>
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
