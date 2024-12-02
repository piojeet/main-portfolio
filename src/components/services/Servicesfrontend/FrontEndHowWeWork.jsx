import React from 'react'
import HowWeWork from '../../ui/HowWeWork';

function FrontEndHowWeWork() {
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