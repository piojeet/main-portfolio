import React, { useRef } from 'react'
import HowWeWork from '../../ui/HowWeWork';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function BrandingHowWeWork() {

    const textbwRef = useRef(null);
    useGSAP(() => {
      gsap.from(".letteresbw span", {
        y: 110,
        duration: 0.3,
        stagger: 0.1,
        scrollTrigger: {
          trigger: textbwRef.current,
          start: "0% 80%",
            end: "50% 50%",
        }
      })
    })

    const title = (
        <div className='overflow-hidden' ref={textbwRef}>
            <span className='letteresbw inline-block overflow-hidden'>
                <span className='inline-block relative'>H</span>
                <span className='inline-block relative'>o</span>
                <span className='inline-block relative'>w</span>
            </span>&nbsp;
            <span className='letteresbw inline-block overflow-hidden'>
                <span className='inline-block relative'>w</span>
                <span className='inline-block relative'>e</span>
            </span><br />
            <span className='letteresbw inline-block overflow-hidden'>
                <span className='inline-block relative'>w</span>
                <span className='inline-block relative'>o</span>
                <span className='inline-block relative'>r</span>
                <span className='inline-block relative'>k</span>
            </span>
        </div>
    )

    const subtitle = "Here’s how I can support you and bring your vision to life.";
    const strategyData = [
        {
            id: 1,
            name: 'Strategic Brand Development',
            title: "I create more than just attractive visuals. My focused approach starts with a solid strategy to make your brand stand out. I explore your industry, analyze competitors, and understand your audience to develop a unique, impactful digital experience that resonates.",
            outcome: 'Outcomes',
            outtitle: ['Unique Digital Positioning', 'Consistent Brand Personality', 'Language, Tone & Messaging']
        },
        {
            id: 2,
            name: 'Brand Identity',
            title: 'More than just visuals, I integrate design and messaging to build a cohesive digital experience. This approach creates a unique online identity that distinguishes your brand and makes a lasting impact.',
            outcome: 'Outcomes',
            outtitle: ['Responsive Logo Integration', 'Consistent Typography Styles', 'Engaging Color Palette', 'Custom Brand Graphics', 'Web Copy Alignment', 'Interactive Animations']
        },             
        {
            id: 3,
            name: 'Interactive Brand Elements',
            title: 'I go beyond building interactive brand elements—I empower you to maintain and evolve them. With structured guidelines and reusable templates, you’ll have the tools needed to confidently grow your brand online.',
            outcome: 'Outcomes',
            outtitle: ['Custom Web Templates & Components', 'Engaging Social Media & Digital Assets', 'Dynamic UI/UX Guidelines', 'Responsive Brand Visuals',]
        },             
    ];





    return (
        <>
           <div>
        <HowWeWork
        title={title}
        subtitle={subtitle}
        strategyData={strategyData}
        />
    </div>
        </>
    )
}

export default BrandingHowWeWork