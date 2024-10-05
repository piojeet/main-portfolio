import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Autoplay } from 'swiper/modules'; // Import Autoplay
import 'swiper/css';
import 'swiper/css/free-mode';

function InfiniteScrollImg() {
  return (
    <div className=''>
      <Swiper
  spaceBetween={50}
  slidesPerView={3}
  freeMode={true}
  loop={true}  // Enable looping
  autoplay={{
    delay: 0, // Set delay to 0 for continuous autoplay
    disableOnInteraction: false, // Keeps autoplay running even when interacted with
  }}
  speed={5000} // Adjust speed for smooth transition
  onSlideChange={() => console.log('slide change')}
  onSwiper={(swiper) => console.log(swiper)}
  modules={[FreeMode, Autoplay]}  // Include FreeMode and Autoplay modules
  className="mySwiper"
>
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        {/* Add more slides as needed */}
      </Swiper>
    </div>
  );
}

export default InfiniteScrollImg;
