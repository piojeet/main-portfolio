import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../Nav'
import Footer from '../Footer'
import { ArrowLeft } from 'lucide-react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

function Privacy() {

       useGSAP(()=> {
            gsap.from(".letter span", {
              y: 100,
              duration: 0.5,
              stagger: 0.1,
            })
          })

    return (
        <div>
            <Nav />
            <section className="border border-blackColor mb-40 bg-white bg-opacity-70">
                <div className=''>
                    <div className='border-b border-blackColor py-8 mb-16 px-6'>
                        <div className='lg:text-[95px] sm:text-[63px] text-[10vw] uppercase font-TTCPro font-[900] text-center leading-[.9] my-6 md:block flex items-start flex-wrap justify-center'>

                            &nbsp;
                            <span className='letter overflow-hidden inline-block'>
                                <span className='inline-block'>p</span>
                                <span className='inline-block'>r</span>
                                <span className='inline-block'>i</span>
                                <span className='inline-block'>v</span>
                                <span className='inline-block'>a</span>
                                <span className='inline-block'>c</span>
                                <span className='inline-block'>y</span>
                            </span>

                        </div>
                    </div>

                    <div className='font-TTCPro max-w-5xl mx-auto px-6'>
                        <h2 className='md:text-5xl text-3xl font-bold mb-4'>Welcome to the Priyajeet website!</h2>
                        <p className="text-lg mb-4 font-TTCPro">
                            We are committed to protecting your privacy and safeguarding your personal data. This Privacy Policy explains how we collect, use, and protect your information when you visit our website.
                        </p>

                        <blockquote className="italic border-l-4 pl-4 border-gray-400 text-gray-600 mb-6">
                            A privacy policy is like a diet. You know you should follow it, but sometimes you just can't resist that extra cookie.
                            <br />— Max Securitas
                        </blockquote>

                        <p className="mb-8">
                            Fortunately, our website is cookie-free and GDPR-compliant. So there’s no temptation here—just clean, minimal data practices.
                        </p>

                        <h2 className="text-2xl font-semibold mt-10 mb-2">Data Collection and Usage</h2>
                        <p className="mb-4">
                            We may collect non-personal information like your IP address, browser type, and device type via Fathom Analytics to improve user experience. We do <strong>not collect personal data</strong> such as name or email.
                        </p>

                        <h2 className="text-2xl font-semibold mt-8 mb-2">Third-Party Links</h2>
                        <p className="mb-4">
                            Our site may link to third-party websites (e.g., social media). We aren’t responsible for their content or privacy practices. Always review their policies separately.
                        </p>

                        <h2 className="text-2xl font-semibold mt-8 mb-2">Information Security</h2>
                        <p className="mb-4">
                            We apply basic safeguards to ensure your information is secure. However, no method of transmission is 100% secure.
                        </p>

                        <h2 className="text-2xl font-semibold mt-8 mb-2">Policy Updates</h2>
                        <p className="mb-4">
                            This policy may be updated occasionally. Please check back to stay informed.
                        </p>

                        <h2 className="text-2xl font-semibold mt-8 mb-2">Your Rights</h2>
                        <p className="mb-4">
                            You have the right to access or delete any information we’ve collected. For any privacy concerns, contact us via our{' '}
                            <Link to="/contact" className="border-dotted border-b border-blackColor font-TTCPro pointer-cursor">contact page</Link>.
                        </p>

                        <h2 className="text-2xl font-semibold mt-8 mb-2">Consent</h2>
                        <p className="mb-4">
                            By using our website, you consent to our privacy practices as described above.
                        </p>

                        <h2 className="text-2xl font-semibold mt-8 mb-2 font-TTCPro">Conclusion</h2>
                        <p className="mb-6 font-TTCPro">
                            We respect your privacy and thank you for trusting <strong>priyajeet</strong>. Questions? Visit our{' '}
                            <Link to="/contact" className="border-dotted border-b border-blackColor font-TTCPro pointer-cursor">contact page</Link>.
                        </p>
                    </div>

                    <div className='py-16'>
                        <div className='group pointer-cursor h-[80px] w-fit flex-shrink-0 border border-blackColor bg-blackColor flex justify-start items-center mx-auto'>
                            {/* Magnetic effect on wrapper div */}
                            <div className='magnetic-btn relative w-full h-full'>
                                {/* Hover transition on inner span */}
                                <span
                                    className='relative overflow-hidden px-8 w-full h-full left-0 bottom-0 group-hover:left-4 group-hover:bottom-2 group-hover:border group-hover:border-blackColor bg-bodyColor  font-TTCPro uppercase text-[20px] tracking-[2px] inline-flex font-semibold content-center items-center justify-around'
                                    style={{ position: 'relative', transition: 'left 0.3s ease, bottom 0.3s ease' }}
                                >
                                    <ArrowLeft className='mr-2' />
                                    <span className='uppercase text-[15px] font-TTCPro font-bold'>
                                        go back
                                    </span>

                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Privacy