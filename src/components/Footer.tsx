const Footer = () => {
  return (
    <footer className="bg-lskin-primary text-white mt-20">
      <div className="section-padding py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-lskin-primary font-playfair text-xl font-bold">L</span>
              </div>
              <span className="font-playfair text-2xl font-bold">LSKIN</span>
            </div>
            <p className="text-lskin-secondary text-sm">
              Revolutionizing skincare with sustainable, organic solutions for you and the planet.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-lskin-secondary transition-colors">About Us</a></li>
              <li><a href="/products" className="hover:text-lskin-secondary transition-colors">Our Products</a></li>
              <li><a href="/sustainability" className="hover:text-lskin-secondary transition-colors">Sustainability</a></li>
              <li><a href="/invest" className="hover:text-lskin-secondary transition-colors">Invest With Us</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-playfair text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <i className="fas fa-envelope text-lskin-secondary"></i>
                <span>hello@lskin.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-phone text-lskin-secondary"></i>
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-map-marker-alt text-lskin-secondary"></i>
                <span>123 Green Street, Eco City</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-playfair text-xl font-semibold mb-4">Stay Updated</h3>
            <p className="text-lskin-secondary text-sm mb-4">
              Subscribe to our newsletter for sustainable skincare tips.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l-full flex-grow text-lskin-primary"
              />
              <button className="bg-lskin-secondary px-4 py-2 rounded-r-full hover:bg-opacity-90 transition-colors">
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-lskin-secondary/30 mt-8 pt-8 text-center text-lskin-secondary text-sm">
          <p>© {new Date().getFullYear()} LSKIN Organic Skincare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;