import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ImageCards from "./ImageCards";
//
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";
import ChefsCard from "./ChefsCard";
//

const Home = () => {
  const chefs = useLoaderData();
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/images")
      .then((res) => res.json())
      .then((data) => setPhotos(data));
  }, []);
  return (
    <div className="container mx-auto">
    <div className="flex flex-col lg:flex-row lg:h-[calc(100vh-72px)] mt-6 items-center gap-3 px-3 md:px-0">
      <div className="w-full lg:w-1/4">
        <h1 className="text-3xl font-semibold my-2">Indulge in our authentic Bengali cuisine at Spice Route</h1>
        <p>Experience the rich and flavorful taste of Bengali cuisine at our restaurant. From our signature fish dishes to our aromatic biryanis, our menu is a journey through the vibrant flavors of Bengal. Indulge in our traditional recipes made with fresh, locally sourced ingredients and let our attentive staff take you on a culinary adventure you won't forget.</p>
      </div>
      <div className="w-full lg:w-3/4">
        <Swiper
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
          modules={[EffectCoverflow, Pagination]}
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
        <h1 className="my-4 bg-gradient-to-r from-[blue] to-[red] bg-clip-text text-transparent text-4xl font-bold text-center tracking-widest">Our Awesome Chefs</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {chefs.map(chef=><ChefsCard key={chef.id} chef={chef}></ChefsCard>)}
        </div>
      </div>
    </div>
  );
};

export default Home;
