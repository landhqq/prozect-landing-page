import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { Mail, Phone, MapPin } from "lucide-react";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  message: string;
}

const Contact = () => {
  const { toast } = useToast();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    // Here you would typically send the data to your backend
    console.log('Form submitted:', data);
    
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for reaching out. We'll get back to you within 24 hours.",
    });
    
    // Reset the form after successful submission
    reset();
  };

  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Get Started Today
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to automate your pre-construction processes? Contact us for a consultation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-card border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground">
                Send us a Message
              </CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input 
                    placeholder="First Name" 
                    {...register("firstName", { required: "First name is required" })}
                  />
                  <Input 
                    placeholder="Last Name" 
                    {...register("lastName", { required: "Last name is required" })}
                  />
                </div>
                <Input 
                  placeholder="Email Address" 
                  type="email" 
                  {...register("email", { 
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email address"
                    }
                  })}
                />
                <Input 
                  placeholder="Company Name" 
                  {...register("company", { required: "Company name is required" })}
                />
                <Textarea 
                  placeholder="Tell us about your project requirements..."
                  className="min-h-[120px]"
                  {...register("message", { required: "Message is required" })}
                />
                <Button type="submit" variant="hero" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <div className="font-semibold text-foreground">Email</div>
                    <a
                      href="mailto:landhqq@gmail.com"
                      className="text-muted-foreground"
                    >landhqq@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <div className="font-semibold text-foreground">Phone</div>
                    <p className="text-muted-foreground">
                      <a href="tel:+91 7733982270">+91 7733982270</a> /
                      <a href="tel:+91 6350515210">+91 6350515210</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <div className="font-semibold text-foreground">Office</div>
                    <div className="text-muted-foreground">
                      3rd Floor, Room No - 304, Suits Coworking Space, Plot No - 14, Yudhister Marg, near Yojana Bhawan, Jaipur, Rajasthan
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <Card className="shadow-card border-0">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground">
                  Why Choose Prozect?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start text-sm text-foreground">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3 mt-2 flex-shrink-0" />
                    Expert team in construction automation
                  </li>
                  <li className="flex items-start text-sm text-foreground">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3 mt-2 flex-shrink-0" />
                    100% compliance with regulatory requirements
                  </li>
                  <li className="flex items-start text-sm text-foreground">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3 mt-2 flex-shrink-0" />
                    Faster project timelines with automated processes
                  </li>
                  <li className="flex items-start text-sm text-foreground">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3 mt-2 flex-shrink-0" />
                    24/7 support throughout your project lifecycle
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;