import HowItWorks from "./components/HowItWorks"
import ContactInfo from "./components/ContactInfo";
import PowerfulFeatures from "./components/Powerful-Features";
import Footer from "./components/Footer";
import HomePage from "./components/Landing-Page";
import Testimonials from "./components/Benefits";

export default function Home() {
  return (
    <div>
      <HomePage/>
      <PowerfulFeatures/>
      <HowItWorks/>  
      <Testimonials />
      <ContactInfo />
      <Footer/>
    </div>
  );
}