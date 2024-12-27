import React, { useRef } from 'react'
import Plus from '../../../assets/plus.svg';
import FAQAccordion from '../../ui/FAQAccordion';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function WebDesignFAQ() {

    const textwqRef = useRef(null);
    useGSAP(() => {
      gsap.from(".lettereswq span", {
        y: 110,
        duration: 0.3,
        stagger: 0.1,
        scrollTrigger: {
          trigger: textwqRef.current,
          start: "0% 80%",
            end: "50% 50%",
        }
      })
    })

    const title = (
        <div className='' ref={textwqRef}>
            <span className='inline-block overflow-hidden lettereswq'>
                <span className='inline-block relative'>C</span>
                <span className='inline-block relative'>O</span>
                <span className='inline-block relative'>M</span>
                <span className='inline-block relative'>M</span>
                <span className='inline-block relative'>O</span>
                <span className='inline-block relative'>N</span>
            </span>
            &nbsp;
            <br />
            <span className='inline-block overflow-hidden lettereswq'>
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
            title: 'Will I get chances to provide feedback?',
            icon: Plus,
            para: "Yes, we believe in an iterative approach and value your feedback throughout the design and development process. You will have multiple opportunities to review progress and share your thoughts to ensure the final product aligns with your vision.",
        },
        {
            id: 'accordion',
            title: 'How will you deliver my website?',
            icon: Plus,
            para: "Once your website is complete, we will deliver it through a secure hosting platform. You’ll receive all necessary login credentials, and we will ensure the site is fully functional, tested across all devices, and ready for launch. We also offer post-launch support for any required updates or adjustments.",
        },
        {
            id: 'accordion',
            title: 'Can you build my website?',
            icon: Plus,
            para: "Absolutely! We specialize in designing and developing custom websites tailored to your unique needs. Whether it’s a simple portfolio or a complex e-commerce platform, we have the skills and experience to bring your vision to life.",
        },
        {
            id: 'accordion',
            title: 'Will you work with my development team?',
            icon: Plus,
            para: "Yes, we are happy to collaborate with your development team. Whether you need additional design support, front-end development, or full project collaboration, we can seamlessly integrate with your team to ensure smooth execution and alignment with your goals.",
        },
        {
            id: 'accordion',
            title: 'How long does a project take?',
            icon: Plus,
            para: "'The timeline for a project can vary based on its complexity, features, and your specific requirements. A basic website might take a few weeks, while more complex projects involving custom designs, e-commerce functionality, or integrations can take a couple of months. \n \n We always work closely with you to establish a clear timeline and ensure the project stays on track throughout its stages.",
        },
        {
            id: 'accordion',
            title: "What if we need deliverables you don’t have listed?",
            icon: Plus,
            para: "If you require additional deliverables not mentioned in our list, we’re flexible and can discuss your needs. We can tailor our services to provide any extra assets or features you need, ensuring that your project meets all of your expectations.",
        },
        {
            id: 'accordion',
            title: "How will we communicate during the project?",
            icon: Plus,
            para: "We believe in clear and open communication throughout the project. We will schedule regular check-ins, and you can reach out via email, project management tools, or scheduled calls. We ensure timely responses to keep you updated on progress and address any questions.",
        },
        {
            id: 'accordion',
            title: "Who will we be working with?",
            icon: Plus,
            para: "You will be working directly with me, a dedicated front-end developer. I will handle all aspects of the project, from design to development, ensuring that your vision is brought to life with attention to detail and quality.",
        },
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

export default WebDesignFAQ