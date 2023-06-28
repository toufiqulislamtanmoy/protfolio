import { Link } from "react-router-dom";
import Logo from "../../assets/Logo/logo.png"
import {
    FaArrowCircleLeft, FaMoon, FaSun
} from "react-icons/fa";
import useThemeToggle from "../../Hooks/useThemeToggle";
const ProjectNav = () => {
    const { theme, toggleTheme } = useThemeToggle();
    return (
        <div className="navbar bg-base-100 shadow-xl rounded-2xl p-3">
            <div className="flex-1 items-center">
                <Link to="/" className="normal-case text-xl cursor-pointer">
                    <img className="w-[120px]" src={Logo} alt="" />
                </Link>
            </div>
            <div className="flex-1 gap-2 items-center">
                <div className="dropdown dropdown-end">
                    <Link to="/" className="btn btn-ghost normal-case text-xl"><FaArrowCircleLeft /></Link>
                </div>
            </div>
            <div className="flex gap-2 items-center">
                <button className="btn btn-ghost" title={theme === 'night' ? 'cupcake' : 'night'} onClick={toggleTheme}>{theme === 'night' ? <FaSun className="text-yellow-300 text-xl" /> : <FaMoon />}</button>
            </div>
        </div>
    );
};

export default ProjectNav;