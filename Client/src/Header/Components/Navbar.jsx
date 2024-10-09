import { NavLink } from 'react-router-dom';

let navOptions = [
    {
        title: 'Home',
        redirect: '/'
    },
    {
        title: 'About Us',
        redirect: '/about'
    },
    {
        title: 'Our Services',
        redirect: '/services'
    },
    {
        title: 'Internships',
        redirect: '/internships'
    },
    {
        title: 'Blogs',
        redirect: '/blogs'
    },
]


const Navbar = () => {
    return (
        <nav
            style={{ boxShadow: 'inset 1px 1px 15px rgba(1, 16, 60, 0.2), inset -1px -1px 15px rgba(1, 16, 60, 0.2)' }}
            className="fixed z-[100] top-[25px] w-[80%] flex justify-between items-center py-2 px-3 bg-[#FAF9F6] text-black rounded-full">

            <NavLink to="/" className={"p-semibold text-lg uppercase"}>
                <img className='absolute top-1/2 -translate-y-1/2 -left-[35px] h-[75px]' src="Brand_logo.png" alt="" />
            </NavLink>

            <div className="flex gap-6">
                {
                    navOptions.map((nav, index) =>
                        <NavLink
                            key={index}
                            to={nav.redirect}
                            className={({ isActive }) =>
                                `text-sm px-4 py-2 rounded-full ${isActive ? 'bg-btn-active text-white font-medium' : 'border-b-2 border-transparent'}`
                            }
                        >
                            {nav.title}
                        </NavLink>
                    )
                }
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