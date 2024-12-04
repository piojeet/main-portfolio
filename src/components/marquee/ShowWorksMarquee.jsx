import React from 'react'
import Marquee from 'react-fast-marquee'
import Work1 from '../../assets/marquee/1.png'
import Work2 from '../../assets/marquee/2.png'
import Work3 from '../../assets/marquee/3.png'
import Work4 from '../../assets/marquee/4.png'
import Work5 from '../../assets/marquee/5.png'
import Work6 from '../../assets/marquee/6.png'
import Work7 from '../../assets/marquee/7.png'
import Work8 from '../../assets/marquee/8.png'
import Work9 from '../../assets/marquee/9.png'
import Work10 from '../../assets/marquee/10.png'


function ShowWorksMarquee() {


    const imageData = [
        { id: 1, name: "IMG", img: Work1 },
        { id: 2, name: "IMG", img: Work2 },
        { id: 3, name: "IMG", img: Work3 },
        { id: 4, name: "IMG", img: Work4 },
        { id: 5, name: "IMG", img: Work5 },
        { id: 6, name: "IMG", img: Work6 },
        { id: 7, name: "IMG", img: Work7 },
        { id: 8, name: "IMG", img: Work8 },
        { id: 9, name: "IMG", img: Work9 },
        { id: 10, name: "IMG", img: Work10 },
    ]

    // Function to shuffle the image data array
    const shuffleArray = (arr) => {
        return arr.sort(() => Math.random() - 0.5);
    };

    const shuffledImageData = shuffleArray([...imageData]);

    return (
        <div className='lg:mb-[160px] mb-[80px] flex items-center justify-center border border-blackColor lg:py-[50px] py-4'>
            <div className='w-[95vw] space-y-4 mx-auto'>
                <div>
                    <Marquee autoFill={true} speed={60} direction='right'>
                        {shuffledImageData.map((images, i) => (
                            <div key={i.id} className='border border-blackColor lg:w-[25vw] w-[12rem] mx-2'>
                                <img src={images.img} alt={images.name} className='w-full object-cover' />
                            </div>
                        ))}
                    </Marquee>
                </div>
                <div>
                    <Marquee autoFill={true} speed={60}>
                        {shuffledImageData.map((images, i) => (
                            <div key={i} className='border border-blackColor lg:w-[25vw] w-[12rem] mx-2'>
                                <img src={images.img} alt={images.name} className='w-full object-cover' />
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
    )
}

export default ShowWorksMarquee