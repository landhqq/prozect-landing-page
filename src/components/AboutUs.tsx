const About = () => {
    return (
      <section id="about" className="py-20 bg-gradient-to-b from-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">About Prozect</h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Leading the revolution in pre-construction automation with innovative solutions 
              that streamline project planning and execution.
            </p>
          </div>
  
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Our Story</h3>
              <p className="text-muted-foreground leading-relaxed">
                Founded with a vision to transform the construction industry, Prozect specializes in 
                pre-construction automation solutions that eliminate delays, reduce costs, and ensure 
                project success from the very beginning.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our expertise spans across Detailed Project Reports (DPR), comprehensive Land Acquisition 
                Drafting from 4th Dhara to awarding, and strategic Project Planning that sets the 
                foundation for successful construction projects.
              </p>
              
            </div>
  
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To revolutionize pre-construction processes through cutting-edge automation, 
                ensuring every project begins with precision, clarity, and strategic foresight.
              </p>
  
              <div className="space-y-4 mt-8">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Innovation</h4>
                    <p className="text-sm text-muted-foreground">Pioneering automated solutions for complex pre-construction challenges</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Precision</h4>
                    <p className="text-sm text-muted-foreground">Delivering accurate and detailed documentation for every project phase</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Reliability</h4>
                    <p className="text-sm text-muted-foreground">Consistent results that clients can depend on for project success</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;