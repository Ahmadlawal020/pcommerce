import {
  FeatureCards,
  Hero,
  HowItWorks,
  ProductSection,
  ConvenienceSection,
} from "../components";
const Home = () => {
  return (
    <div className="bg-[#e5e7eb] ">
      <Hero />
      <ProductSection />
      <HowItWorks />
      <FeatureCards />
      <ConvenienceSection />
    </div>
  );
};

export default Home;
