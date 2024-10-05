/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Chat from '../assets/chat.svg'
import Message from '../assets/message.svg'

function ProjectTell() {
  return (
    <>
      <div className='lg:flex justify-between items-start hidden'>
        <div className='flex items-center justify-end flex-col w-fit ml-auto'>
          <div className='shrink-0 w-[80px] h-[80px] border border-blackColor flex items-center justify-center border-r-0'>
            <img src={Chat} alt="" className='w-10' />
          </div>
          <div className='shrink-0 w-[80px] h-[80px] border border-blackColor flex items-center justify-center bg-blackColor'>
            <span className='animate-spiner text-bodyColor w-10 h-10'>
              <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" preserveAspectRatio="xMidYMin meet" className="--icon --icon-spark-3"><path d="M11 2.4a1.1 1.1 0 0 1 2 0l1.2 2.3a1.1 1.1 0 0 0 1.4.5l2.5-.7a1.1 1.1 0 0 1 1.4 1.4l-.7 2.5a1.1 1.1 0 0 0 .5 1.4l2.3 1.2a1.1 1.1 0 0 1 0 2l-2.3 1.2a1.1 1.1 0 0 0-.5 1.4l.7 2.5a1.1 1.1 0 0 1-1.4 1.4l-2.5-.7a1.1 1.1 0 0 0-1.4.5L13 21.6a1.1 1.1 0 0 1-2 0l-1.2-2.3a1.1 1.1 0 0 0-1.4-.5l-2.5.7a1.1 1.1 0 0 1-1.4-1.4l.7-2.5a1.1 1.1 0 0 0-.5-1.4L2.4 13a1.1 1.1 0 0 1 0-2l2.3-1.2a1.1 1.1 0 0 0 .5-1.4L4.5 6a1.1 1.1 0 0 1 1.4-1.4l2.5.7a1.1 1.1 0 0 0 1.4-.5Z" fill='currentColor'></path></svg>
            </span>
          </div>
        </div>

        <div className='w-[67.5vw] border border-blackColor border-b-0 py-16 px-5'>
          <div className='text-center flex items-center justify-center gap-2 text-[20px] font-TTCPro font-semibold uppercase'>
            <span>Your search</span>
            <img src={Message} alt="" />
            <span>ends with us</span>
          </div>

          <div className='lg:text-[95px] md:text-[84px] uppercase font-TTCPro font-[900] text-center leading-[.9] my-6 md:flex flex-wrap items-center justify-center lg:block'>
            <span>
              <span>t</span>
              <span>e</span>
              <span>l</span>
              <span>l</span>
            </span>
            &nbsp;
            <span>
              <span>u</span>
              <span>s</span>
            </span>
            &nbsp;
            <span>
              <span>a</span>
              <span>b</span>
              <span>o</span>
              <span>u</span>
              <span>t</span>
            </span>
            <br />
            <span>
              <span>y</span>
              <span>o</span>
              <span>r</span>
            </span>
            &nbsp;
            <span className='text-[#bebebe] [text-shadow:-5px_2px_0px_black] specal'>
              <span className='custom-strok'>p</span>
              <span className='custom-strok'>r</span>
              <span className='custom-strok'>o</span>
              <span className='custom-strok'>j</span>
              <span className='custom-strok'>e</span>
              <span className='custom-strok'>t</span>
            </span>
          </div>

          <p className='font-TTCPro text-[26px] font-medium text-center md:max-w-[400px] md:w-full lg:max-w-full md:mx-auto'>Give us a few key details on the form below and we'll be in touch!</p>

        </div>
      </div>
    </>
  )
}

export default ProjectTell