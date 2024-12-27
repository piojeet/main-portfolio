import React from 'react'

function WebDesignIcon({className}) {
    return (
        <>
            <svg
                role="img"
                className={className}  // Changed class to className
                viewBox="0 0 48 48"
                preserveAspectRatio="xMinYMin meet"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Product Design"
            >
                <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"    // Changed from stroke-linecap to strokeLinecap
                    strokeLinejoin="round"   // Changed from stroke-linejoin to strokeLinejoin
                    strokeWidth="2"          // Changed from stroke-width to strokeWidth
                >
                    <path d="M6 18h36m-24 0v24M42 6v31.2a7.5 7.5 0 0 1-.3 3.2 3 3 0 0 1-1.3 1.3 7.5 7.5 0 0 1-3.2.3H10.8a7.5 7.5 0 0 1-3.2-.3 3 3 0 0 1-1.3-1.3 7.5 7.5 0 0 1-.3-3.2V6Z"></path>
                </g>
            </svg>
        </>
    )
}

export default WebDesignIcon