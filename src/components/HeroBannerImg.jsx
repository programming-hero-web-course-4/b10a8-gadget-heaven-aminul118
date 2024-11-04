import bannerImg from "../assets/banner.jpg";
const HeroBannerImg = () => {
  return (
    <div>
      <img
        className="w-7/12 xl:w-5/12 mx-auto rounded-3xl bg-white/40 p-4 border-t-2 "
        src={bannerImg}
        alt=""
      />
    </div>
  );
};

export default HeroBannerImg;
