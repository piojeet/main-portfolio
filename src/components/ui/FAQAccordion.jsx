import React, { useState } from 'react'
import PropTypes from 'prop-types';

function FAQAccordion({accordionData, title, subTitle, btn}) {

    const [isOpen, setIsOpen] = useState(0);

    const handleToggle = (index) => {
        setIsOpen(isOpen === index ? null : index);
    };

    const SvgIcon = () => (
        <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M4.101 17.813c.056-.206-.067-.491-.185-.697a2.108 2.108 0 0 0-.12-.178 9.366 9.366 0 0 1-1.546-5.156C2.234 6.52 6.597 2.25 11.992 2.25c4.705 0 8.633 3.26 9.55 7.587a9.32 9.32 0 0 1 .208 1.952c0 5.269-4.195 9.606-9.59 9.606-.858 0-2.016-.216-2.647-.393a17.713 17.713 0 0 1-1.425-.474A1.458 1.458 0 0 0 7 20.545l-3.18 1.148a.751.751 0 0 1-.218.057.45.45 0 0 1-.449-.457.744.744 0 0 1 .028-.154l.92-3.326Z"></path>
        </svg>
    );

  return (
    <div className='mt-[180px]'>
    <div className='flex lg:flex-row flex-col-reverse'>
        <div className='w-full border-b border-blackColor h-fit'>
            <div className='w-[80px] h-[80px] border border-blackColor ml-auto border-b-0 lg:flex hidden items-center justify-center'>
                <div className='w-14'><SvgIcon /></div>
            </div>
            {accordionData.map((item, index) => {
                const formattedPara = item.para.split('\n').map((line, lineIndex) => (
                    <React.Fragment key={lineIndex}>
                        {line}
                        <br />
                    </React.Fragment>
                ));

                return (
                    <div key={index}>
                        <div className='flex border border-blackColor items-stretch border-b-0'>
                            <div
                                className={`flex-shrink-0 w-[80px] border-r border-blackColor flex items-center justify-center pointer-cursor select-none transition-all duration-500 hover:bg-[#EBE9E5] ${isOpen === index ? 'bg-[#EBE9E5]' : 'bg-[#f0f0f0]'}`}
                                onClick={() => handleToggle(index)}
                            >
                                <span className={`transition-all duration-500 inline-block ${isOpen === index ? '-rotate-[135deg]' : ''}`}>
                                    <img src={item.icon} alt="img" className='lg:w-8 w-6' />
                                </span>
                            </div>
                            <div className='w-full'>
                                <div
                                    className={`lg:text-[32px] md:text-[28px] text-[25px] font-medium font-TTCPro text-blackColor px-6 py-4 content-center pointer-cursor select-none`}
                                    onClick={() => handleToggle(index)}
                                >
                                    {item.title}
                                </div>
                                <div className={`transition-[max-height] duration-500 ease-linear overflow-hidden ${isOpen === index ? 'max-h-[500px]' : 'max-h-0'}`}>
                                    <div className='p-6 pt-0 lg:text-[17px] text-[15px] font-TTCPro font-medium text-blackColor'>
                                        {item.shortPara && <p className='pb-6'>{item.shortPara}</p>}
                                        <p>{formattedPara}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
        <div className='w-full lg:sticky top-[80px] h-fit'>
            <div className='w-full border border-blackColor lg:border-l-0 border-b-0 h-fit pb-6 backdrop-blur-[2px] relative -z-10 lg:border-b'>
                <div className='lg:text-[60px] sm:text-[45px] text-[10vw] uppercase font-TTCPro font-[900] text-center leading-[.9] my-6 md:block flex items-start flex-wrap justify-center text-blackColor'>
                    {title}
                </div>
                <p className='max-w-[350px] mx-auto text-[21px] font-TTCPro font-medium text-center'>
                   {subTitle}
                </p>
            </div>
            <div className='group pointer-cursor h-[80px] xl:w-[22.5vw] lg:w-[22.5vw] flex-shrink-0 border border-blackColor bg-blackColor hidden lg:flex justify-start items-center border-t-0 ml-auto'>
                <div className='magnetic-btn relative w-full h-full'>
                    <span
                        className='relative overflow-hidden w-full h-full left-0 bottom-0 group-hover:left-4 group-hover:bottom-2 group-hover:border group-hover:border-blackColor bg-bodyColor font-TTCPro lg:text-[17px] md:text-[16px] tracking-[2px] inline-block font-bold content-center'
                        style={{ position: 'relative', transition: 'left 0.3s ease, bottom 0.3s ease' }}
                    >
                        <span className='text-center w-full block uppercase font-TTCPro'>{btn}</span>
                    </span>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

FAQAccordion.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    btn: PropTypes.string.isRequired,
    accordionData: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            icon: PropTypes.string.isRequired,
            para: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default FAQAccordion