import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav
            style={{ boxShadow: 'inset 1px 1px 15px rgba(1, 16, 60, 0.2), inset -1px -1px 15px rgba(1, 16, 60, 0.2)' }}
            className="fixed z-[100] top-[25px] w-[80%] flex justify-between items-center py-2 px-3 bg-[#FAF9F6] text-black rounded-full">
            <NavLink to="/" className={"p-semibold text-lg uppercase"}>
                <img className='absolute top-1/2 -translate-y-1/2 -left-[35px] h-[75px]' src="Brand_logo.png" alt="" />
            </NavLink>
            <div className="flex gap-7">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `text-sm transition duration-300 ${isActive ? 'border-b-2 border-black font-medium' : 'border-b-2 border-transparent'}`
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        `text-sm transition duration-300 ${isActive ? 'border-b-2 border-black font-medium' : 'border-b-2 border-transparent'}`
                    }
                >
                    About Us
                </NavLink>
                <NavLink
                    to="/services"
                    className={({ isActive }) =>
                        `text-sm transition duration-300 ${isActive ? 'border-b-2 border-black font-medium' : 'border-b-2 border-transparent'}`
                    }
                >
                    Our Services
                </NavLink>
                <NavLink
                    to="/internships"
                    className={({ isActive }) =>
                        `text-sm transition duration-300 ${isActive ? 'border-b-2 border-black font-medium' : 'border-b-2 border-transparent'}`
                    }
                >
                    Internships
                </NavLink>
            </div>
            <button className="text-[#FAF9F6] bg-btn-active p-medium rounded-full py-1 px-4">
                <NavLink to="/contact" className="text-sm">
                    Get in Touch
                </NavLink>
            </button>
        </nav>
    );
};

export default Navbar;