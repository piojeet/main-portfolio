import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y, Autoplay } from 'swiper/modules'; // Import modules

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import InfiniteScrollImg from './InfiniteScrollImg';

function Testimonials() {
  const swiperRef = useRef(null); // Reference for Swiper instance
  const [isEnd, setIsEnd] = useState(false); // Track if we're at the end
  const [isBeginning, setIsBeginning] = useState(true); // Track if we're at the beginning

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.slidePrev) {
      swiperRef.current.slidePrev(); // Go to the previous slide
    }
  };

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.slideNext) {
      swiperRef.current.slideNext(); // Go to the next slide
    }
  };



  const [isMagnetic, setIsMagnetic] = useState(false);

  useEffect(() => {
    const buttons = document.querySelectorAll('.magnetic-btn');

    buttons.forEach((button) => {
      const handleMouseEnter = () => {
        setIsMagnetic(true);
      };

      const handleMouseLeave = () => {
        setIsMagnetic(false);
        button.style.transition = 'transform .4s linear'; // Smooth return on leave
        button.style.transform = 'translate(0, 0)'; // Reset position
      };

      const handleMouseMove = (e) => {
        if (!isMagnetic) return;

        const { left, top, width, height } = button.getBoundingClientRect();
        const buttonCenterX = left + width / 2;
        const buttonCenterY = top + height / 2;

        const deltaX = e.clientX - buttonCenterX;
        const deltaY = e.clientY - buttonCenterY;

        // Apply limit of 12px in any direction and slow down movement
        const limitedDeltaX = Math.max(-12, Math.min(12, deltaX * 0.1));
        const limitedDeltaY = Math.max(-12, Math.min(12, deltaY * 0.1));

        const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);

        if (distance < 150) {
          button.style.transition = 'transform 0.1s ease-out'; // Smoother, shorter transition on hover
          button.style.transform = `translate(${limitedDeltaX}px, ${limitedDeltaY}px)`; // Magnetic effect
        }
      };

      button.addEventListener('mouseenter', handleMouseEnter);
      button.addEventListener('mouseleave', handleMouseLeave);
      button.addEventListener('mousemove', handleMouseMove);

      return () => {
        button.removeEventListener('mouseenter', handleMouseEnter);
        button.removeEventListener('mouseleave', handleMouseLeave);
        button.removeEventListener('mousemove', handleMouseMove);
      };
    });
  }, [isMagnetic, isBeginning]); // Reinitialize whenever `isMagnetic` or `isBeginning` changes



  return (
    <>
      <div className='py-32'>
        <div className='flex items-center justify-center text-[17px] font-TTCPro font-semibold uppercase -tracking-tight text-blackColor gap-2'>
          <span>Five Star</span>
          <span>
            <svg width="46" height="46" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.25 21.75h7.5"></path>
              <path d="M12 21.75v-6"></path>
              <path d="M18 10.5c0-2.374-.004-6.31-.006-7.5a.75.75 0 0 0-.75-.75l-10.49.012a.75.75 0 0 0-.75.748c0 1.433-.006 6.055-.006 7.49 0 3.013 3.89 5.25 6 5.25S18 13.513 18 10.5Z"></path>
              <path d="M6 4.5H2.25v.75c0 2.588 1.573 5.25 3.75 5.25"></path>
              <path d="M18 4.5h3.75v.75c0 2.588-1.573 5.25-3.75 5.25"></path>
            </svg>
          </span>
          <span>Reviews</span>
        </div>

        <div className='lg:text-[95px] md:text-[84px] text-[10vw] uppercase font-TTCPro font-[900] text-center leading-[.9] my-6'>
          <span className='text-[#bebebe] [text-shadow:-5px_2px_0px_black] specal'>
            <span className='custom-strok'>t</span>
            <span className='custom-strok'>e</span>
            <span className='custom-strok'>s</span>
            <span className='custom-strok'>t</span>
            <span className='custom-strok'>i</span>
            <span className='custom-strok'>m</span>
            <span className='custom-strok'>o</span>
            <span className='custom-strok'>n</span>
            <span className='custom-strok'>i</span>
            <span className='custom-strok'>a</span>
            <span className='custom-strok'>l</span>
            <span className='custom-strok'>s</span>
          </span>
        </div>

        <p className='text-center md:text-[26px] text-[22px] font-TTCPro font-medium text-blackColor mb-10 md:mb-0'>Hear from the people we’ve helped along the way</p>

        <div className='select-none'>
          <div className="flex items-end justify-between">

            <button
              onClick={handlePrev}
              disabled={isBeginning}
              className={`md:h-[80px] h-[70px] md:w-[80px] w-[70px] flex-shrink-0 border border-blackColor bg-blackColor border-b-0 flex justify-start items-center ${isBeginning ? 'normal-point' : 'group pointer-cursor'}`}>

              {/* Magnetic effect on wrapper div */}
              <div className={`relative w-full h-full ${isBeginning ? 'pointer-events-none text-gray-400' : 'magnetic-btn text-blackColor'}`}>
                {/* Hover transition on inner span */}
                <span
                  className='relative overflow-hidden w-full h-full left-0 bottom-0 group-hover:left-4 group-hover:bottom-2 group-hover:border group-hover:border-blackColor bg-bodyColor font-TTCPro uppercase text-[20px] tracking-[2px] inline-flex font-semibold content-center items-center justify-around'
                  style={{ position: 'relative', transition: 'left 0.3s ease, bottom 0.3s ease' }}
                >

                  <span className='uppercase text-[15px] font-TTCPro font-bold'>
                    <svg
                      width="46"
                      height="46"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M19 12H5"></path>
                      <path d="m12 19-7-7 7-7"></path>
                    </svg>

                  </span>
                </span>
              </div>
            </button>



            <button
              onClick={handleNext}
              disabled={isEnd}
              className={`md:h-[80px] h-[70px] md:w-[80px] w-[70px] flex-shrink-0 border border-blackColor bg-blackColor border-b-0 flex justify-start items-center ${isEnd ? 'normal-point' : 'group pointer-cursor'}`}>

              {/* Magnetic effect on wrapper div */}
              <div className={`relative w-full h-full ${isEnd ? 'pointer-events-none text-gray-400' : 'magnetic-btn text-blackColor'}`}>
                {/* Hover transition on inner span */}
                <span
                  className='relative overflow-hidden w-full h-full left-0 bottom-0 group-hover:left-4 group-hover:bottom-2 group-hover:border group-hover:border-blackColor bg-bodyColor font-TTCPro uppercase text-[20px] tracking-[2px] inline-flex font-semibold content-center items-center justify-around'
                  style={{ position: 'relative', transition: 'left 0.3s ease, bottom 0.3s ease' }}
                >

                  <span className='uppercase text-[15px] font-TTCPro font-bold'>
                    <svg
                      width="46"
                      height="46"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>

                  </span>
                </span>
              </div>
            </button>

          </div>

          <Swiper
            modules={[Navigation, Scrollbar, A11y, Autoplay]}
            slidesPerView={1.05}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => {
              setIsBeginning(swiper.isBeginning); // Update state on slide change
              setIsEnd(swiper.isEnd);
            }}
            breakpoints={{
              768: {
                slidesPerView: 1.1,
              },
              1024: {
                slidesPerView: 1.3,
              },
            }}
            className="border border-blackColor bg-blackColor"
          >
            <SwiperSlide className='border-r border-blackColor bg-bodyColor'
            >
              <div className='md:p-16 lg:min-h-[95vh] md:min-h-[90vh] min-h-[60vh] h-auto p-4'>
                <div className='text-[25px] font-TTCPro font-extrabold'>John Doe</div>
                <p className='lg:text-[40px] sm:text-[30px] text-[20px] font-TTCPro font-normal text-blackColor lg:leading-[1.3] leading-[1] py-4'>
                  Working with the developer has been a fantastic experience! They transformed our outdated website into a modern, responsive platform that has improved our user engagement. Their attention to detail and creativity is unmatched.
                </p>
                <div className='lg:text-[30px] md:text-[25px] font-TTCPro text-gray-500'>Tech Company CEO</div>
              </div>
            </SwiperSlide>
            <SwiperSlide className='border-blackColor border-r bg-bodyColor'>
              <div className='md:p-16 lg:min-h-[95vh] md:min-h-[90vh] min-h-[60vh] h-auto p-4'>
                <div className='text-[25px] font-TTCPro font-extrabold'>Jane Smith</div>
                <p className='lg:text-[40px] sm:text-[30px] text-[20px] font-TTCPro font-normal text-blackColor lg:leading-[1.3] leading-[1] py-4'>
                  The developer is incredibly talented. They delivered the project on time, and their design ideas were innovative and user-friendly. Our website looks great, and we’ve seen an increase in conversions!
                </p>
                <div className='lg:text-[30px] md:text-[25px] font-TTCPro text-gray-500'>Marketing Manager</div>
              </div>
            </SwiperSlide>
            <SwiperSlide className='border-blackColor border-r bg-bodyColor'>
              <div className='md:p-16 lg:min-h-[95vh] md:min-h-[90vh] min-h-[60vh] h-auto p-4'>
                <div className='text-[25px] font-TTCPro font-extrabold'>Michael Lee</div>
                <p className='lg:text-[40px] sm:text-[30px] text-[20px] font-TTCPro font-normal text-blackColor lg:leading-[1.3] leading-[1] py-4'>
                This developer is a true professional. Their coding skills and creativity brought our vision to life. The new site is fast, responsive, and visually appealing. Highly recommend!
                </p>
                <div className='lg:text-[30px] md:text-[25px] font-TTCPro text-gray-500'>Startup Founder</div>
              </div>
            </SwiperSlide>
            <SwiperSlide className='border-blackColor border-r bg-bodyColor'>
              <div className='md:p-16 lg:min-h-[95vh] md:min-h-[90vh] min-h-[60vh] h-auto p-4'>
                <div className='text-[25px] font-TTCPro font-extrabold'>David Kim</div>
                <p className='lg:text-[40px] sm:text-[30px] text-[20px] font-TTCPro font-normal text-blackColor lg:leading-[1.3] leading-[1] py-4'>
                Fantastic experience working with this developer! They are proactive, efficient, and have a deep understanding of front-end technologies. Our website now has a clean, modern look and functions perfectly on all platforms.
                </p>
                <div className='lg:text-[30px] md:text-[25px] font-TTCPro text-gray-500'>Product Manager</div>
              </div>
            </SwiperSlide>
            <SwiperSlide className='border-r-0 border-blackColor bg-bodyColor'
            >
              <div className='md:p-16 lg:min-h-[95vh] md:min-h-[90vh] min-h-[60vh] h-auto p-4'>
                <div className='text-[25px] font-TTCPro font-extrabold'>Emily Johnson</div>
                <p className='lg:text-[40px] sm:text-[30px] text-[20px] font-TTCPro font-normal text-blackColor lg:leading-[1.3] leading-[1] py-4'>
                I am very impressed with the work. The developer understood our requirements perfectly and built a stunning website. Our customers are loving the new interface, and it’s running smoothly across all devices.
                </p>
                <div className='lg:text-[30px] md:text-[25px] font-TTCPro text-gray-500'>E-commerce Business Owner</div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        {/* <InfiniteScrollImg /> */}
      </div>

     
    </>
  );
}

export default Testimonials;
