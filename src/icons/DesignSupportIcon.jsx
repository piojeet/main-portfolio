import React from 'react'

function DesignSupportIcon({className}) {
    return (
        <>
            <svg
                role="img"
                className={className} // Changed `class` to `className`
                viewBox="0 0 48 48"
                preserveAspectRatio="xMinYMin meet"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Design Support"
            >
                <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round" // Changed `stroke-linecap` to `strokeLinecap`
                    strokeLinejoin="round" // Changed `stroke-linejoin` to `strokeLinejoin`
                    strokeWidth="2" // Changed `stroke-width` to `strokeWidth`
                >
                    <path d="m12.4 13.3 8.3 8.4m-8.3-8.4H7L5 7.8l2-1.9 5.5 1.9Zm24.5-6-4.8 4.9a4.6 4.6 0 0 0-1.3 1.5 1.8 1.8 0 0 0 0 1.1 4.6 4.6 0 0 0 1.3 1.6l.4.4A4.6 4.6 0 0 0 34 18a1.8 1.8 0 0 0 1.2 0 4.6 4.6 0 0 0 1.5-1.2l4.5-4.5A10.2 10.2 0 0 1 29.8 26a7.4 7.4 0 0 0-1.6-.2 1.5 1.5 0 0 0-.7.2 5 5 0 0 0-1 .8L13.4 40.2a4 4 0 0 1-5.5-5.6L21 21.4a5 5 0 0 0 .9-1 1.5 1.5 0 0 0 .2-.7 7.4 7.4 0 0 0-.3-1.6A10.2 10.2 0 0 1 37 7.3ZM23.5 30l10.2 10.2a4 4 0 1 0 5.5-5.6l-8.4-8.4a10.1 10.1 0 0 1-1.7-.3 2 2 0 0 0-2 .5Z"></path>
                </g>
            </svg>
        </>
    )
}

export default DesignSupportIcon