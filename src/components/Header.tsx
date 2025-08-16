import MainLogo from "@/assets/main-logo.jpeg";

const Header = () => {
  return (
    <header className="sticky top-0 left-0 z-50 bg-[#2a4b76] backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src={MainLogo} alt="Main Logo" className="h-11" />
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          {[
            { name: "Services", link: "#services" },
            { name: "Projects", link: "#projects" },
            { name: "About", link: "#about" },
            { name: "Contact", link: "#contact" },
          ].map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="relative text-white hover:text-white transition-colors 
                 font-medium tracking-wide py-2
                 after:content-[''] after:absolute after:w-0 after:h-[2px] 
                 after:bg-white after:left-0 after:-bottom-1 
                 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.name}
            </a>
          ))}
        </nav>

      </div>
    </header>
  );
};

export default Header;