import { Link } from "react-router-dom";
import { TypeAnimation } from 'react-type-animation';
import {
    FaEnvelope,
    FaPhoneVolume,
    FaLocationArrow,
    FaFacebook,
    FaLinkedin,
    FaGithubAlt,
    FaDownload
} from "react-icons/fa";
import usePersonalInfo from "../../../Hooks/usePersonalInfo";
import Hold from "../../Shared/Hold";

const Header = () => {
    const [personalInfo, loading] = usePersonalInfo();
    const { 
        name,
        email,
        phone_number,
        profile_image,
        summary,
        address,
        links,
        gretings
    } = personalInfo[0] || {};
    
    const { facebook, linkedin, github } = links || {};
    console.log(loading);
    return (
        <>
            {
                loading ? <Hold text={"Loading........"}/> :
                    <div className="lg:my-0 my-24" id="header">
                        <div className="hero min-h-screen bg-base-100">
                            <div className="hero-content flex-col lg:flex-row-reverse">
                                <div className="avatar lg:w-1/2 flex items-center justify-end">
                                    <div className="cursor-pointer rounded-full border-8 border-gray-400 hover:border-green-400 shadow-2xl">
                                        <img src={profile_image} alt="Loading Problem To Server" className="max-w-sm rounded-lg shadow-2xl object-cover transition-transform duration-500 hover:rotate-3 hover:scale-125" />
                                    </div>
                                </div>

                                <div className="lg:w-1/2 text-center lg:text-left">
                                    <div className="chat chat-start lg:block flex items-center justify-center">
                                        <div className="chat-bubble chat-bubble-secondary">{gretings ? gretings : "Assalamualikum, I'm"}</div>
                                    </div>
                                    <h1 className="lg:text-5xl text-3xl font-bold">{name? name : "Toufiqul Islam Tanmoy"}</h1>
                                    <TypeAnimation
                                        sequence={[
                                            'Web Developer',
                                            1000,
                                            '',
                                            1000
                                        ]}
                                        wrapper="span"
                                        speed={50}
                                        style={{ fontSize: '2em', display: 'inline-block' }}
                                        repeat={Infinity}

                                    />
                                    <p className="py-6 text-justify">{summary}</p>
                                    <div className="space-y-3 inline-block">
                                        <p to="contact" className=" flex items-center gap-4 hover:text-[#00eeff] cursor-pointer" >
                                            <FaEnvelope /> {email}
                                        </p>
                                        <p to="contact" className="flex items-center gap-4 hover:text-[#00eeff] cursor-pointer" >
                                            <FaPhoneVolume />{phone_number}
                                        </p>
                                        <p to="contact" className="flex items-center gap-4 hover:text-[#00eeff] cursor-pointer" >
                                            <FaLocationArrow />{address}
                                        </p>

                                    </div>
                                    {/* Social Links */}
                                    <div className="my-10 flex items-center gap-3">
                                        <Link to={facebook} className=" gap-4 hover:text-[#00eeff] cursor-pointer text-4xl transition duration-150 ease-out hover:ease-in" spy={true} smooth={true} offset={50} duration={500} >
                                            <FaFacebook />
                                        </Link>
                                        <Link to={github} className=" gap-4 hover:text-[#00eeff] cursor-pointer text-4xl transition duration-150 ease-out hover:ease-in" spy={true} smooth={true} offset={50} duration={500} >
                                            <FaGithubAlt />
                                        </Link>
                                        <Link to={linkedin} className=" gap-4 hover:text-[#00eeff] cursor-pointer text-4xl transition duration-150 ease-out hover:ease-in" spy={true} smooth={true} offset={50} duration={500} >
                                            <FaLinkedin />
                                        </Link>

                                    </div>
                                    <a className="btn btn-outline" href='resume.pdf' download="Toufiqul_Resume.pdf">Download Resume <FaDownload className=" mx-3" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </>
    );
};

export default Header;