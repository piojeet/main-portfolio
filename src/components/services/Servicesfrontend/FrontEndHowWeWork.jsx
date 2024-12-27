import React, { useRef } from 'react'
import HowWeWork from '../../ui/HowWeWork';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function FrontEndHowWeWork() {

    const texthRef = useRef(null);
    useGSAP(() => {
      gsap.from(".letteresh span", {
        y: 110,
        duration: 0.3,
        stagger: 0.1,
        scrollTrigger: {
          trigger: texthRef.current,
          start: "0% 80%",
            end: "50% 50%",
        }
      })
    })

    const title = (
        <div ref={texthRef} className='letteresh overflow-hidden'>
            <span className='inline-block relative'>h</span>
            <span className='inline-block relative'>o</span>
            <span className='inline-block relative'>w</span>&nbsp;
            <span className='inline-block relative'>w</span>
            <span className='inline-block relative'>e</span><br />
            <span className='inline-block relative'>w</span>
            <span className='inline-block relative'>o</span>
            <span className='inline-block relative'>r</span>
            <span className='inline-block relative'>k</span>
        </div>
    );

    const subtitle = "Key elements of our frontend design and UX/UI projects";
    const strategyData = [
        {
            id: 1,
            name: 'Defining the Vision',
            title: "Whether building a new product or enhancing an existing one, the first step is always understanding the goals, purpose, and user needs to ensure a strong foundation for design.",
            outcome: 'Outcomes',
            outtitle: ['User and Journey Mapping', 'Existing Design Audit']
        },
        {
            id: 2,
            name: 'Defining Your Product Vision',
            title: 'I’ll work with you to shape how your product should look, feel, and function. From structure to UI design, I ensure a clear direction and seamless user experience.',
            outcome: 'Outcomes',
            outtitle: ['Product Map', 'User Journeys', 'Creative Direction']
        },
        {
            id: 3,
            name: 'Building the Foundation',
            title: 'Once the design vision is clear, I create the systems that support it. From design systems to component creation, I ensure everything is set up for smooth development and seamless deployment.',
            outcome: 'Outcomes',
            outtitle: ['Design System', 'Component Creation', 'Roll-out Support']
        },              
    ];

  return (
    <div>
        <HowWeWork
        title={title}
        subtitle={subtitle}
        strategyData={strategyData}
        />
    </div>
  )
}

export default FrontEndHowWeWork