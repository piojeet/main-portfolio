import React from 'react'

function RightArrowIcon({className}) {
    return (
        <>
            <svg
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                preserveAspectRatio="xMidYMin meet"
                className={className}  // Changed class to className
            >
                <path
                    d="M4.77 11.943h13.321m1.025 0L11.943 4.77m7.173 7.173-7.173 7.173"
                    stroke="currentColor"
                    strokeWidth="1"       // Changed from stroke-width to strokeWidth
                    strokeLinecap="square" // Changed from stroke-linecap to strokeLinecap
                    strokeLinejoin="square" // Changed from stroke-linejoin to strokeLinejoin
                />
            </svg>
        </>
    )
}

export default RightArrowIcon