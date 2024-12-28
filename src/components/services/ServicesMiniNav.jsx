import { NavLink, useLocation } from 'react-router-dom';
import Alert from '../../assets/alert.svg';
import Paint from '../../assets/paint.svg';
import WebDesign from '../../assets/webdesign.svg';
import FrontDesign from '../../assets/frontenddesign.svg';
import DesignSupport from '../../assets/designsupport.svg';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

function ServicesMiniNav() {
    const location = useLocation();
    const navLinks = [
        { path: '/services', icon: Alert, text: 'services' },
        { path: '/branding', icon: Paint, text: 'branding' },
        { path: '/website-design', icon: WebDesign, text: 'website design' },
        { path: '/frontend-design', icon: FrontDesign, text: 'frontend design' },
        { path: '/design-support', icon: DesignSupport, text: 'design support' },
    ];

    return (
        <>
            {['/services', '/branding', '/website-design', '/frontend-design', '/design-support'].includes(location.pathname) && (
                <div className='fixed left-1/2 top-[76.8vh] -translate-x-1/2 bg-bodyColor md:p-4 p-2 rounded-full border-2 border-blackColor z-50'>
                    <div className='flex items-center md:gap-4 gap-3'>
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                className={({ isActive }) =>
                                    classNames(
                                        'font-TTCPro font-semibold inline-flex items-center text-[19px] rounded-full flex-nowrap transition-width duration-[1s] ease-linear overflow-hidden',
                                        isActive ? 'text-white bg-blackColor max-w-full' : 'text-blackColor max-w-14'
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
                                <span className='md:block hidden px-4 flex-shrink-0 whitespace-nowrap overflow-hidden'>{link.text}</span>
                            </NavLink>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}

export default ServicesMiniNav;
