import Header from "./components/Header";
import Hero from "./sections/Hero";
import WhyAndPartners from "./sections/WhyAndPartners";
import Recommendation from "./sections/Recommendation";
import BestSellers from "./sections/BestSellers";
import Newsletter from "./sections/NewsLetter";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <WhyAndPartners />
      <Recommendation />
      <BestSellers />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default App;
