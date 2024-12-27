import React, { useRef } from 'react'
import Paint from '../../../assets/frontenddesign.svg';
import GlowUp from '../../ui/GlowUp';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function FrontendGlowUp() {

  const textgfRef = useRef(null);
  useGSAP(() => {
    gsap.from(".letteresgf span", {
      y: 110,
      duration: 0.3,
      stagger: 0.1,
      scrollTrigger: {
        trigger: textgfRef.current,
        start: "0% 80%",
          end: "50% 50%",
      }
    })
  })

    const title = (
        <div ref={textgfRef}>
        <span className='letteresgf inline-block overflow-hidden'>
              <span className='inline-block relative'>N</span>
              <span className='inline-block relative'>e</span>
              <span className='inline-block relative'>e</span>
              <span className='inline-block relative'>d</span>
            </span>&nbsp;
            <span className='letteresgf inline-block overflow-hidden'>
              <span className='inline-block relative'>s</span>
              <span className='inline-block relative'>t</span>
              <span className='inline-block relative'>u</span>
              <span className='inline-block relative'>n</span>
              <span className='inline-block relative'>n</span>
              <span className='inline-block relative'>i</span>
              <span className='inline-block relative'>n</span>
              <span className='inline-block relative'>g</span>
            </span>&nbsp;
            <span className='letteresgf inline-block overflow-hidden'>
              <span className='inline-block relative'>w</span>
              <span className='inline-block relative'>e</span>
              <span className='inline-block relative'>b</span>
              <span className='inline-block relative'>s</span>
              <span className='inline-block relative'>i</span>
              <span className='inline-block relative'>t</span>
              <span className='inline-block relative'>e</span>
            </span>&nbsp;
            <span className='letteresgf inline-block overflow-hidden'>
              <span className='inline-block relative'>d</span>
              <span className='inline-block relative'>e</span>
              <span className='inline-block relative'>s</span>
              <span className='inline-block relative'>i</span>
              <span className='inline-block relative'>g</span>
              <span className='inline-block relative'>n</span>
              <span className='inline-block relative'>?</span>
            </span>
        </div>
    );

    const icon = Paint;

    const subTitle = "Let’s work together!";

    const btn = "send us a message"

  return (
    <div>
        <GlowUp
        title={title}
        icon={icon}
        subTitle={subTitle}
        btn={btn}
        />
    </div>
  )
}

export default FrontendGlowUp