import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-blueprint.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-glow/80" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Pre-Construction
          <br />
          <span className="text-accent">Automation</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
          Streamline your construction projects with automated DPR creation, 
          Land Acquisition Drafting, and comprehensive Project Planning solutions.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#contact"
            className="rounded-md px-12 py-4 font-semibold text-lg bg-gradient-to-r from-primary to-primary-glow text-white hover:from-primary/90 hover:to-primary-glow/90 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Start Your Project
          </a>
          <a 
          href="#services"
          className="rounded-md px-12 py-4 font-semibold text-lg bg-white text-primary border border-primary hover:bg-primary hover:text-white transition-all duration-300"
          >
            Learn More
          </a>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 text-center">
          {/* <div>
            <div className="text-4xl font-bold text-accent mb-2">50+</div>
            <div className="text-lg">Projects Completed</div>
          </div> */}
          <div>
            <div className="text-4xl font-bold text-accent mb-2">100%</div>
            <div className="text-lg">Automation Rate</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-accent mb-2">24/7</div>
            <div className="text-lg">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;