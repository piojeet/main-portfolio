import React from 'react'

function FronEndIcon({className}) {
    return (
        <>
            <svg
                role="img"
                className={className} // Changed `class` to `className`
                viewBox="0 0 48 48"
                preserveAspectRatio="xMinYMin meet"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Website Design"
            >
                <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="square" // Changed `stroke-linecap` to `strokeLinecap`
                    strokeLinejoin="round" // Changed `stroke-linejoin` to `strokeLinejoin`
                    strokeWidth="2" // Changed `stroke-width` to `strokeWidth`
                >
                    <path d="M16 42h16m-8-8v8M44 6v23.2a7.5 7.5 0 0 1-.3 3.2 3 3 0 0 1-1.3 1.3 7.5 7.5 0 0 1-3.2.3H8.8a7.5 7.5 0 0 1-3.2-.3 3 3 0 0 1-1.3-1.3 7.5 7.5 0 0 1-.3-3.2V6h40Z"></path>
                </g>
            </svg>
        </>
    )
}

export default FronEndIcon