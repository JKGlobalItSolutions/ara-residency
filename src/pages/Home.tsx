import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import HeroSlider from '@/components/HeroSlider';
import RoomCard from '@/components/RoomCard';
import TourCard from '@/components/TourCard';
import roomImage from '@/assets/room-ac-1.jpeg';
import templeImage from '@/assets/temple.png';
import girivalam from '@/assets/girivalam.jpg';
import ashram from '@/assets/ashram.jpg';

const Home = () => {
  const roomPreviews = [
    {
      title: 'Deluxe AC Room',
      price: '₹2000/night',
      image: roomImage,
      features: ['WiFi', 'TV', 'Room Service', 'AC'],
      hasAC: true,
    },
    {
      title: 'Standard AC Room',
      price: '₹2000/night',
      image: roomImage,
      features: ['WiFi', 'TV', 'Room Service', 'AC'],
      hasAC: true,
    },
    {
      title: 'Standard Room',
      price: '₹1500/night',
      image: roomImage,
      features: ['WiFi', 'TV', 'Room Service'],
      hasAC: false,
    },
  ];

  const tourPreviews = [
    {
      title: 'Arunachaleswarar Temple',
      description: 'Ancient temple dedicated to Lord Shiva, one of the Pancha Bhoota Sthalams',
      image: templeImage,
      distance: '2 km',
    },
    {
      title: 'Girivalam Path',
      description: 'Sacred 14 km circumambulation path around Arunachala Hill',
      image: girivalam,
      distance: '1.5 km',
    },
    {
      title: 'Ramana Ashram',
      description: 'Peaceful ashram of Sri Ramana Maharshi, perfect for meditation',
      image: ashram,
      distance: '3 km',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSlider />

      {/* Rooms Preview Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Rooms
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Experience comfort and luxury in our well-appointed rooms
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {roomPreviews.map((room, index) => (
              <RoomCard key={index} {...room} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/rooms">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors"
              >
                View All Rooms
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Tours Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Explore Tiruvannamalai
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover the spiritual and cultural treasures near our hotel
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {tourPreviews.map((tour, index) => (
              <TourCard key={index} {...tour} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/tours">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors"
              >
                View All Attractions
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Gallery
            </h2>
            <p className="text-muted-foreground text-lg">
              Glimpses of our beautiful property
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
            {[roomImage, templeImage, girivalam, ashram, roomImage, templeImage].map(
              (img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative h-64 overflow-hidden rounded-lg group cursor-pointer"
                >
                  <img
                    src={img}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </motion.div>
              )
            )}
          </div>

          <div className="text-center">
            <Link to="/galleries">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors"
              >
                View Full Gallery
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Preview Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-8 md:p-12 shadow-xl max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              Get in Touch
            </h2>
            <p className="text-muted-foreground text-center mb-8">
              ARA Residency, Tiruvannamalai, Tamil Nadu
            </p>
            <div className="aspect-video w-full rounded-lg overflow-hidden mb-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.123456789012!2d79.0708!3d12.2304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDEzJzQ5LjQiTiA3OcKwMDQnMTUuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
            <div className="text-center">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors"
                >
                  Contact Us
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
