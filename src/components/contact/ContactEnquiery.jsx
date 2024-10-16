/* eslint-disable react/no-unescaped-entities */
import React, { useRef, useState } from 'react'

function ContactEnquiery() {
    const [placeholders, setPlaceholders] = useState({
        name: true,
        cname: true,
        email: true,
        timeline: true,
        budget: true,
        message: true,
    });

    const handleFocus = (id) => {
        setPlaceholders((prev) => ({ ...prev, [id]: false }));
    };

    const handleBlur = (id) => {
        setPlaceholders((prev) => ({ ...prev, [id]: true }));
    };

    const CheckIcon = () => (
        <svg
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMin meet"
            className="--icon --icon-action-check --input-icon md:w-10 w-7"
        >
            <path
                d="m3.686 12.464 5.233 5.233L20.312 6.304"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
            />
        </svg>
    );

    const checkboxOptions = [
        { id: 'websiteDesign', label: 'Website Design' },
        { id: 'bdevelop', label: 'Website Development' },
        { id: 'frontoptmz', label: 'Frontend Optimization' },
        { id: 'respodesign', label: 'Responsive Design' },
        { id: 'uiuximplementation', label: 'UI/UX Implementation' },
        { id: 'something', label: 'Something else...' }
    ];

    const inputFields = [
        { id: 'name', label: "What's your name?", placeholder: 'Your name', type: 'text' },
        { id: 'cname', label: "What's your company name?", placeholder: 'Your company', type: 'text' },
        { id: 'email', label: "What's your email address?", placeholder: 'Your email address', type: 'email' },
        { id: 'timeline', label: "What's your timeline?", placeholder: 'Your ideal launch date', type: 'text' },
        { id: 'budget', label: "What's your estimated budget?", placeholder: '200$ - 300$', type: 'text' },
        { id: 'message', label: "Your message", placeholder: 'Enter your message', type: 'textarea' } // Changed type to 'textarea'
    ];

    const [formValue, setFormValue] = useState({
        name: '',
        email: '',
        timeline: '',
        budget: '',
        message: '',
    });
    
    const [errorState, setErrorState] = useState({
        name: false,
        email: false,
        timeline: false,
        budget: false,
        message: false,
    });
    
    const [isSubmitted, setIsSubmitted] = useState(false); // Tracks if form was submitted
    const maxLength = 1000;
    
    // Create refs for each input field
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const timelineRef = useRef(null);
    const budgetRef = useRef(null);
    const messageRef = useRef(null);
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
    
        // Update form value
        setFormValue({ ...formValue, [name]: value });
    
        // Clear the error state for the field being changed
        if (value.trim() !== '') {
            setErrorState((prev) => ({
                ...prev,
                [name]: false, // Clear error for that specific field
            }));
        }
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
    
        let hasErrors = false;
    
        // Check for each required field if it's empty
        const newErrorState = {
            name: formValue.name.trim() === '',
            email: formValue.email.trim() === '',
            timeline: formValue.timeline.trim() === '',
            budget: formValue.budget.trim() === '',
            message: formValue.message.trim() === '',
        };
    
        // Set errors and stop form submission if there are errors
        setErrorState(newErrorState);
    
        // If any error is true, focus on the first empty field
        for (let key in newErrorState) {
            if (newErrorState[key]) {
                hasErrors = true;
                // Focus the first empty field
                if (key === 'name') nameRef.current.focus();
                if (key === 'email') emailRef.current.focus();
                if (key === 'timeline') timelineRef.current.focus();
                if (key === 'budget') budgetRef.current.focus();
                if (key === 'message') messageRef.current.focus();
                break;
            }
        }
    
        if (hasErrors) {
            setIsSubmitted(true); // Mark that we tried to submit the form with errors
            return; // Stop submission
        }
    
        // Proceed with form submission logic here
        console.log('Form submitted:', formValue);
    
        // Reset the form after successful submission
        setFormValue({ name: '', email: '', timeline: '', budget: '', message: '' });
        setErrorState({ name: false, email: false, timeline: false, budget: false, message: false });
        setIsSubmitted(false);
    };
    
    // Show the error message only if the form was submitted and the field is empty
    const isFieldEmpty = (fieldName) => {
        return errorState[fieldName];
    };
    
    


    return (
        <>
            <div className='w-full relative'>
                <form onSubmit={handleSubmit}>
                    <div className='w-full'>
                        <div className='border border-blackColor lg:p-16 lg:px-10 p-5 border-t-0'>
                            <p className='text-[17px] font-TTCPro text-blackColor font-semibold uppercase tracking-widest mb-4'>What are you looking for?</p>
                            <div className='flex items-start justify-between md:flex-row flex-col gap-y-4 md:gap-y-0'>
                                {[checkboxOptions.slice(0, 3), checkboxOptions.slice(3)].map((group, groupIndex) => (
                                    <div key={groupIndex} className='w-full flex flex-col gap-4'>
                                        {group.map((option) => (
                                            <label key={option.id} htmlFor={option.id} className='cursor-pointer inline-flex items-center'>
                                                <input type="checkbox" id={option.id} className='pree-check appearance-none' />
                                                <span className='group border border-blackColor inline-block lg:w-14 lg:h-14 md:w-[50px] md:h-[50px] h-[40px] w-[40px] relative overflow-hidden hover:bg-gray-200 flex-shrink-0'>
                                                    <span className='absolute w-full h-full bg-blackColor -bottom-16 group-hover:-bottom-12 transition-all duration-200 pree-bg'></span>
                                                    <span className='absolute w-full h-full text-bodyColor flex items-center justify-center opacity-0 transition-all duration-200 pree-icon'>
                                                        <CheckIcon />
                                                    </span>
                                                </span>
                                                <span className='capitalize inline-block ml-6 font-TTCPro text-[17px] font-medium text-blackColor'>{option.label}</span>
                                            </label>

                                        ))}

                                    </div>
                                ))}
                            </div>

                            <div>
                                <div className='lg:my-10 my-7 flex items-start justify-between lg:gap-x-10 flex-col lg:gap-y-10 gap-y-6'>
                                    {inputFields.slice(0, 5).map((field) => (
                                        <div key={field.id} className='relative w-full'>
                                            <label htmlFor={field.id} className='text-[17px] font-TTCPro text-blackColor font-semibold uppercase tracking-widest w-full cursor-pointer'>
                                                <span className='mb-3 inline-block w-full'>{field.label} {field.id === 'name' && <span>*</span>}</span>
                                                <div className='relative group overflow-hidden'>
                                                    <input
                                                        type={field.type || (field.id === 'email' ? 'email' : 'text')}
                                                        id={field.id}
                                                        name={field.id}
                                                        required={field.required}
                                                        placeholder={placeholders[field.id] ? field.placeholder : ''}
                                                        className={`w-full h-[70px] px-6 border border-blackColor outline-none focus:border-green-400 bg-bodyColor text-[21px] font-TTCPro text-blackColor font-medium focus:bg-white transition-hover duration-200 hover:bg-gray-200 ${isFieldEmpty(field.id) ? '!border-[#FF2E79] !bg-[#FFE8EC] hover:!bg-[#FFE8EC] focus:!bg-[#FFE8EC] focus:!border-[#FF2E79]' : ''}`}
                                                        onFocus={() => handleFocus(field.id)}
                                                        onBlur={() => handleBlur(field.id)}
                                                        onChange={handleInputChange}
                                                        value={formValue[field.id]}
                                                        ref={field.id === 'name' ? nameRef : field.id === 'email' ? emailRef : field.id === 'timeline' ? timelineRef : field.id === 'budget' ? budgetRef : null}
                                                    />
                                                    <span
                                                        className={`absolute w-full h-full bg-blackColor bottom-[-70px] left-0 transition-all duration-200 ${placeholders[field.id] ? 'group-hover:bottom-[-63px]' : 'bottom-[-70px]'} ${isFieldEmpty(field.id) ? '!bg-[#FF2E79]' : ''}`}
                                                    ></span>
                                                </div>
                                            </label>
                                            {field.id === 'timeline' && <p>Knowing your deadline helps us to organise a realistic timeline</p>}
                                            {field.id === 'budget' && <p>Knowing your budget helps us to organise a realistic timeline</p>}
                                            {/* Field-specific error messages */}
                                            {field.id === 'name' && isFieldEmpty('name') && <p className='text-[#FF2E79] text-[15px] font-normal normal-case tracking-normal absolute bottom-[-25px]'>This field is required</p>}
                                            {field.id === 'email' && isFieldEmpty('email') && <p className='text-[#FF2E79] text-[15px] font-normal normal-case tracking-normal absolute bottom-[-25px]'>This field is required</p>}
                                            {field.id === 'timeline' && isFieldEmpty('timeline') && <p className='text-[#FF2E79] text-[15px] font-normal normal-case tracking-normal absolute bottom-[-25px]'>This field is required</p>}
                                            {field.id === 'budget' && isFieldEmpty('budget') && <p className='text-[#FF2E79] text-[15px] font-normal normal-case tracking-normal absolute bottom-[-25px]'>This field is required</p>}
                                        </div>
                                    ))}
                                </div>

                                

                                <div className='lg:my-10 my-7'>
                                    <label htmlFor="message" className='text-[17px] font-TTCPro text-blackColor font-semibold uppercase tracking-widest w-full cursor-pointer'>
                                        <span className={`mb-3 inline-block w-full transition-all`}>
                                            Tell us about your project <span>*</span>
                                        </span>
                                        <div className='relative group overflow-hidden flex'>
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={formValue.message}
                                                maxLength={maxLength}
                                                onChange={handleInputChange}
                                                rows={7}
                                                placeholder={placeholders.message ? 'Your message' : ''}
                                                className={`w-full p-6 border border-blackColor outline-none focus:border-green-400 bg-bodyColor text-[21px] font-TTCPro text-blackColor font-medium focus:bg-white transition-hover duration-200 hover:bg-gray-200 group ${isFieldEmpty('message') ? '!border-[#FF2E79] !bg-[#FFE8EC] hover:!bg-[#FFE8EC] focus:!bg-[#FFE8EC] focus:!border-[#FF2E79]' : ''}`}
                                                onFocus={() => handleFocus('message')}
                                                onBlur={() => handleBlur('message')}
                                                ref={messageRef}
                                            />
                                            <span className={`absolute bottom-[1px] right-[1px] w-7 h-7 bg-bodyColor transition-hover duration-200 pointer-events-none ${!placeholders.message ? 'bg-white' : 'group-hover:bg-gray-200'} ${isFieldEmpty('message') ? '!bg-[#FFE8EC] group-hover:!bg-[#FFE8EC]' : ' bg-bodyColor'}`}>
                                                <svg
                                                    role="img"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    preserveAspectRatio="xMidYMin meet"
                                                    className="--icon --icon-action-resize ui-input_textarea-icon --input-icon w-6"
                                                >
                                                    <g
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="square"
                                                        strokeLinejoin="square"
                                                        fill="none"
                                                    >
                                                        <path d="M19 5 4.99 19.01m14.196-6.196-6.372 6.372" />
                                                    </g>
                                                </svg>
                                            </span>
                                            <span
                                                className={`absolute w-full h-full bottom-[-100%] left-0 transition-all duration-200 pointer-events-none ${placeholders.message ? 'group-hover:bottom-[-97.5%]' : ''} ${isFieldEmpty('message') ? 'bg-[#FF2E79]' : ' bg-blackColor'}`}
                                            ></span>
                                        </div>
                                    </label>
                                    {isFieldEmpty('message') && <p style={{ color: 'red' }}>This field is required</p>}
                                    <p className='w-fit ml-auto'>{formValue.message.length}/{maxLength}</p>
                                </div>

                                <div>
                                    <label htmlFor="agree" className='cursor-pointer inline-flex items-center w-full'>
                                        <input type="checkbox" id='agree' className='pree-check appearance-none' />
                                        <span className='group border border-blackColor inline-block lg:w-14 lg:h-14 md:w-[50px] md:h-[50px] h-[40px] w-[40px] relative overflow-hidden hover:bg-gray-200 flex-shrink-0'>
                                            <span className='absolute w-full h-full bg-blackColor -bottom-16 group-hover:-bottom-12 transition-all duration-200 pree-bg'></span>
                                            <span className='absolute w-full h-full text-bodyColor flex items-center justify-center opacity-0 transition-all duration-200 pree-icon'>
                                                <CheckIcon />
                                            </span>
                                        </span>
                                        <span className='capitalize inline-block ml-6 font-TTCPro text-[21px] font-medium text-blackColor'>I agree with the processing of my personal data</span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <button type='submit' className='group cursor-pointer h-[80px] lg:w-[22.5vw] w-full flex-shrink-0 border border-blackColor bg-blackColor border-t-0 flex justify-start items-center'>
                            <div className='magnetic-btn relative w-full h-full'>
                                <span
                                    className='relative overflow-hidden w-full h-full left-0 bottom-0 group-hover:left-4 group-hover:bottom-2 group-hover:border group-hover:border-blackColor bg-bodyColor  font-TTCPro uppercase text-[20px] tracking-[2px] inline-flex font-semibold content-center items-center lg:justify-around justify-between px-8'
                                    style={{ position: 'relative', transition: 'left 0.3s ease, bottom 0.3s ease' }}
                                >
                                    <span className='uppercase text-[15px] font-TTCPro font-bold'>
                                        suubmit
                                    </span>
                                    <span className='uppercase text-[15px] font-TTCPro font-bold'>
                                        <svg width="30" height="30" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M22 2 11 13" />
                                            <path d="m22 2-7 20-4-9-9-4 20-7z" />
                                        </svg>
                                    </span>
                                </span>
                            </div>
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ContactEnquiery