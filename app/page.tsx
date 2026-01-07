import Experience from "./components/Experience";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Certs from "./components/Certs";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import ServiceArea from "./components/ServiceArea";
import Faq from "./components/Faq";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div>
      <Hero />
      <Experience />
      <About />
      <Services />
      <Certs />
      <Gallery />
      <Testimonials />
      <ServiceArea />
      <Faq />
      <Contact />
    </div>
  );
}
