import React, { useEffect, useState } from 'react'
import Setting from '../../../assets/setting.svg'

function BrandingHowWeWork() {

    const [rotate, setRotate] = useState(0);

    useEffect(() => {
        // 45-degree increment ke saath rotation ko update karna
        const interval = setInterval(() => {
            setRotate((prevRotate) => prevRotate + 45);
        }, 1500); // Har 500ms mein rotate hota rahega

        return () => clearInterval(interval); // Component unmount hone par interval cleanup
    }, []);

    const titleOne = {
        titled: 'I create more than just attractive visuals. My focused approach starts with a solid strategy to make your brand stand out. I explore your industry, analyze competitors, and understand your audience to develop a unique, impactful digital experience that resonates.',
        outtitleb: ['Unique Digital Positioning', 'Consistent Brand Personality', 'Language, Tone & Messaging']
    };
    const titleTwo = {
        titled: 'More than just visuals, I integrate design and messaging to build a cohesive digital experience. This approach creates a unique online identity that distinguishes your brand and makes a lasting impact.',
        outtitleb: ['Responsive Logo Integration', 'Consistent Typography Styles', 'Engaging Color Palette', 'Custom Brand Graphics', 'Web Copy Alignment', 'Interactive Animations']
    };
    const titleThree = {
        titled: 'I go beyond building interactive brand elements—I empower you to maintain and evolve them. With structured guidelines and reusable templates, you’ll have the tools needed to confidently grow your brand online.',
        outtitleb: ['Custom Web Templates & Components', 'Engaging Social Media & Digital Assets', 'Dynamic UI/UX Guidelines', 'Responsive Brand Visuals', ]
    };

    const startigyData = [
        { id: 1, name: 'Strategic Brand Development', title: titleOne.titled, outcome: 'Outcomes', outtitle: titleOne.outtitleb },
        { id: 2, name: 'Brand Identity', title: titleTwo.titled, outcome: 'Outcomes', outtitle: titleTwo.outtitleb },
        { id: 3, name: 'Interactive Brand Elements', title: titleThree.titled, outcome: 'Outcomes', outtitle: titleThree.outtitleb },
    ];



    return (
        <>
            <div className='mt-[160px]'>
                <div className='flex'>
                    <div className='w-full border border-blackColor border-r-0 h-fit pb-6 sticky top-[160px]'>
                        <div className='lg:text-[60px] sm:text-[45px] text-[10vw] uppercase font-TTCPro font-[900] text-center leading-[.9] my-6 md:block flex items-start flex-wrap justify-center text-blackColor'>
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
                        </div>
                        <p className='max-w-[350px] mx-auto text-[21px] font-TTCPro font-medium text-center'>Essential Elements of My Process in Branding and Visual Identity</p>
                    </div>
                    <div className='w-full'>
                        <div className='w-[80px] h-[80px] border border-blackColor flex items-center justify-center border-b-0'>
                            <img src={Setting} alt=""
                                style={{
                                    transform: `rotate(${rotate}deg)`,
                                    transition: "transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                                }} className='w-12' />
                        </div>
                        <div>
                            {startigyData.map((data, index) => (
                                <React.Fragment key={data.id}>
                                    <div className="p-14 border border-blackColor flex gap-4">
                                    <div className="text-[18px] font-TTCPro text-blackColor font-semibold">0{index + 1}</div>
                                    <div>
                                        <div className="text-[32px] font-TTCPro text-blackColor font-medium leading-none mb-8">{data.name}</div>
                                        <p className="font-TTCPro font-medium text-blackColor">{data.title}</p>

                                        <div className="text-[18px] font-TTCPro text-gray-400 uppercase font-semibold my-6 mb-3">{data.outcome}</div>

                                        <div className="text-[20px] font-TTCPro font-black text-blackColor uppercase">
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
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default BrandingHowWeWork