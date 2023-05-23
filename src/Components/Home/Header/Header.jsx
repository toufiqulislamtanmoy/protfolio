import { Link } from "react-router-dom";
import header from "../../../assets/Banner/banner.png"
import { 
    FaEnvelope,
    FaPhoneVolume,
    FaLocationArrow,
    FaFacebook,
    FaLinkedin,
    FaGithubAlt,
} from "react-icons/fa";
const Header = () => {
    return (
        <div className="" id="header">
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="avatar lg:w-1/2 flex items-center justify-end">
                        <div className="rounded-full border-8 border-gray-400 shadow-2xl">
                            <img src={header} className="max-w-sm rounded-lg shadow-2xl" />
                        </div>
                    </div>

                    <div className="lg:w-1/2 text-center lg:text-left">
                        <div className="chat chat-start lg:block flex items-center justify-center">
                            <div className="chat-bubble chat-bubble-secondary">Assalamualikum, I'm</div>
                        </div>
                        <h1 className="lg:text-5xl text-3xl font-bold">Toufiqul Islam Tanmoy</h1>
                        <h1 className="lg:text-3xl text-xl font-extralight">Web Developer</h1>
                        <p className="py-6">A highly skilled web developer with a passion for creating beautiful and functional websites. With over six months of experience in the industry, I specialize in HTML, CSS, JavaScript, and Bootstrap. I've worked on various projects, including landing pages, blogs, and e-commerce websites</p>
                        <div className="space-y-3 ">
                            <Link to="contact" className=" text-white flex items-center gap-4 hover:text-[#00eeff] cursor-pointer" spy={true} smooth={true} offset={50} duration={500} >
                                <FaEnvelope /> tittanmoy@gmail.com
                            </Link>
                            <Link to="contact" className="text-white flex items-center gap-4 hover:text-[#00eeff] cursor-pointer" spy={true} smooth={true} offset={50} duration={500} >
                                <FaPhoneVolume />+880 1848-189482
                            </Link>
                            <Link to="contact" className="text-white flex items-center gap-4 hover:text-[#00eeff] cursor-pointer" spy={true} smooth={true} offset={50} duration={500} >
                                <FaLocationArrow />Rajshahi,Bangladesh
                            </Link>

                        </div>
                        {/* Social Links */}
                        <div className="my-10 flex items-center gap-3">
                            <Link to="https://www.facebook.com/toufiqulislamtanmoy" className="text-white  gap-4 hover:text-[#00eeff] cursor-pointer text-4xl transition duration-150 ease-out hover:ease-in" spy={true} smooth={true} offset={50} duration={500} >
                                <FaFacebook />
                            </Link>
                            <Link to="https://github.com/toufiqulislamtanmoy" className="text-white  gap-4 hover:text-[#00eeff] cursor-pointer text-4xl transition duration-150 ease-out hover:ease-in" spy={true} smooth={true} offset={50} duration={500} >
                                <FaGithubAlt />
                            </Link>
                            <Link to="https://www.linkedin.com/in/md-toufiqul-islam-52a4021b4/" className="text-white  gap-4 hover:text-[#00eeff] cursor-pointer text-4xl transition duration-150 ease-out hover:ease-in" spy={true} smooth={true} offset={50} duration={500} >
                                <FaLinkedin />
                            </Link>

                        </div>
                        <button className="btn btn-primary btn-outline">Hire Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;