import HeroBanner from "../components/HeroBanner";
import HeroBannerImg from "../components/HeroBannerImg";
import Heading from "../components/Heading";
import Categories from "../components/Categories";
import { Outlet } from "react-router-dom";

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
      <div className="mt-96">
        <Heading title={`Explore Cutting-Edge Gadgets`}></Heading>
      </div>

      {/* Category and Products section */}
      <div className="grid md:grid-cols-4 gap-14 md:gap-4 mt-24">
        <div className="md:col-span-1">
          <Categories></Categories>
        </div>
        <div className="md:col-span-3">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Home;
