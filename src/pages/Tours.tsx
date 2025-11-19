import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaClock, FaWalking } from 'react-icons/fa';

import templeImage from '@/assets/temple.png';
import girivalam from '@/assets/girivalam.jpg';
import ashram from '@/assets/ashram.jpg';
import yogiashram from '@/assets/yogiashram.jpg';

const Tours = () => {
  const attractions = [
    {
      title: 'Arunachaleswarar Temple',
      description:
        'One of the largest temples in India, dedicated to Lord Shiva. This ancient temple is one of the Pancha Bhoota Sthalams (five elements temples) representing the fire element. The massive gopuram (temple tower) and intricate architecture make it a must-visit destination for spiritual seekers and architecture enthusiasts.',
      image: templeImage,
      distance: '2 km from hotel',
      time: '2-3 hours',
    },
    {
      title: 'Girivalam Path',
      description:
        'The sacred 14 km circumambulation path around the holy Arunachala Hill. Pilgrims from all over the world walk this path, especially during full moon nights. The journey is spiritually enriching and offers beautiful views of the hill and surrounding areas.',
      image: girivalam,
      distance: '1.5 km from hotel',
      time: '4-5 hours walk',
    },
    {
      title: 'Ramana Maharshi Ashram',
      description:
        'A peaceful ashram dedicated to the renowned sage Sri Ramana Maharshi. The ashram offers a tranquil environment for meditation and self-reflection. Visitors can explore the meditation hall, library, and the samadhi of the great master.',
      image: ashram,
      distance: '3 km from hotel',
      time: '1-2 hours',
    },
    {
      title: 'Tiruvannamalai Hill',
      description:
        'The sacred Arunachala Hill is considered to be a manifestation of Lord Shiva himself. Trekking to the top offers panoramic views of the town and surrounding landscape. The climb is challenging but spiritually rewarding.',
      image: girivalam,
      distance: '2 km from hotel',
      time: '3-4 hours trek',
    },
    {
      title: 'Seshadri Swamigal Ashram',
      description:
        'A serene ashram dedicated to Seshadri Swamigal, a contemporary of Ramana Maharshi. The ashram maintains a peaceful atmosphere perfect for spiritual seekers. Visitors can learn about the life and teachings of this great saint.',
      image: ashram,
      distance: '2.5 km from hotel',
      time: '1 hour',
    },
    {
      title: 'Yogi Ramsuratkumar Ashram',
      description:
        'This ashram is dedicated to Yogi Ramsuratkumar, known as the "Beggar of Tiruvannamalai." The ashram features beautiful architecture and maintains a vibrant spiritual community. Regular satsangs and bhajans are held here.',
      image: yogiashram,
      distance: '4 km from hotel',
      time: '1-2 hours',
    },
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
            Tiruvannamalai Attractions
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Explore the spiritual and cultural treasures near ARA Residency Hotel
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {attractions.map((attraction, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-2xl overflow-hidden shadow-xl group"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={attraction.image}
                  alt={attraction.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {attraction.title}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {attraction.description}
                </p>

                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-primary">
                    <FaMapMarkerAlt />
                    <span className="text-sm font-semibold">{attraction.distance}</span>
                  </div>
                  <div className="flex items-center gap-2 text-primary">
                    <FaClock />
                    <span className="text-sm font-semibold">{attraction.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-primary">
                    <FaWalking />
                    <span className="text-sm font-semibold">Easy Access</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tours;
