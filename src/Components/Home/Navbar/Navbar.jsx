import { Link } from "react-scroll";
import useThemeToggle from "../../../Hooks/useThemeToggle";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
    const { theme, toggleTheme } = useThemeToggle();
    const listItem = <>
        <li>
            <Link className="" to="header" spy={true} smooth={true} offset={-100} duration={500} >Home</Link>
        </li>
        <li>
            <Link className="" to="about" spy={true} smooth={true} offset={-100} duration={500} >About</Link>
        </li>
        <li>
            <Link className="" to="skills" spy={true} smooth={true} offset={-100} duration={500} >
                Skills
            </Link>
        </li>
        <li>
            <Link className="" to="experience" spy={true} smooth={true} offset={-90} duration={500} >Experience
            </Link>
        </li>
        <li>
            <Link className="" to="projects" spy={true} smooth={true} offset={-90} duration={500} >Projects
            </Link>
        </li>
        {/* <li>
            <Link className="" to="blog" spy={true} smooth={true} offset={50} duration={500} >Blog
            </Link>
        </li> */}
        <li>
            <Link className="" to="contact" spy={true} smooth={true} offset={-100} duration={500} >Contact
            </Link>
        </li>
        <li>
            <button title={theme === 'night' ? 'cupcake' : 'night'} onClick={toggleTheme}>{theme === 'night' ? <FaSun className="text-yellow-300 text-xl" /> : <FaMoon />}</button>
        </li>
    </>
    return (
        <div className="navbar bg-base-100 fixed top-0 z-10 max-w-7xl mx-auto shadow-xl rounded-2xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            listItem
                        }
                    </ul>
                </div>
                <Link to="header" className="normal-case text-3xl cursor-pointer font-TiltPrism ">
                    {/* <img className="w-[120px]" src={Logo} alt="" /> */}
                    Touf<span className="text-[#00eeff] ">i</span>qul.
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        listItem
                    }
                </ul>
            </div>
        </div>
    );
};

export default Navbar;