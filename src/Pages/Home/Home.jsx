import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ImageCards from "./ImageCards";
//
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";
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
    <div className="flex flex-col md:flex-row container mx-auto lg:h-[calc(100vh-72px)] mt-6 items-center gap-3 px-3 md:px-0">
      <div className="w-full md:w-1/4 text-3xl font-semibold">
        <h1>Indulge in our authentic Bengali cuisine at Spice Route</h1>
      </div>
      <div className="w-full md:w-3/4">
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
            <SwiperSlide>
              <ImageCards key={photo.id} photo={photo}></ImageCards>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Home;
