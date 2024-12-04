import React from 'react'
import HowWeWork from '../../ui/HowWeWork';

function BrandingHowWeWork() {

    const title = (
        <>
            <span>
                <span>H</span>
                <span>o</span>
                <span>w</span>
            </span>&nbsp;
            <span>
                <span>w</span>
                <span>e</span>
            </span><br />
            <span>
                <span>w</span>
                <span>o</span>
                <span>r</span>
                <span>k</span>
            </span>
        </>
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