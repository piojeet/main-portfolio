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
        { path: '/website-design', icon: WebDesign, text: 'branding' },
        { path: '/frontend-design', icon: FrontDesign, text: 'frontend design' },
        { path: '/design-support', icon: DesignSupport, text: 'design support' },
    ];

    return (
        <>
            {['/services', '/branding', '/website-design', '/frontend-design', '/design-support'].includes(location.pathname) && (
                <div className='fixed left-1/2 top-[76.8vh] -translate-x-1/2 bg-bodyColor p-4 rounded-full border-2 border-blackColor z-50'>
                    <div className='flex items-center gap-4'>
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                className={({ isActive }) =>
                                    classNames(
                                        'font-TTCPro font-semibold inline-flex items-center text-[19px] rounded-full flex-nowrap transition-width duration-[1s] ease-linear overflow-hidden',
                                        isActive ? 'text-red-400 bg-blackColor max-w-full' : 'text-blackColor max-w-14'
                                    )
                                }
                            >
                                <span className='inline-flex flex-shrink-0 w-14 h-14 bg-red-400 items-center justify-center rounded-full'>
                                    <img
                                        src={link.icon}
                                        alt=""
                                        className={classNames(
                                            'w-8',
                                            location.pathname === link.path ? 'invert' : 'invert-0'
                                        )}
                                    />
                                </span>
                                <span className='block px-4 flex-shrink-0 whitespace-nowrap overflow-hidden'>{link.text}</span>
                            </NavLink>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}

export default ServicesMiniNav;
