const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-3xl font-bold mb-4">Prozect</div>
            <p className="text-gray-300 mb-4 max-w-md">
              Leading provider of pre-construction automation solutions, 
              specializing in DPR creation, Land Acquisition Drafting, and Project Planning.
            </p>
            <div className="text-sm text-gray-400">
              © 2025 Prozect. All rights reserved.
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#services" className="hover:text-accent transition-colors">
                  DPR Creation
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent transition-colors">
                  Land Acquisition
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent transition-colors">
                  Project Planning
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent transition-colors">
                  Consultation
                </a>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#about" className="hover:text-accent transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-accent transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;