import { Link } from "react-router-dom";
import Logo from "../../../assets/Logo/logo.png"
import { FaFacebook, FaGithubAlt, FaLinkedin } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-base-200 mt-10 rounded-2xl">
            <div>
                <img className="w-48" src={Logo} alt="" />  
            </div>
            <div>
                <div className="grid grid-flow-col gap-4">
                <Link to="https://www.facebook.com/toufiqulislamtanmoy" className=" gap-4 hover:text-[#00eeff] cursor-pointer text-4xl transition duration-150 ease-out hover:ease-in" spy={true} smooth={true} offset={50} duration={500} >
                                <FaFacebook />
                            </Link>
                            <Link to="https://github.com/toufiqulislamtanmoy" className=" gap-4 hover:text-[#00eeff] cursor-pointer text-4xl transition duration-150 ease-out hover:ease-in" spy={true} smooth={true} offset={50} duration={500} >
                                <FaGithubAlt />
                            </Link>
                            <Link to="https://www.linkedin.com/in/md-toufiqul-islam-52a4021b4/" className=" gap-4 hover:text-[#00eeff] cursor-pointer text-4xl transition duration-150 ease-out hover:ease-in" spy={true} smooth={true} offset={50} duration={500} >
                                <FaLinkedin />
                            </Link>
                </div>
            </div>
            <p>Copyright © 2023 - All right reserved</p>
        </footer>
    );
};

export default Footer;