import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Star from '../../assets/starg.svg'
import RightArrow from '../../assets/right-arrow.svg'
import { useGSAP } from '@gsap/react';

const images1 = [
  "https://plus.unsplash.com/premium_photo-1664201890375-f8fa405cdb7d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1688561808434-886a6dd97b8c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1669003153444-a1de1357f488?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1695527081782-c4ad3005417e?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

const images2 = [
  "https://plus.unsplash.com/premium_photo-1664201890375-f8fa405cdb7d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1688561808434-886a6dd97b8c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1669003153444-a1de1357f488?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1695527081782-c4ad3005417e?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

const images3 = [
  "https://plus.unsplash.com/premium_photo-1664201890375-f8fa405cdb7d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1688561808434-886a6dd97b8c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1669003153444-a1de1357f488?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1695527081782-c4ad3005417e?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

function ServicesOverview() {
  const setupCarousel = (carouselSelector, imagesLength) => {
    const imagesElements = document.querySelectorAll(`${carouselSelector} .carousel-img`);
    let currentIndex = 0;
    let isFirstCycle = true;

    gsap.set(imagesElements[0], { left: "0%", zIndex: imagesLength });

    function cycleImages() {
      const timeline = gsap.timeline({
        onComplete: () => {
          currentIndex = (currentIndex + 1) % imagesLength;
          isFirstCycle = false;
          cycleImages();
        }
      });

      timeline
        .set(imagesElements[currentIndex], { zIndex: imagesLength + 1, left: "-100%" })
        .to(imagesElements[currentIndex], {
          duration: 0.7,
          left: "0%",
          ease: "circ.out",
          delay: isFirstCycle ? 0.5 : 0
        })
        .add(() => {
          gsap.set(imagesElements[currentIndex], { zIndex: imagesLength });

          const previousIndex = (currentIndex - 1 + imagesLength) % imagesLength;
          gsap.set(imagesElements[previousIndex], { left: "0%", zIndex: 0 });
        })
        .to(imagesElements[(currentIndex - 1 + imagesLength) % imagesLength], {
          duration: 0.7,
          left: "-100%",
          ease: "circ.out",
        }, "+=0.1");
    }

    currentIndex = 1;
    cycleImages();
  };

  useEffect(() => {
    setupCarousel(".carousel-1", images1.length);
    setupCarousel(".carousel-2", images2.length);
    setupCarousel(".carousel-3", images3.length);
    setupCarousel(".carousel-4", images3.length);
    setupCarousel(".carousel-5", images3.length);
  }, []);



  const textsvRef = useRef(null);
  useGSAP(() => {
    gsap.from(".letteresv span", {
      y: 110,
      duration: 0.3,
      stagger: 0.1,
      scrollTrigger: {
        trigger: textsvRef.current,
        start: "0% 80%",
          end: "50% 50%",
      }
    })
  })



  return (
    <>
      <div className='relative z-10'>
        <div className='flex lg:flex-row flex-col-reverse'>
          <div className='lg:w-[67.5vw] relative z-50'>
            <div className='bg-blackColor group'>
              <div
                className={`magnetic-btn border border-blackColor bg-bodyColor p-2 relative overflow-hidden transition-all duration-500 
      group-hover:left-2 group-hover:bottom-2 left-0 bottom-0`}
              >
                <div className='flex items-center gap-8 lg:relative transition-all duration-500 left-[-260px] group-hover:left-0'>
                  <div className='lg:block hidden'>
                    <div className="carousel carousel-1 relative w-[250px] h-[150px] overflow-hidden rounded-md">
                      {images1.map((src, index) => (
                        <img
                          key={index}
                          src={src}
                          alt={`Image ${index + 1}`}
                          className="carousel-img rounded-md"
                          style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: '-100%' }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className='flex gap-6 py-4 lg:py-0 px-2'>
                    <span className='text-[17px] font-TTCPro text-gray-500 font-bold'>01</span>
                    <div>
                      <div className='lg:text-[50px] md:text-[40px] text-[30px] font-TTCPro font-bold text-blackColor leading-none'>Frontend Development</div>
                      <p className='font-TTCPro font-medium text-[17px] lg:whitespace-nowrap text-blackColor mt-1'>
                        Responsive Websites • Interactive Components • Single-Page Applications • Cross-Browser Compatibility
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='bg-blackColor group'>
              <div
                className={`magnetic-btn border border-blackColor bg-bodyColor p-2 relative overflow-hidden transition-all duration-500 
      group-hover:left-2 group-hover:bottom-2 left-0 bottom-0`}
              >
                <div className='flex items-center gap-8 lg:relative transition-all duration-500 left-[-260px] group-hover:left-0'>
                  <div className='lg:block hidden'>
                    <div className="carousel carousel-2 relative w-[250px] h-[150px] overflow-hidden rounded-md">
                    {images2.map((src, index) => (
                        <img
                          key={index}
                          src={src}
                          alt={`Image ${index + 1}`}
                          className="carousel-img rounded-md"
                          style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: '-100%' }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className='flex gap-6 py-4 lg:py-0 px-2'>
                    <span className='text-[17px] font-TTCPro text-gray-500 font-bold'>02</span>
                    <div>
                      <div className='lg:text-[50px] md:text-[40px] text-[30px] font-TTCPro font-bold text-blackColor leading-none'>UI Development</div>
                      <p className='font-TTCPro font-medium text-[17px] lg:whitespace-nowrap text-blackColor mt-1'>
                      User-Centric Designs • Interactive Prototyping • Pixel-Perfect UI Implementation • Accessibility
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='bg-blackColor group'>
              <div
                className={`magnetic-btn border border-blackColor bg-bodyColor p-2 relative overflow-hidden transition-all duration-500 
      group-hover:left-2 group-hover:bottom-2 left-0 bottom-0`}
              >
                <div className='flex items-center gap-8 lg:relative transition-all duration-500 left-[-260px] group-hover:left-0'>
                  <div className='lg:block hidden'>
                    <div className="carousel carousel-3 relative w-[250px] h-[150px] overflow-hidden rounded-md">
                    {images3.map((src, index) => (
                        <img
                          key={index}
                          src={src}
                          alt={`Image ${index + 1}`}
                          className="carousel-img rounded-md"
                          style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: '-100%' }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className='flex gap-6 py-4 lg:py-0 px-2'>
                    <span className='text-[17px] font-TTCPro text-gray-500 font-bold'>03</span>
                    <div>
                      <div className='lg:text-[50px] md:text-[40px] text-[30px] font-TTCPro font-bold text-blackColor leading-none'>Performance Optimization</div>
                      <p className='font-TTCPro font-medium text-[17px] lg:whitespace-nowrap text-blackColor mt-1'>
                      Fast Loading Times • Code Minification • Lazy Loading • Optimized Asset Management
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='bg-blackColor group'>
              <div
                className={`magnetic-btn border border-blackColor bg-bodyColor p-2 relative overflow-hidden transition-all duration-500 
      group-hover:left-2 group-hover:bottom-2 left-0 bottom-0`}
              >
                <div className='flex items-center gap-8 lg:relative transition-all duration-500 left-[-260px] group-hover:left-0'>
                  <div className='lg:block hidden'>
                    <div className="carousel carousel-4 relative w-[250px] h-[150px] overflow-hidden rounded-md">
                    {images3.map((src, index) => (
                        <img
                          key={index}
                          src={src}
                          alt={`Image ${index + 1}`}
                          className="carousel-img rounded-md"
                          style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: '-100%' }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className='flex gap-6 py-4 lg:py-0 px-2'>
                    <span className='text-[17px] font-TTCPro text-gray-500 font-bold'>04</span>
                    <div>
                      <div className='lg:text-[50px] md:text-[40px] text-[30px] font-TTCPro font-bold text-blackColor leading-none'>JavaScript Development</div>
                      <p className='font-TTCPro font-medium text-[17px] lg:whitespace-nowrap text-blackColor mt-1'>
                      Dynamic Content • API Integration • Frontend Logic • Real-Time Interactions
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='bg-blackColor group'>
              <div
                className={`magnetic-btn border border-blackColor bg-bodyColor p-2 relative overflow-hidden transition-all duration-500 
      group-hover:left-2 group-hover:bottom-2 left-0 bottom-0`}
              >
                <div className='flex items-center gap-8 lg:relative transition-all duration-500 left-[-260px] group-hover:left-0'>
                  <div className='lg:block hidden'>
                    <div className="carousel carousel-5 relative w-[250px] h-[150px] overflow-hidden rounded-md">
                    {images3.map((src, index) => (
                        <img
                          key={index}
                          src={src}
                          alt={`Image ${index + 1}`}
                          className="carousel-img rounded-md"
                          style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: '-100%' }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className='flex gap-6 py-4 lg:py-0 px-2'>
                    <span className='text-[17px] font-TTCPro text-gray-500 font-bold'>05</span>
                    <div>
                      <div className='lg:text-[50px] md:text-[40px] text-[30px] font-TTCPro font-bold text-blackColor leading-none'>CSS Animations</div>
                      <p className='font-TTCPro font-medium text-[17px] lg:whitespace-nowrap text-blackColor mt-1'>
                      Smooth Transitions • Micro-Interactions • Scroll Animations • Hover Effects
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      

           

          </div>
          <div className='lg:w-[22.5vw] md:w-[45vw] flex-shrink-0 h-fit lg:sticky lg:top-[80px] lg:mb-0 mb-[80px]'>
            <div className='p-6 bg-blackColor'>
            <h2 className='uppercase font-TTCPro font-[900] text-white text-[30px] sm:text-[3vw] leading-none mb-4' ref={textsvRef}>
              <span className='letteresv inline-block overflow-hidden'>
                <span className='inline-block'>s</span>
                <span className='inline-block'>e</span>
                <span className='inline-block'>r</span>
                <span className='inline-block'>v</span>
                <span className='inline-block'>i</span>
                <span className='inline-block'>c</span>
                <span className='inline-block'>e</span>
                <span className='inline-block'>s</span>
              </span>
              &nbsp;
              <span className='letteresv inline-block overflow-hidden'>
                <span className='inline-block'>s</span>
                <span className='inline-block'>n</span>
                <span className='inline-block'>a</span>
                <span className='inline-block'>p</span>
                <span className='inline-block'>s</span>
                <span className='inline-block'>h</span>
                <span className='inline-block'>o</span>
                <span className='inline-block'>t</span>
              </span>
              
            </h2>
            <p className='text-[20px] font-TTCPro font-medium text-bodyColor mt-8'>A summary of the tasks we handle and the types of projects they support</p>
            </div>

            <div className='group pointer-cursor md:h-[80px] h-[70px] lg:w-[22.5vw] md:w-[45vw] flex-shrink-0 border border-blackColor bg-blackColor w-full'>
                            <div className='magnetic-btn relative w-full h-full'>
                                <span
                                    className='relative overflow-hidden w-full h-full left-0 bottom-0 group-hover:left-4 group-hover:bottom-2 group-hover:border group-hover:border-blackColor bg-bodyColor  font-TTCPro uppercase text-[15px] tracking-[2px] inline-block font-semibold content-center transition-all duration-500'
                                    style={{ position: 'relative', transition: 'left 0.3s ease, bottom 0.3s ease' }}
                                >
                                    <span className='absolute left-[-1.5rem] w-6 top-1/2 -translate-y-1/2 transition-all duration-300 group-hover:left-5'><img src={RightArrow} alt="" className='w-full' /></span>
                                    <span className='absolute left-5 top-1/2 -translate-y-1/2 transition-all duration-300 group-hover:left-12 font-bold'>View Our Work</span>
                                    <span className='group-hover:animate-bounce-on absolute right-5 top-1/2 -translate-y-1/2'><img src={Star} alt="" className='w-8' /></span>
                                </span>
                            </div>
                        </div>

          </div>
        </div>
      </div>

    </>
  );
}

export default ServicesOverview;
