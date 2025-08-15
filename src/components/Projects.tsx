import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, CheckCircle } from "lucide-react";
import project1Image from "@/assets/project-1.png";

const Projects = () => {
  const project = {
    title: "Work of Flood Remedial in Kanwas Region (Phase-1)",
    description: "Completed Social Impactment Assessment Report Drafting for the work of Flood Remedial in Kanwas Region (Phase-1)",
    location: "Kanwas, Kota, Rajasthan",
    duration: "1 week",
    status: "Completed"
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing our expertise in delivering successful pre-construction automation solutions
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden shadow-professional border-0">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image */}
              <div className="relative h-64 lg:h-full">
                <img 
                  src={project1Image} 
                  alt="Construction Project"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-accent text-accent-foreground">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Completed
                  </Badge>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-2xl font-bold text-foreground mb-2">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="p-0">
                  {/* Project Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center text-sm text-foreground">
                      <MapPin className="w-4 h-4 text-primary mr-2" />
                      {project.location}
                    </div>
                    <div className="flex items-center text-sm text-foreground">
                      <Calendar className="w-4 h-4 text-primary mr-2" />
                      {project.duration}
                    </div>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;