import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import Newsletter from "./components/Newsletter";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Features */}
      <Features />

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
};

export default Home;
