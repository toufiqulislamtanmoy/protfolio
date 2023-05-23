import React, { useState } from "react";
import Lottie from "lottie-react";
import about from "../../../assets/animations/about.json";

import AOS from 'aos';
import 'aos/dist/aos.css';
import WhatIDo from "./WhatIDo/WhatIDo";

const About = () => {
    AOS.init();
    const aboutMe =
        "I am a final year Bachelor of Computer Science and Engineering student specializing in web development. With expertise in React and proficiency in languages like C, C++, C#, Python, PHP, and JavaScript, tackles diverse development challenges. With excellent communication skills and a continuous learning mindset, thrives in collaborative environments and stays updated with the latest trends. A dedicated and innovative professional, I am poised to make a significant impact in the field.";
    const [showFullText, setShowFullText] = useState(false);
    const truncatedText = aboutMe.substring(0, 100);

    const handleSeeMoreClick = () => {
        setShowFullText(true);
    };

    const handleSeeLessClick = () => {
        setShowFullText(false);
    };

    return (
        <div>
            <div id="about" className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="rounded-lg shadow-2xl lg:w-1/2" data-aos="zoom-in-up" >
                        <Lottie animationData={about} />
                    </div>
                    <div className="w-full lg:w-1/2">
                        <h1 className="text-5xl font-bold" data-aos="zoom-in-down">About Me</h1>
                        <p className="py-6" data-aos="fade-up"
                            data-aos-anchor-placement="bottom-bottom">
                            {showFullText ? aboutMe : truncatedText + "...."}
                            {!showFullText ? (
                                <button className="btn text-blue-400 underline" onClick={handleSeeMoreClick}>
                                    See More
                                </button>
                            ) : (
                                <button className="btn text-blue-400 underline" onClick={handleSeeLessClick}>
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
                            <div className=" badge badge-accent badge-outline">python</div>
                        </div>


                    </div>
                </div>
            </div>

            <div className="my-10">

                {/* What i do */}
                <WhatIDo />
            </div>
        </div>
    );
};

export default About;
