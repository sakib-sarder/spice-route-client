import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ImageCards from "./ImageCards";
//
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper";
import ChefsCard from "./ChefsCard";
import ArticlesSection from "./ArticlesSection";
import JoinUs from "./JoinUs";
//

const Home = () => {
  const chefs = useLoaderData();
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    fetch("https://spice-route-server-shakib232002-gmailcom.vercel.app/images")
      .then((res) => res.json())
      .then((data) => setPhotos(data));
  }, []);
  return (
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row lg:h-[calc(100vh-72px)] mt-6 items-center gap-3 px-3 md:px-0">
        <div className="w-full lg:w-1/4">
          <h1 className="text-4xl font-bold my-2">
            Find Authentic Bengali Recipe at <span className="bg-gradient-to-r from-[#F3C843] to-[#F59E0B] bg-clip-text text-transparent">Spice Route</span>
          </h1>
          <p className="ps-1">
          Spice up your taste buds with The Spice Route  Bangladesh's ultimate recipe destination! Discover a world of flavorful Bangladeshi cuisine and fusion dishes, all with easy-to-follow instructions and stunning food photography. Explore new horizons in cooking with The Spice Route today!
          </p>
        </div>
        <div className="w-full lg:w-3/4">
          <Swiper
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="mySwiper"
          >
            {photos.map((photo) => (
              <SwiperSlide key={photo.id}>
                <ImageCards photo={photo}></ImageCards>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="px-3 md:px-0 my-8">
        <h1 className="my-5 bg-gradient-to-r from-[#F59E0B] to-[#F3C843] bg-clip-text text-transparent text-4xl font-bold text-center tracking-widest">
          Popular Chefs in Bangladesh
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {chefs.map((chef) => (
            <ChefsCard key={chef.id} chef={chef}></ChefsCard>
          ))}
        </div>
        <div className="my-10">
        <ArticlesSection />
        </div>
        <div className="my-16">
          <JoinUs/>
        </div>
      </div>
    </div>
  );
};

export default Home;
