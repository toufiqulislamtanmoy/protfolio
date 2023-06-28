import  { useState } from "react";
import Lottie from "lottie-react";
import about from "../../../assets/animations/about.json";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Education from "./Education/Education";

const About = () => {
    AOS.init();
    const aboutMe =
        `Enthusiastic and dedicated 4th-year CSE student with hands-on experience in building responsive and user-friendly
        websites using React. Proficient in front-end development tools including Visual Studio Code, Git, and npm. Seeking
        an opportunity to apply my strong React skills and contribute to web development projects.
        `;
    const [showFullText, setShowFullText] = useState(false);
    const truncatedText = aboutMe.substring(0, 100);

    const handleSeeMoreClick = () => {
        setShowFullText(true);
    };

    const handleSeeLessClick = () => {
        setShowFullText(false);
    };

    return (
        <div id="about">
            <div  className="hero bg-base-100">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="rounded-lg lg:w-1/2" data-aos="zoom-in-up" >
                        <h1 className="lg:hidden text-center text-5xl font-bold" data-aos="zoom-in-down">About Me</h1>
                        <Lottie animationData={about} />
                    </div>
                    <div className="w-full lg:w-1/2">
                        <h1 className="hidden lg:block text-center text-5xl font-bold" data-aos="zoom-in-down">About Me</h1>
                        <p className="py-6" data-aos="fade-up"
                            data-aos-anchor-placement="bottom-bottom">
                            {showFullText ? aboutMe : truncatedText + "...."}
                            {!showFullText ? (
                                <button className="text-blue-400 underline" onClick={handleSeeMoreClick}>
                                    See More
                                </button>
                            ) : (
                                <button className="text-blue-400 underline" onClick={handleSeeLessClick}>
                                    See Less
                                </button>
                            )}
                        </p>
                        {/* Badges */}
                        <div className="space-x-2 space" data-aos="fade-up"
                            data-aos-anchor-placement="bottom-bottom">
                            <div className=" badge badge-accent badge-outline">C</div>
                            <div className=" badge badge-outline">C++</div>
                            <div className=" badge badge-primary badge-outline">html</div>
                            <div className=" badge badge-info badge-outline">css</div>
                            <div className=" badge badge-error badge-outline">javaScript</div>
                            <div className=" badge badge-info badge-outline">React</div>
                            <div className=" badge border-purple-600 text-purple-600 badge-outline">php</div>
                            <div className=" badge badge-accent badge-outline">MySQL</div>
                            <div className=" badge badge-accent badge-outline">MongoDB</div>
                        </div>


                    </div>
                </div>
                

                
            </div>
            <Education />
        </div>
    );
};

export default About;
