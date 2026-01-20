import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Rooms', path: '/rooms' },
    { name: 'Tours', path: '/tours' },
    { name: 'Galleries', path: '/galleries' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">ARA RESIDENCY HOTEL</h3>
            <p className="text-muted-foreground mb-4">
              Experience comfort, luxury, and peace in the heart of Tiruvannamalai. Your perfect stay awaits.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-muted-foreground">
                <FaMapMarkerAlt className="mt-1 text-primary flex-shrink-0" />
                <span>No.63/1 Durgainammiyadal, Polur Rd, opp. Krishna mahal, Tiruvannamalai, Tamil Nadu 606604</span>
              </li>
              <li className="flex items-center space-x-3 text-muted-foreground">
                <FaPhone className="text-primary flex-shrink-0" />
                <span>+91 94439 63140</span>
              </li>
              <li className="flex items-center space-x-3 text-muted-foreground">
                <FaEnvelope className="text-primary flex-shrink-0" />
                <span>araresidency618@gmail.com</span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <FaTwitter size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} ARA Residency Hotel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
