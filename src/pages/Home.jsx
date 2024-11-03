import { Outlet } from "react-router-dom";
import HeroBanner from "../components/HeroBanner";
import HeroBannerImg from "../components/HeroBannerImg";

const Home = () => {
  return (
    <div>
      {/* Header Section Starts */}
      <div className="relative">
        <HeroBanner></HeroBanner>
        <div className="absolute top-3/4">
          <HeroBannerImg></HeroBannerImg>
        </div>
      </div>
      {/* Header Section End */}
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Home;
