import React from 'react'
import HowWeWork from '../../ui/HowWeWork';

function DesignSupportHowWeWork() {
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