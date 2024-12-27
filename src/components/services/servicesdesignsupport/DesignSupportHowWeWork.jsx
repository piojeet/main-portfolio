import React, { useRef } from 'react'
import HowWeWork from '../../ui/HowWeWork';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function DesignSupportHowWeWork() {

    const textdwRef = useRef(null);
    useGSAP(() => {
      gsap.from(".letteresdw span", {
        y: 110,
        duration: 0.3,
        stagger: 0.1,
        scrollTrigger: {
          trigger: textdwRef.current,
          start: "0% 80%",
            end: "50% 50%",
        }
      })
    })

    const title = (
        <div ref={textdwRef} className='letteresdw overflow-hidden'>
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

    const subtitle = "Here’s how I can support you and bring your vision to life.";
    const strategyData = [
        {
            id: 1,
            name: 'Ad-hoc Design Support',
            title: "Need help with a quick task or an ongoing project? I’m here to assist with one-off jobs or a series of smaller tasks. Think of me as your go-to design partner, ready to tackle your creative challenges. \n \n Simply share the scope, budget, and deadline, and I’ll ensure your needs are met without any long-term commitments or upfront payments for smaller budgets.",
            outcome: 'Outcomes',
            outtitle: ['Tailored solutions for specific tasks', 'Flexible project scoping', 'Invoicing per project basis']
        },
        {
            id: 2,
            name: 'Monthly Design Subscription',
            title: 'For ongoing design needs, I offer a reliable monthly subscription service. This setup allows us to plan tasks in advance, maintain a clear backlog, and ensure consistent progress every month. \n \n Whether it’s allocating specific hours weekly or providing rolling support for various tasks, I’ll make sure your design requirements are handled efficiently and on time.',
            outcome: 'Outcomes',
            outtitle: ['Dedicated hours every month', 'Organized monthly task backlog', 'Simple monthly invoicing']
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

export default DesignSupportHowWeWork