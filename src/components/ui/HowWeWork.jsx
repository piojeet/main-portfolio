import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Setting from '../../assets/setting.svg';
import '../../../src/index.css';

function HowWeWork({ title, subtitle, strategyData }) {
    const [rotate, setRotate] = useState(0);

    useEffect(() => {
        // 45-degree increment ke saath rotation ko update karna
        const interval = setInterval(() => {
            setRotate((prevRotate) => prevRotate + 45);
        }, 1500); // Har 500ms mein rotate hota rahega

        return () => clearInterval(interval); // Component unmount hone par interval cleanup
    }, []);

    return (
        <div className="mt-[160px]">
            <div className='w-[80px] h-[80px] border border-blackColor flex items-center justify-center border-b-0 lg:hidden ml-auto'>
                <img src={Setting} alt=""
                    style={{
                        transform: `rotate(${rotate}deg)`,
                        transition: "transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                    }} className='w-12' />
            </div>
            <div className="flex lg:flex-row flex-col">
                <div className="w-full border border-blackColor lg:border-r-0 h-fit pb-6 lg:sticky top-[160px]">
                    <div className="lg:text-[60px] sm:text-[45px] text-[10vw] uppercase font-TTCPro font-[900] text-center leading-[.9] my-6 md:block flex items-start flex-wrap justify-center text-blackColor">
                        {title}
                    </div>
                    <p className="max-w-[350px] mx-auto lg:text-[21px] md:text-[19px] font-TTCPro font-medium text-center">
                        {subtitle}
                    </p>
                </div>
                <div className="w-full">
                    <div className="w-[80px] h-[80px] border border-blackColor lg:flex items-center justify-center border-b-0 hidden">
                        <img src={Setting} alt=""
                            style={{
                                transform: `rotate(${rotate}deg)`,
                                transition: "transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                            }} className='w-12' />
                    </div>
                    <div>
                        {strategyData && strategyData.length > 0 ? (
                            strategyData.map((data, index) => (
                                <React.Fragment key={data.id}>
                                    <div className="p-14 border border-blackColor flex gap-4 border-t-0 lg:border-t">
                                        <div className="lg:text-[18px] font-TTCPro text-blackColor font-semibold">
                                            0{index + 1}
                                        </div>
                                        <div>
                                            <div className="lg:text-[32px] md:text-[29px] text-[25px] font-TTCPro text-blackColor font-medium leading-none mb-8">
                                                {data.name.split('\n').map((line, idx) => (
                                                    <React.Fragment key={idx}>
                                                        {line}
                                                        <br />
                                                    </React.Fragment>
                                                ))}
                                            </div>
                                            <p className="font-TTCPro font-medium text-blackColor">
                                                {data.title.split('\n').map((line, idx) => (
                                                    <React.Fragment key={idx}>
                                                        {line}
                                                        <br />
                                                    </React.Fragment>
                                                ))}
                                            </p>
                                            <div className="lg:text-[18px] font-TTCPro text-gray-400 uppercase font-semibold my-6 mb-3">
                                                {data.outcome}
                                            </div>
                                            <div className="lg:text-[20px] md:text-[19px] text-[18px] font-TTCPro font-black text-blackColor uppercase">
                                                {data.outtitle.map((item, idx) => (
                                                    <React.Fragment key={idx}>
                                                        {item}
                                                        <br />
                                                    </React.Fragment>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </React.Fragment>
                            ))
                        ) : (
                            <p>No strategy data available</p>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
}

HowWeWork.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    strategyData: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            outcome: PropTypes.string.isRequired,
            outtitle: PropTypes.arrayOf(PropTypes.string).isRequired,
        })
    ).isRequired,
};

export default HowWeWork;
