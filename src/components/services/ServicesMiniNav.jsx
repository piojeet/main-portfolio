import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Alert from '../../assets/alert.svg';
import Paint from '../../assets/paint.svg';
import WebDesign from '../../assets/webdesign.svg';
import FrontDesign from '../../assets/frontenddesign.svg';
import DesignSupport from '../../assets/designsupport.svg';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

const navLinks = [
    { path: '/services', icon: Alert, text: 'services' },
    { path: '/branding', icon: Paint, text: 'branding' },
    { path: '/website-design', icon: WebDesign, text: 'website design' },
    { path: '/frontend-design', icon: FrontDesign, text: 'frontend design' },
    { path: '/design-support', icon: DesignSupport, text: 'design support' },
];

const supportedPaths = navLinks.map((link) => link.path);
const indicatorMotionState = {
    pendingStyle: null,
};

function ServicesMiniNav() {
    const location = useLocation();
    const navContainerRef = useRef(null);
    const linkRefs = useRef({});
    const [isIndicatorTransitionEnabled, setIsIndicatorTransitionEnabled] = useState(false);
    const [indicatorStyle, setIndicatorStyle] = useState({
        width: 0,
        x: 0,
        opacity: 0,
    });

    const getIndicatorMetrics = (path) => {
        const navContainer = navContainerRef.current;
        const activeLink = linkRefs.current[path];

        if (!navContainer || !activeLink) {
            return null;
        }

        const navContainerRect = navContainer.getBoundingClientRect();
        const activeLinkRect = activeLink.getBoundingClientRect();

        return {
            width: activeLinkRect.width,
            x: activeLinkRect.left - navContainerRect.left,
            opacity: 1,
        };
    };

    useLayoutEffect(() => {
        if (!supportedPaths.includes(location.pathname)) {
            return undefined;
        }

        const activeMetrics = getIndicatorMetrics(location.pathname);

        if (!activeMetrics) {
            setIndicatorStyle((previousStyle) => ({
                ...previousStyle,
                opacity: 0,
            }));
            return undefined;
        }

        const previousMetrics = indicatorMotionState.pendingStyle;
        let firstAnimationFrameId;
        let secondAnimationFrameId;

        setIsIndicatorTransitionEnabled(false);
        setIndicatorStyle(previousMetrics ?? activeMetrics);

        firstAnimationFrameId = window.requestAnimationFrame(() => {
            setIsIndicatorTransitionEnabled(true);

            if (!previousMetrics) {
                return;
            }

            secondAnimationFrameId = window.requestAnimationFrame(() => {
                setIndicatorStyle(activeMetrics);
                indicatorMotionState.pendingStyle = null;
            });
        });

        if (!previousMetrics) {
            indicatorMotionState.pendingStyle = null;
        }

        return () => {
            window.cancelAnimationFrame(firstAnimationFrameId);
            window.cancelAnimationFrame(secondAnimationFrameId);
        };
    }, [location.pathname]);

    useEffect(() => {
        if (!supportedPaths.includes(location.pathname)) {
            return undefined;
        }

        const syncIndicatorPosition = () => {
            const activeMetrics = getIndicatorMetrics(location.pathname);

            if (activeMetrics) {
                setIndicatorStyle(activeMetrics);
            }
        };

        const handleResize = () => syncIndicatorPosition();
        window.addEventListener('resize', handleResize);

        let resizeObserver;

        if (typeof ResizeObserver !== 'undefined') {
            resizeObserver = new ResizeObserver(() => syncIndicatorPosition());

            if (navContainerRef.current) {
                resizeObserver.observe(navContainerRef.current);
            }

            Object.values(linkRefs.current).forEach((link) => {
                if (link) {
                    resizeObserver.observe(link);
                }
            });
        }

        return () => {
            window.removeEventListener('resize', handleResize);
            resizeObserver?.disconnect();
        };
    }, [location.pathname]);

    return (
        <>
            {supportedPaths.includes(location.pathname) && (
                <div className='fixed left-1/2 top-[76.8vh] -translate-x-1/2 bg-bodyColor md:p-4 p-2 rounded-full border-2 border-blackColor z-50'>
                    <div ref={navContainerRef} className='relative flex items-center md:gap-4 gap-3'>
                        <span
                            aria-hidden="true"
                            className={classNames(
                                'absolute left-0 top-0 h-full rounded-full bg-blackColor will-change-transform',
                                isIndicatorTransitionEnabled
                                    ? 'transition-[transform,width,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]'
                                    : 'transition-none'
                            )}
                            style={{
                                width: `${indicatorStyle.width}px`,
                                opacity: indicatorStyle.opacity,
                                transform: `translateX(${indicatorStyle.x}px)`,
                            }}
                        />
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                onClick={() => {
                                    if (location.pathname === link.path) {
                                        return;
                                    }

                                    const currentMetrics = getIndicatorMetrics(location.pathname);

                                    if (currentMetrics) {
                                        indicatorMotionState.pendingStyle = currentMetrics;
                                    }
                                }}
                                ref={(element) => {
                                    if (element) {
                                        linkRefs.current[link.path] = element;
                                        return;
                                    }

                                    delete linkRefs.current[link.path];
                                }}
                                className={({ isActive }) =>
                                    classNames(
                                        'relative z-10 pointer-cursor font-TTCPro font-semibold inline-flex items-center text-[19px] rounded-full flex-nowrap overflow-hidden transition-colors duration-300',
                                        isActive ? 'text-white' : 'text-blackColor'
                                    )
                                }
                            >
                                <span className='inline-flex flex-shrink-0 md:w-14 md:h-14 size-11 items-center justify-center rounded-full'>
                                    <img
                                        src={link.icon}
                                        alt=""
                                        className={classNames(
                                            'md:w-8 w-6',
                                            location.pathname === link.path ? 'invert' : 'invert-0'
                                        )}
                                    />
                                </span>
                                <span
                                    className={classNames(
                                        'hidden md:block flex-shrink-0 whitespace-nowrap overflow-hidden transition-[max-width,opacity,padding] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]',
                                        location.pathname === link.path ? 'max-w-48 opacity-100 pr-5' : 'max-w-0 opacity-0 pr-0'
                                    )}
                                >
                                    {link.text}
                                </span>
                            </NavLink>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}

export default ServicesMiniNav;
