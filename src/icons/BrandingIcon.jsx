import React from 'react'

function BrandingIcon({className}) {
    return (
        <>
            <svg
                role="img"
                className={className} // Changed `class` to `className`
                viewBox="0 0 48 48"
                preserveAspectRatio="xMinYMin meet"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Branding"
            >
                <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round" // Changed `stroke-linecap` to `strokeLinecap`
                    strokeLinejoin="round" // Changed `stroke-linejoin` to `strokeLinejoin`
                    strokeWidth="2" // Changed `stroke-width` to `strokeWidth`
                >
                    <path d="M4 24a20 20 0 0 0 20 20 6 6 0 0 0 6-6v-1a15 15 0 0 1 0-1.8 6 6 0 0 1 5.2-5.1A15 15 0 0 1 37 30h1a6 6 0 0 0 6-6 20 20 0 0 0-40 0Z"></path>
                    <path d="M14 26a2 2 0 1 0-2-2 2 2 0 0 0 2 2Z"></path>
                    <path d="M32 18a2 2 0 1 0-2-2 2 2 0 0 0 2 2Z"></path>
                    <path d="M20 16a2 2 0 1 0-2-2 2 2 0 0 0 2 2Z"></path>
                </g>
            </svg>
        </>
    )
}

export default BrandingIcon