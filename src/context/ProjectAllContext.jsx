import { createContext, useState, useEffect, useRef, useContext } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

// ProjectAllContext banate hain jo multiple states aur functionalities ko share karega
const ProjectAllContext = createContext();

// `items`, `items2`, aur `items3` ko define kar rahe hain
const items = [
    { name: 'Ochi', route: 'https://ochi99.netlify.app/' },
    { name: 'Sundown Studio', route: 'https://magnificent-smakager-29d9e5.netlify.app/' },
    { name: 'Header Goes', route: 'https://glittering-marshmallow-440edb.netlify.app/' },
    { name: 'Sharad Sahu', route: 'https://sharadsportfolio.netlify.app/' },
    { name: 'I am William', route: 'https://vocal-chimera-107087.netlify.app/' },
    { name: 'Fix Computers', route: 'https://gleeful-fenglisu-06cdc4.netlify.app/' },
    { name: 'MantaTrade', route: 'https://ornate-gelato-b0fa21.netlify.app/' },
    { name: 'Oraman', route: 'https://gregarious-syrniki-7b45c9.netlify.app/' },
    { name: 'Growing Logistics', route: 'https://lucent-boba-5f2a5f.netlify.app/' },
    { name: 'Julia Noam', route: 'https://grand-jalebi-65aa54.netlify.app/' },
];

const items2 = [
    { name: 'Sharad Sahu', route: 'https://sharadsportfolio.netlify.app/' },
    { name: 'I am William', route: 'https://vocal-chimera-107087.netlify.app/' },
    { name: 'Oraman', route: 'https://gregarious-syrniki-7b45c9.netlify.app/' },
];

const items3 = [
    { name: 'Ochi', route: 'https://ochi99.netlify.app/' },
    { name: 'Sundown Studio', route: 'https://magnificent-smakager-29d9e5.netlify.app/' },
    { name: 'Header Goes', route: 'https://glittering-marshmallow-440edb.netlify.app/' },
    { name: 'Fix Computers', route: 'https://gleeful-fenglisu-06cdc4.netlify.app/' },
    { name: 'MantaTrade', route: 'https://ornate-gelato-b0fa21.netlify.app/' },
    { name: 'Growing Logistics', route: 'https://lucent-boba-5f2a5f.netlify.app/' },
    { name: 'Julia Noam', route: 'https://grand-jalebi-65aa54.netlify.app/' },
];

export const ProjectAllProvider = ({ children }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [toggle, setToggle] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);
    const [routActive, setRoutActive] = useState(0);
    const [mouseActive, setMouseActive] = useState(true);
    const intervalRef = useRef(null);
    const location = useLocation(); // Hook to get the current route

    const updateToggle = (id) => {
        setToggle(id);
    };

    const handleMouseLeave = (index) => {
        setActiveIndex(index);
        setRoutActive(index);
    };

    const startTimer = () => {
        intervalRef.current = setInterval(() => {
            let itemCount;

            if (toggle === 0) {
                itemCount = items.length;
            } else if (toggle === 1) {
                itemCount = items2.length;
            } else if (toggle === 2) {
                itemCount = items3.length;
            }

            setActiveIndex((prevIndex) => (prevIndex + 1) % itemCount);
            setRoutActive((prevIndex) => (prevIndex + 1) % itemCount);
        }, 10000);
    };

    const clearTimer = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    // Timer start/clear logic and state reset on route change
    useEffect(() => {
        setActiveIndex(0);
        setRoutActive(0);
        startTimer(); // Start the timer on mount

        return () => clearTimer(); // Clear timer on unmount
    }, [toggle]);

    // Reset or stop code when route changes
    useEffect(() => {
        setActiveIndex(0); // Reset active index
        setRoutActive(0); // Reset route active index
        clearTimer(); // Clear the timer on route change

        // If needed, start the timer again based on specific conditions
        if (mouseActive) {
            startTimer();
        }

        return () => clearTimer(); // Cleanup if necessary on route change
    }, [location.pathname]); // Run when the route changes

    const mouseenter = () => {
        setMouseActive(false);
        clearTimer();
    };

    const mouseleave = () => {
        setMouseActive(true);
        startTimer();
    };

    return (
        // ProjectAllContext.Provider ke andar state aur functions ko provide karte hain
        <ProjectAllContext.Provider
            value={{
                hoveredIndex,
                setHoveredIndex,
                toggle,
                updateToggle,
                activeIndex,
                setActiveIndex,
                routActive,
                setRoutActive,
                mouseActive,
                mouseenter,
                mouseleave,
                items, // Adding items arrays in the context
                items2,
                items3,
                handleMouseLeave, // Adding handleMouseLeave to the context
            }}
        >
            {children}
        </ProjectAllContext.Provider>
    );
};

ProjectAllProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

// Custom hook banate hain jisse ProjectAllContext ko asani se access kiya ja sake
export const useProjectAllContext = () => useContext(ProjectAllContext);