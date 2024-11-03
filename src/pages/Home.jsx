import HeroBanner from "../components/HeroBanner";
import HeroBannerImg from "../components/HeroBannerImg";

const Home = () => {
  return (
    <div>
      <div className="relative">
        <HeroBanner></HeroBanner>
        <div className="absolute top-3/4">
          <HeroBannerImg></HeroBannerImg>
        </div>
      </div>
    </div>
  );
};

export default Home;
