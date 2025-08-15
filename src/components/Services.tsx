import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, MapPin, Calendar } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <FileText className="w-8 h-8 text-primary" />,
      title: "Detailed Project Report (DPR)",
      description: "Comprehensive automated generation of detailed project reports with accurate cost estimation, technical specifications, and feasibility analysis.",
      features: ["Cost Estimation", "Technical Analysis", "Risk Assessment", "Financial Projections"],
      status: false
    },
    {
      icon: <MapPin className="w-8 h-8 text-primary" />,
      title: "Land Acquisition Drafting",
      description: "Complete Dhara work automation from 4th dhara to awarding, ensuring legal compliance and streamlined acquisition processes.",
      features: ["4th Dhara Processing", "Legal Documentation", "Compliance Check", "Award Management"],
      status: true
    },
    {
      icon: <Calendar className="w-8 h-8 text-primary" />,
      title: "Project Planning",
      description: "Strategic pre-construction planning with timeline optimization, resource allocation, and milestone tracking for successful project execution.",
      features: ["Timeline Planning", "Resource Allocation", "Milestone Tracking", "Risk Mitigation"],
      status: false
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive pre-construction automation solutions designed to streamline your project workflow
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="h-full hover:shadow-lg transition-all duration-300 border-0 shadow-card relative"
            >
              {/* Coming Soon Label */}
              {!service.status && (
                <span className="absolute top-2 right-2 bg-yellow-500 text-white text-xs font-semibold px-2 py-1 rounded">
                  Coming Soon
                </span>
              )}

              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-bold text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <CardDescription className="text-muted-foreground mb-6 text-center">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-foreground"
                    >
                      <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;