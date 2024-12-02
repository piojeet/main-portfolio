import React from 'react'
import HowWeWork from '../../ui/HowWeWork';

function WebDesignHowWeWork() {

    const title = (
        <>
            <span>h</span>
            <span>o</span>
            <span>w</span>&nbsp;
            <span>w</span>
            <span>e</span><br />
            <span>w</span>
            <span>o</span>
            <span>r</span>
            <span>k</span>
        </>
    );

    const subtitle = "Branding Process for Lasting Impact";
    const strategyData = [
        {
            id: 1,
            name: 'UI/UX Planning',
            title: "We focus on crafting intuitive and visually appealing user interfaces that align with your brand's goals. Our process involves detailed UX planning to ensure seamless navigation, responsive design, and an engaging user experience across all devices.",
            outcome: 'Outcomes',
            outtitle: ['Wireframe Creation', 'UI/UX Strategy Alignment', 'User Flow Optimization']
        },
        {
            id: 2,
            name: 'Design & Development',
            title: 'In this phase, we blend creative design with robust development to bring your website to life. We create responsive, visually appealing interfaces while ensuring that the functionality and performance meet your business needs. Our approach focuses on clean code, seamless integration, and user-centric design to deliver a fully functional website.',
            outcome: 'Outcomes',
            outtitle: ['Responsive Web Designs', 'Custom Websites', 'Optimized Website Performance']
        },
        {
            id: 3,
            name: 'Definition',
            title: 'In this phase, we finalize the blueprint of the website, focusing on aligning the structure with the overall vision. We dive deep into the specifics, ensuring that both design and functionality are integrated smoothly, laying the groundwork for the development process',
            outcome: 'Outcomes',
            outtitle: ['Page Designs', 'Component Design', 'Additional Content']
        },
        {
            id: 4,
            name: 'Growth & Maintenance',
            title: 'This phase focuses on scaling and maintaining the website to ensure long-term success. We implement strategies for growth, monitor performance, and make necessary updates, ensuring that the site remains functional, secure, and aligned with your evolving goals.',
            outcome: 'Outcomes',
            outtitle: ['Performance Monitoring', 'Regular Updates', 'Scalability Enhancements']
        },
        {
            id: 5,
            name: 'Documentation',
            title: 'In this phase, we create comprehensive documentation for all elements of the website and design system. This ensures that you and any future team members or third parties can easily understand and continue working with the project, maintaining consistency and quality.',
            outcome: 'Outcomes',
            outtitle: ['Design Documentation', 'Component Library', 'Asset Export', 'Usage Guidelines']
        }                
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

export default WebDesignHowWeWork