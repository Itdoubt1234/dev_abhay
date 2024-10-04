import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav
            style={{ boxShadow: 'inset 1px 1px 15px rgba(198, 206, 237, 0.8), inset -1px -1px 15px rgba(198, 206, 237, 0.8), 1px 1px 12px rgba(128, 128, 128, 0.5), -1px -1px 12px rgba(128, 128, 128, 0.5)' }}
            className="absolute z-[100] top-[15px] w-[94%] flex justify-between items-center py-2 px-6 bg-[#FAF9F6] text-black rounded-full">
            <NavLink to="/" className={"font-semibold text-lg uppercase"}>
                Brand Logo
            </NavLink>
            <div className="flex gap-7">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `text-lg transition duration-300 ${isActive ? 'border-b-2 border-black' : 'border-b-2 border-transparent'}`
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        `text-lg transition duration-300 ${isActive ? 'border-b-2 border-black' : 'border-b-2 border-transparent'}`
                    }
                >
                    About Us
                </NavLink>
                <NavLink
                    to="/services"
                    className={({ isActive }) =>
                        `text-lg transition duration-300 ${isActive ? 'border-b-2 border-black' : 'border-b-2 border-transparent'}`
                    }
                >
                    Our Services
                </NavLink>
                <NavLink
                    to="/internships"
                    className={({ isActive }) =>
                        `text-lg transition duration-300 ${isActive ? 'border-b-2 border-black' : 'border-b-2 border-transparent'}`
                    }
                >
                    Internships
                </NavLink>
            </div>
            <button className="text-[#FAF9F6] bg-[#0161FF] font-medium rounded-full py-1.5 px-5">
                <NavLink to="/contact" className="text-lg">
                    Get in Touch
                </NavLink>
            </button>
        </nav>
    );
};

export default Navbar;