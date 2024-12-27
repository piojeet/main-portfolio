import React, { useRef } from 'react'
import Paint from '../../../assets/webdesign.svg';
import GlowUp from '../../ui/GlowUp';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function WebDesignGlowUp() {

  const textwggRef = useRef(null);
  useGSAP(() => {
    gsap.from(".lettereswgg span", {
      y: 110,
      duration: 0.3,
      stagger: 0.05,
      scrollTrigger: {
        trigger: textwggRef.current,
        start: "0% 80%",
          end: "50% 50%",
          // markers: true
      }
    })
  })

    const title = (
        <div ref={textwggRef} className='overflow-hidden pb-2'>
        <span className='lettereswgg inline-block'>
              <span className='inline-block relative'>L</span>
              <span className='inline-block relative'>o</span>
              <span className='inline-block relative'>o</span>
              <span className='inline-block relative'>k</span>
              <span className='inline-block relative'>i</span>
              <span className='inline-block relative'>n</span>
              <span className='inline-block relative'>g</span>
            </span>&nbsp;
            <span className='lettereswgg inline-block'>
              <span className='inline-block relative'>f</span>
              <span className='inline-block relative'>o</span>
              <span className='inline-block relative'>r</span>
            </span>&nbsp;
            <span className='lettereswgg inline-block'>
              <span className='inline-block relative'>a</span>
            </span>&nbsp;
            <span className='lettereswgg inline-block'>
              <span className='inline-block relative'>b</span>
              <span className='inline-block relative'>r</span>
              <span className='inline-block relative'>a</span>
              <span className='inline-block relative'>n</span>
              <span className='inline-block relative'>d</span>
            </span>&nbsp;
            <span className='lettereswgg inline-block'>
              <span className='inline-block relative'>g</span>
              <span className='inline-block relative'>l</span>
              <span className='inline-block relative'>o</span>
              <span className='inline-block relative'>w</span>
            </span>&nbsp;
            <span className='lettereswgg inline-block'>
              <span className='inline-block relative'>u</span>
              <span className='inline-block relative'>p</span>
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

export default WebDesignGlowUp