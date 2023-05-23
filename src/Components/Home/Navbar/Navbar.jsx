import { Link } from "react-scroll";

const Navbar = () => {
    const listItem = <>
        <li>
            <Link className="text-white" to="header" spy={true} smooth={true} offset={-100} duration={500} >Home</Link>
        </li>
        <li>
            <Link className="text-white" to="about" spy={true} smooth={true} offset={-100} duration={500} >About</Link>
        </li>
        <li>
            <Link className="text-white" to="skills" spy={true} smooth={true} offset={-100} duration={500} >
                Skills
            </Link>
        </li>
        <li>
            <Link className="text-white" to="experience" spy={true} smooth={true} offset={50} duration={500} >
                Experiences
            </Link>
        </li>
        <li>
            <Link className="text-white" to="project" spy={true} smooth={true} offset={50} duration={500} >Project
            </Link>
        </li>
        <li>
            <Link className="text-white" to="pricing" spy={true} smooth={true} offset={50} duration={500} >Pricing
            </Link>
        </li>
        <li>
            <Link className="text-white" to="blog" spy={true} smooth={true} offset={50} duration={500} >Blog
            </Link>
        </li>
        <li>
            <Link className="text-white" to="contact" spy={true} smooth={true} offset={50} duration={500} >Contact
            </Link>
        </li>
    </>
    return (
        <div className="navbar bg-base-100 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            listItem
                        }
                    </ul>
                </div>
                <Link style={{ fontFamily: "'Tilt Prism', cursive" }} to="/" className="btn btn-ghost normal-case text-3xl">Touf<span className="text-[#4baa0c]">i</span>qul.</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        listItem
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-success btn-outline">Hire Now</a>
            </div>
        </div>
    );
};

export default Navbar;