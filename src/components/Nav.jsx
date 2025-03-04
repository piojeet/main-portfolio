/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import Logo from '../assets/logo.svg'
import Menu from '../assets/menu.svg'
import Close from '../assets/close.svg'
import ShortLogo from '../assets/shortlogo.svg'
import Rocket from '../assets/rocket.svg'
import downArrow from '../assets/chevron-down.svg'
import RocketWhite from '../assets/rocket-white.svg'
import RightArrow from '../assets/right-arrow.svg'
import RightArroWhite from '../assets/right-arrow-white.svg'
import NavLinks from './NavLinks'
import { NavLink, useLocation } from 'react-router-dom';
import { useProjectAllContext } from '../context/ProjectAllContext';
import ChatGpt from './gpt/ChatGpt'

function Nav() {

  const {
    handleFirstForm,
    handleSecondForm,
    showFirstForm,
  } = useProjectAllContext();


  const location = useLocation();

  const [leftPosition, setLeftPosition] = useState(false);

  useEffect(() => {
    const handleCsroll = () => {
      if (window.scrollY >= 108) {
        setLeftPosition('0');
      } else {
        setLeftPosition(false)
      }
    };


    window.addEventListener('scroll', handleCsroll);


    return () => {
      window.removeEventListener('scroll', handleCsroll);
    }
  }, [])

  const [clipPath, setClipPath] = useState('inset(-1px -1px -1px 101%)'); // Initial clip-path

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 108) {
        setClipPath('inset(-1px -1px -1px 101%)'); // Clip-path for scroll down
      } else if (window.scrollY <= 20) {
        setClipPath('inset(-1px -1px -1px -1px)'); // Clip-path for scroll up
      }
    };

    // Check the scroll position on component mount
    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);





  const [isMagnetic, setIsMagnetic] = useState(false);

  useEffect(() => {
    const isMouseDevice = () => window.matchMedia('(pointer: fine)').matches;

    // Function to handle magnetic effect logic
    const handleMagneticEffect = () => {
      if (!isMouseDevice() || window.innerWidth < 1024) {
        const buttons = document.querySelectorAll('.magnetic-btn');

        buttons.forEach((button) => {
          let isClicked = false;

          const handleMouseEnter = () => {
            if (!isClicked) setIsMagnetic(true);
          };

          const handleMouseLeave = () => {
            if (!isClicked) {
              setIsMagnetic(false);
              button.style.transition = 'transform .4s linear'; // Smooth return
              button.style.transform = 'translate(0, 0)'; // Reset position
            }
          };

          const handleMouseMove = (e) => {
            if (!isMagnetic || isClicked) return;

            const { left, top, width, height } = button.getBoundingClientRect();
            const buttonCenterX = left + width / 2;
            const buttonCenterY = top + height / 2;

            const deltaX = e.clientX - buttonCenterX;
            const deltaY = e.clientY - buttonCenterY;

            const limitedDeltaX = Math.max(-12, Math.min(12, deltaX * 0.1));
            const limitedDeltaY = Math.max(-12, Math.min(12, deltaY * 0.1));

            if (Math.sqrt(deltaX ** 2 + deltaY ** 2) < 150) {
              button.style.transition = 'transform 0.1s ease-out'; // Smooth movement
              button.style.transform = `translate(${limitedDeltaX}px, ${limitedDeltaY}px)`;
            }
          };

          const handleMouseDown = () => {
            isClicked = true;
            button.style.transition = 'transform 0.3s ease-out'; // Smooth return on click
            button.style.transform = 'translate(0, 0)'; // Reset position
          };

          const handleMouseUp = () => {
            isClicked = false;
            setTimeout(() => setIsMagnetic(true), 300); // Re-enable magnetic effect after a delay
          };

          button.addEventListener('mouseenter', handleMouseEnter);
          button.addEventListener('mouseleave', handleMouseLeave);
          button.addEventListener('mousemove', handleMouseMove);
          button.addEventListener('mousedown', handleMouseDown);
          button.addEventListener('mouseup', handleMouseUp);

          // Cleanup event listeners on unmount
          return () => {
            button.removeEventListener('mouseenter', handleMouseEnter);
            button.removeEventListener('mouseleave', handleMouseLeave);
            button.removeEventListener('mousemove', handleMouseMove);
            button.removeEventListener('mousedown', handleMouseDown);
            button.removeEventListener('mouseup', handleMouseUp);
          };
        });
      }
    };

    // Initial check
    handleMagneticEffect();

    // Re-run effect on window resize
    const handleResize = () => {
      handleMagneticEffect();
    };

    window.addEventListener('resize', handleResize);

    // Cleanup resize event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Dependency array is empty so this will run once on mount







  const [menuPath, setMenuPath] = useState('inset(-1px 100% -1px -1px)'); // Initial clip-path for closed menu
  const [isOpen, setIsOpen] = useState(false); // Track open/close state

  // Toggle function for opening and closing the menu
  const toggleMenu = () => {
    setIsOpen(prevState => !prevState);
  };

  useEffect(() => {
    if (isOpen) {
      setMenuPath('inset(-1px -1px -1px -1px)'); // Fully open (visible)
      // document.body.style.overflow = 'hidden'; // Prevent scrolling
      // document.body.classList.add('no-scrollbar-thumb');
    } else {
      setMenuPath('inset(-1px 100% -1px -1px)'); // Fully closed (hidden)
      // document.body.style.overflow = ''; // Restore scrolling
      // document.body.classList.remove('no-scrollbar-thumb');
    }
  }, [isOpen]);


  const handleClick = (e) => {
    if (location.pathname === "/") {
      e.preventDefault(); // Prevent the link from working
    }
  };



  return (
    <>
              {!isOpen && <ChatGpt />}
      <div>
        <header className='flex items-center justify-between pt-7'>
          <div className='flex items-center w-full'>
            <div className='fixed top-[1.75rem] flex items-center z-[1000]'>
              <div className='relative'>
                <button
                  className={`group pointer-cursor md:w-[80px] md:h-[80px] h-[70px] w-[70px] flex-shrink-0 bg-blackColor border border-blackColor flex items-center justify-center relative z-[200] ${isOpen ? 'bg-gray-800 border-0' : ''}`} onClick={toggleMenu}
                >
                  {/* Magnetic effect on wrapper */}
                  <div className="magnetic-btn h-full w-full  flex items-center justify-center relative z-20">
                    {/* Hover transition on inner span */}
                    <span
                      className={`h-full w-full bg-blackColor flex items-center justify-center relative left-0 bottom-0 z-20 border lg:group-hover:border-blackColor transition-all duration-300 group-active:left-0 group-active:bottom-0 lg:group-hover:left-2 lg:group-hover:bottom-2 ${isOpen ? 'border-gray-600 group-hover:border-gray-600 border-b-0 group-hover:border-b' : ''}`}
                      style={{ position: 'relative', transition: 'left 0.3s ease, bottom 0.3s ease' }}
                    >

                      {isOpen ? (
                        <img src={Close} className='w-[2rem] relative z-20' alt="image" />

                      ) : (
                        <img src={Menu} className='w-[2rem] relative z-20' alt="image" />

                      )}

                      <div className={`absolute w-[100%] h-full bg-bodyColor z-10 right-0 top-0 origin-right transition-all duration-300 ${isOpen ? 'scale-x-0' : 'scale-x-100'}`}></div>
                    </span>
                  </div>
                </button>

                {/* Menu Container */}
                <div
                  className={`fixed top-0 left-0 w-full h-full bg-[#0f0f0f] text-bodyColor z-[100] overflow-hidden transition-all duration-[.3s] ease-in whitespace-nowrap normal-point`}
                  style={{ clipPath: menuPath }} // Correct way to apply clipPath
                >
                  <div className=''>
                    <div className='w-[90vw] m-auto whitespace-nowrap relative h-screen'>
                      <div className='w-full left-1/2 -translate-x-1/2 absolute h-full'>
                        <div className='absolute top-0 left-0 w-full h-full flex items-start justify-between'>
                          <div className='h-full w-[1px] bg-gray-600'></div>
                          <div className='h-full w-[1px] bg-gray-600'></div>
                          <div className='h-full w-[1px] bg-gray-600'></div>
                          <div className='h-full w-[1px] bg-gray-600'></div>
                          <div className='h-full w-[1px] bg-gray-600'></div>
                        </div>

                        <div className='relative z-[1000]'>
                          <div className='flex items-start justify-between pt-7 w-full'>
                            <div className='flex items-center md:pl-[80px] pl-[70px] md:w-[50%] flex-shrink-0 w-full'>
                              {/* Close Menu Button */}


                              {/* Logo Area */}
                              <NavLink to="/" onClick={handleClick} className='pointer-cursor clip-logo lg:w-[250px] md:w-[100%] md:h-[80px] w-full h-[70px] md:flex-shrink-0 border border-gray-600 border-b-0 bg-blackColor border-l-0 flex items-center justify-center whitespace-nowrap flex-nowrap relative origin-right overflow-hidden z-0'>
                                <span className='block'>
                                  <img src={Logo} className='md:h-[1.5rem] h-[1.3rem]' alt='logo' />
                                </span>
                              </NavLink>
                            </div>



                            <NavLink to="/contact" className='group pointer-cursor h-[80px] lg:w-[25%] md:w-[50%] flex-shrink-0 bg-gray-800 md:flex justify-start items-center hidden'>
                              {/* Magnetic effect on wrapper div */}
                              <div className='magnetic-btn relative w-full h-full'>
                                {/* Hover transition on inner span */}
                                <span
                                  className='relative overflow-hidden w-full h-full left-0 bottom-0 lg:group-hover:left-4 lg:group-hover:bottom-2 group-hover:border-l bg-blackColor border border-gray-600 border-l-0 font-TTCPro uppercase text-[15px] tracking-[2px] inline-block font-bold content-center transition-all duration-500'
                                  style={{ position: 'relative', transition: 'left 0.3s ease, bottom 0.3s ease' }}
                                >
                                  <span className='absolute left-[-1.5rem] w-6 top-1/2 -translate-y-1/2 transition-all duration-300 group-hover:left-5'><img src={RightArroWhite} alt="" className='w-full' /></span>
                                  <span className='absolute left-5 top-1/2 -translate-y-1/2 transition-all duration-300 group-hover:left-12'>Get Started</span>
                                  <span className='group-hover:animate-bounce-on absolute right-5 top-1/2 -translate-y-1/2'><img src={RocketWhite} alt="" className='w-8 saturate-100' /></span>
                                </span>
                              </div>
                            </NavLink>

                          </div>

                          {/* Navigation Links */}
                          <nav>
                            <div>
                              <NavLinks />
                            </div>
                          </nav>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>


              <NavLink to="/" onClick={handleClick} className={`pointer-cursor md:w-[80px] md:h-[80px] h-[70px] w-[70px] flex-shrink-0 bg-blackColor border border-blackColor flex items-center justify-center relative md:left-[-80px] left-[-70px] ${isOpen ? 'hidden active' : ''}`}
                style={{
                  left: leftPosition, // Dynamic left position based on scroll
                  transition: "left 0.3s ease",
                  // Smooth transition
                }}
              >
                <img src={ShortLogo} className='md:w-[3rem] w-[2.5rem]' alt="image" />
              </NavLink>
            </div>

            <NavLink to="/" onClick={handleClick}
              className='pointer-cursor clip-logo lg:w-[250px] md:w-[34.57vw] md:h-[80px] w-full h-[70px] md:flex-shrink-0 border border-blackColor bg-blackColor inline-flex items-center justify-center md:ml-[80px] ml-[70px] whitespace-nowrap flex-nowrap relative origin-right overflow-hidden z-0'
              style={{ clipPath: clipPath, transition: 'clip-path 0.3s ease' }} // Apply clip-path and transition
            >
              <span className='w-full h-full inline-flex items-center justify-center'>
                <img src={Logo} className='md:h-[1.5rem] h-[1.3rem]' alt='image' />
              </span>
            </NavLink>



          </div>

          <div className='items-center justify-end flex-shrink-0 w-1/2 md:flex hidden'>
            {/* Feature plane */}
            {location.pathname === '/work-personation' && (
              <NavLink to='/projects' className='group pointer-cursor h-[80px] lg:w-[50%] md:w-[45vw] flex-shrink-0 border border-blackColor bg-blackColor border-b-0 border-r-0 justify-start items-center hidden relative z-20 lg:block'>
                {/* Magnetic effect on wrapper div */}
                <div className='magnetic-btn relative w-full h-full'>
                  {/* Hover transition on inner span */}
                  <span
                    className='relative overflow-hidden w-full h-full left-0 bottom-0 lg:group-hover:left-4 lg:group-hover:bottom-2 bg-bodyColor border group-hover:border-blackColor font-TTCPro uppercase text-[15px] tracking-[2px] font-bold content-center transition-all duration-500 inline-flex items-center justify-center'
                    style={{ position: 'relative', transition: 'left 0.3s ease, bottom 0.3s ease' }}
                  >
                    <span className='w-6 absolute top-1/2 -translate-y-1/2 left-[8%] rotate-180'><img src={RightArrow} alt="" className='w-full' /></span>
                    <span className=''>All Works</span>

                  </span>
                </div>
              </NavLink>
            )}
            {/* Feature plane */}


            {(location.pathname === "/branding" ||
              location.pathname === "/website-design" ||
              location.pathname === "/frontend-design" ||
              location.pathname === "/design-support") && (
                <NavLink to="/services" className={`group pointer-cursor h-[80px] lg:w-[50%] md:w-[45vw] flex-shrink-0 border border-r-0 border-blackColor bg-blackColor border-b-0 lg:flex hidden justify-start items-center relative z-20`}>
                  {/* Magnetic effect on wrapper div */}
                  <div className='magnetic-btn relative w-full h-full'>
                    {/* Hover transition on inner span */}
                    <span
                      className='relative overflow-hidden w-full h-full left-0 bottom-0 lg:group-hover:left-4 lg:group-hover:bottom-2 bg-bodyColor border group-hover:border-blackColor font-TTCPro uppercase text-[15px] tracking-[2px] inline-flex items-center justify-center gap-4 font-bold content-center transition-all duration-500'
                      style={{ position: 'relative', transition: 'left 0.3s ease, bottom 0.3s ease' }}
                    >
                      <span className='w-6 block relative -left-8 rotate-180'><img src={RightArrow} alt="" className='w-full' /></span>
                      <span className='block uppercase'>all services</span>
                    </span>
                  </div>
                </NavLink>
              )}


            <NavLink to="/contact" className={`group pointer-cursor h-[80px] lg:w-[50%] md:w-[45vw] flex-shrink-0 border border-blackColor bg-blackColor border-b-0 md:flex justify-start items-center hidden relative z-10 ${location.pathname === "/contact" ? 'block lg:hidden' : ''}`}>
              {/* Magnetic effect on wrapper div */}
              <div className='magnetic-btn relative w-full h-full'>
                {/* Hover transition on inner span */}
                <span
                  className='relative overflow-hidden w-full h-full left-0 bottom-0 lg:group-hover:left-4 lg:group-hover:bottom-2 bg-bodyColor border lg:group-hover:border-blackColor font-TTCPro uppercase text-[15px] tracking-[2px] inline-block font-bold content-center transition-all duration-500'
                  style={{ position: 'relative', transition: 'left 0.3s ease, bottom 0.3s ease' }}
                >
                  <span className='absolute left-[-1.5rem] w-6 top-1/2 -translate-y-1/2 transition-all duration-300 group-hover:left-5'><img src={RightArrow} alt="" className='w-full' /></span>
                  <span className='absolute left-5 top-1/2 -translate-y-1/2 transition-all duration-300 group-hover:left-12'>Get Started</span>
                  <span className='group-hover:animate-bounce-on absolute right-5 top-1/2 -translate-y-1/2'><img src={Rocket} alt="" className='w-8' /></span>
                </span>
              </div>
            </NavLink>





            {location.pathname === "/contact" && (
              <div className={`lg:flex items-center justify-end w-full hidden`}>
                <div className='group relative z-20 pointer-cursor h-[80px] lg:w-[50%] md:w-[45vw] flex-shrink-0 border border-blackColor bg-blackColor border-b-0 md:flex justify-start items-center hidden' onClick={handleFirstForm}>
                  {/* Magnetic effect on wrapper div */}
                  <div className='magnetic-btn relative w-full h-full'>
                    {/* Hover transition on inner span */}
                    <span
                      className='relative overflow-hidden w-full h-full left-0 bottom-0 lg:group-hover:left-4 lg:group-hover:bottom-2 bg-blackColor group-hover:border lg:group-hover:border-blackColor font-TTCPro uppercase text-[15px] tracking-[2px] font-bold content-center transition-all duration-500 inline-flex items-center justify-around'
                      style={{ position: 'relative', transition: 'left 0.3s ease, bottom 0.3s ease' }}
                    >

                      <span className={`relative z-20 ${showFirstForm ? 'text-bodyColor' : 'text-blackColor'}`}>Enquiry</span>
                      <span className='relative z-20'><img src={downArrow} alt="" className={`w-8 ${showFirstForm ? 'invert' : ''}`} /></span>
                      <span className={`absolute top-0 right-0 origin-right w-full h-full bg-bodyColor transition-all duration-300 z-10 ${showFirstForm ? 'scale-x-0' : 'scale-x-100'}`}></span>
                    </span>
                  </div>
                </div>

                <div className='group pointer-cursor h-[80px] lg:w-[50%] md:w-[45vw] flex-shrink-0 border border-blackColor bg-blackColor border-b-0 md:flex justify-start items-center hidden relative z-10' onClick={handleSecondForm}>
                  {/* Magnetic effect on wrapper div */}
                  <div className='magnetic-btn relative w-full h-full'>
                    {/* Hover transition on inner span */}
                    <span
                      className='relative overflow-hidden w-full h-full left-0 bottom-0 lg:group-hover:left-4 lg:group-hover:bottom-2 bg-blackColor group-hover:border lg:group-hover:border-blackColor font-TTCPro uppercase text-[15px] tracking-[2px] inline-flex font-bold content-center transition-all duration-500 items-center justify-around'
                      style={{ position: 'relative', transition: 'left 0.3s ease, bottom 0.3s ease' }}
                    >
                      <span className={`relative z-20 ${showFirstForm ? 'text-blackColor' : 'text-bodyColor'}`}>General</span>
                      <span className='relative z-20'><img src={downArrow} alt="" className={`w-8 ${showFirstForm ? 'invert-0' : 'invert'}`} /></span>
                      <span className={`absolute top-0 right-0 origin-right w-full h-full bg-bodyColor transition-all duration-300 z-10 ${showFirstForm ? 'scale-x-100' : 'scale-x-0'}`}></span>
                    </span>
                  </div>
                </div>
              </div>
            )}

          </div>

        </header>



        {/* moble nav  */}

      </div>
    </>
  )
}

export default Nav