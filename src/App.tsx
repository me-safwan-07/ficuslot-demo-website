import About from "./components/About";
import ClientLogos from "./components/ClientLogos";
import ClientNumbers from "./components/ClientNumbers";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import LatestBlog from "./components/LatestBlog";
import Navbar from "./components/Navbar";
// import Projects from "./components/Projects";
import Reasons from "./components/Reasons";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
// import WhatsAppButton from "./components/WhatsAppButton";

const App = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <ClientNumbers />
      <Services />
      <Reasons />
      {/* <Projects /> */}
      <ClientLogos />
      <Testimonials />
      <LatestBlog />
      <Contact />
      <Footer />
      {/* <WhatsAppButton /> */}
      <ScrollToTop /> 
    </main>
  )
}

export default App;