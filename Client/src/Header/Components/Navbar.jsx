import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="w-full flex justify-between items-center bg-[#0161FF] p-3">
            <NavLink to="/" className={"font-semibold text-lg uppercase text-[#FAF9F6]"}>
                Brand Logo
            </NavLink>
            <div className="flex text-[#FAF9F6] gap-7">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `text-lg transition duration-300 ${isActive ? 'border-b-2 border-[#FAF9F6]' : 'border-b-2 border-transparent'}`
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        `text-lg transition duration-300 ${isActive ? 'border-b-2 border-[#FAF9F6]' : 'border-b-2 border-transparent'}`
                    }
                >
                    About Us
                </NavLink>
                <NavLink
                    to="/services"
                    className={({ isActive }) =>
                        `text-lg transition duration-300 ${isActive ? 'border-b-2 border-[#FAF9F6]' : 'border-b-2 border-transparent'}`
                    }
                >
                    Our Services
                </NavLink>
                <NavLink
                    to="/internships"
                    className={({ isActive }) =>
                        `text-lg transition duration-300 ${isActive ? 'border-b-2 border-[#FAF9F6]' : 'border-b-2 border-transparent'}`
                    }
                >
                    Internships
                </NavLink>
            </div>
            <button className="bg-[#FAF9F6] text-[#0161FF] font-medium rounded-full py-2 px-6">
                <NavLink to="/contact" className="text-lg">
                    Get in Touch
                </NavLink>
            </button>
        </nav>
    );
};

export default Navbar;