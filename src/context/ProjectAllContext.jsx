import { createContext, useState, useEffect, useRef, useContext } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

// ProjectAllContext banate hain jo multiple states aur functionalities ko share karega
const ProjectAllContext = createContext();

// `items`, `items2`, aur `items3` ko define kar rahe hain
const items = [
    { name: 'Tech Educators', route: '/' },
    { name: 'Ink Of Violet', route: '/route2' },
    { name: 'HMM', route: '/route3' },
    { name: 'The Breedling', route: '/route4' },
    { name: 'Tech Centre', route: '/route5' },
    { name: 'Concept Capers', route: '/route6' },
    { name: 'Downstream', route: '/route7' },
    { name: 'Tonic University', route: '/route8' },
];

const items2 = [
    { name: 'Tech Educators', route: '/page1' },
    { name: 'Tech Centre', route: '/page2' },
    { name: 'div 3', route: '/page3' },
];

const items3 = [
    { name: 'Tech Educators 1', route: '/page1' },
    { name: 'Tech Educators 2', route: '/page2' },
    { name: 'Tech Educators 3', route: '/page3' },
    { name: 'Tech Educators 4', route: '/page4' },
    { name: 'Tech Educators 5', route: '/page5' },
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
