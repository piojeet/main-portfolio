import React from 'react'
import FAQAccordion from '../../ui/FAQAccordion';
import Plus from '../../../assets/plus.svg';

function DesignSupportFAQ() {
    const title = (
        <>
            <span>
                <span>C</span>
                <span>O</span>
                <span>M</span>
                <span>M</span>
                <span>O</span>
                <span>N</span>
            </span>
            &nbsp;
            <br />
            <span>
                <span>Q</span>
                <span>U</span>
                <span>E</span>
                <span>S</span>
                <span>T</span>
                <span>i</span>
                <span>O</span>
                <span>N</span>
                <span>E</span>
                <span>s</span>
            </span>
        </>
    );
    const subTitle ="We're Always Happy to talk about our process in more detail so feel free to reach out";

    const btn ="get in touch";

    const accordionData = [
        {
            id: 'accordion',
            title: 'What kind of things can you help support on?',
            icon: Plus,
            para: "As a frontend developer, I can assist with a wide range of design and development tasks, including creating responsive and visually appealing user interfaces, implementing interactive features, optimizing website performance, and ensuring cross-browser compatibility. Whether you need help with prototyping, redesigning existing pages, or building a new project from scratch, I’m here to provide support tailored to your specific needs.",
        },
        {
            id: 'accordion',
            title: ' Can you help me work out how to get everything done?',
            icon: Plus,
            para: "Absolutely! I can help you plan and prioritize your tasks to ensure everything is completed efficiently. From breaking down complex projects into manageable steps to providing guidance on timelines and workflows, I’m here to support you in achieving your goals. Let’s collaborate to turn your ideas into reality, one step at a time.",
        },
        {
            id: 'accordion',
            title: 'What if I run out of work for you to do?',
            icon: Plus,
            para: "No problem at all! I offer flexible arrangements, so if there’s no work for a while, you’re not locked into any commitments. You can reach out whenever new tasks come up, and I’ll be ready to assist. It’s all about adapting to your needs at your pace.",
        },
        {
            id: 'accordion',
            title: 'What happens at the end of our engagement?',
            icon: Plus,
            para: "At the end of our engagement, all completed work, design assets, and relevant files will be handed over to you. I’ll ensure you have everything needed to continue seamlessly. If future support or updates are required, I’m just a message away and happy to assist whenever needed.",
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

export default DesignSupportFAQ