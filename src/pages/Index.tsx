import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import About from "@/components/AboutUs";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <Header />
      <Hero />
      <Services />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
