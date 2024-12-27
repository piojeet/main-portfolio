import React, { useRef } from 'react'
import FAQAccordion from '../../ui/FAQAccordion';
import Plus from '../../../assets/plus.svg';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function FrontEndFAQ() {

    const textfeRef = useRef(null);
    useGSAP(() => {
      gsap.from(".letteresef span", {
        y: 110,
        duration: 0.3,
        stagger: 0.05,
        scrollTrigger: {
          trigger: textfeRef.current,
          start: "0% 80%",
            end: "50% 50%",
        }
      })
    })


    const title = (
        <div ref={textfeRef}>
            <span className='letteresef inline-block overflow-hidden'>
                <span className='inline-block relative'>C</span>
                <span className='inline-block relative'>O</span>
                <span className='inline-block relative'>M</span>
                <span className='inline-block relative'>M</span>
                <span className='inline-block relative'>O</span>
                <span className='inline-block relative'>N</span>
            </span>
            
            <br />
            <span className='letteresef inline-block overflow-hidden'>
                <span className='inline-block relative'>Q</span>
                <span className='inline-block relative'>U</span>
                <span className='inline-block relative'>E</span>
                <span className='inline-block relative'>S</span>
                <span className='inline-block relative'>T</span>
                <span className='inline-block relative'>i</span>
                <span className='inline-block relative'>O</span>
                <span className='inline-block relative'>N</span>
                <span className='inline-block relative'>E</span>
                <span className='inline-block relative'>s</span>
            </span>
        </div>
    );
    const subTitle ="We're Always Happy to talk about our process in more detail so feel free to reach out";

    const btn ="get in touch";

    const accordionData = [
        {
            id: 'accordion',
            title: 'Can you design a product from scratch?',
            icon: Plus,
            para: "Product design focuses on crafting visually appealing and functional solutions that align with user needs and business goals. It combines creativity and usability to deliver seamless digital experiences.",
        },
        {
            id: 'accordion',
            title: 'How do you ensure a user-friendly design?',
            icon: Plus,
            para: "I prioritize usability by designing intuitive interfaces that are easy to navigate. Through user research, wireframing, and testing, I ensure the design not only looks good but also provides a seamless experience across all devices.",
        },
        {
            id: 'accordion',
            title: 'Can you customize the design to match my brand?',
            icon: Plus,
            para: "Absolutely! I tailor every design to reflect your brand’s identity, ensuring consistency in colors, typography, and overall aesthetics. Your vision guides the creative process to make a unique and impactful design.",
        },
        {
            id: 'accordion',
            title: 'Will the design be mobile-friendly?',
            icon: Plus,
            para: "Yes, all my designs are responsive and optimized for mobile devices. I ensure the layout, navigation, and interactions adapt seamlessly across screens for a consistent user experience.",
        },
        {
            id: 'accordion',
            title: 'Do you provide prototypes before development?',
            icon: Plus,
            para: "Yes, I create interactive prototypes that give you a clear idea of how the final design will look and function. This helps in visualizing the project and making any necessary adjustments before development.",
        }
    ];

    return (
        <div>
            <FAQAccordion
                accordionData={accordionData}
                title={title}
                subTitle={subTitle}
                btn={btn}
            />
        </div>
    )
}

export default FrontEndFAQ