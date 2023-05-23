import Lottie from "lottie-react";
import bugFix from "../../../../assets/animations/bug.json";
import problemSolving from "../../../../assets/animations/programming.json";
import webDev from "../../../../assets/animations/web-development.json";
import AOS from 'aos';
import 'aos/dist/aos.css';
const WhatIDo = () => {
    AOS.init();
    return (
        <>
            <h2 className="text-5xl font-bold text-center my-10" data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom">What I do</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3">
                {/* Bug Fixing */}
                <div className="card card-compact w-full bg-base-100 shadow-xl" data-aos="zoom-out-right">
                    <figure className="h-[280px]">
                        <Lottie animationData={bugFix}></Lottie>
                    </figure>
                    <div className="card-body" >
                        <h2 className="card-title">Bug Fixing</h2>
                        <p>I emphasize my expertise in bug fixing across multiple programming languages and frameworks. I have a meticulous approach to identifying and resolving software defects, whether it be logical errors, memory leaks, or compatibility issues. With a deep understanding of debugging techniques, testing methodologies, and industry best practices, I effectively isolate and fix bugs to ensure the reliability and performance of software applications. My ability to navigate complex codebases and collaborate with team members enables me to deliver robust and stable solutions.</p>
                    </div>
                </div>
                {/* Problem Solving */}
                <div className="card card-compact w-full bg-base-100 shadow-xl" data-aos="zoom-out-left">
                    <figure className="h-[280px]">
                        <Lottie animationData={problemSolving}></Lottie>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Problem Solving</h2>
                        <p>My strong problem-solving abilities that extend beyond web development and encompass various programming languages. I possess a logical and analytical mindset, allowing me to approach complex challenges with efficiency and creativity. Whether it's debugging code, optimizing algorithms, or designing efficient solutions, I excel in identifying root causes and implementing effective strategies. With a systematic approach and attention to detail, I thrive in finding innovative solutions to technical problems across different programming domains.</p>
                    </div>
                </div>
                {/* Web Development */}
                <div className="card card-compact w-full bg-base-100 shadow-xl" data-aos="zoom-out-right">
                    <figure className="h-[280px]">
                        <Lottie animationData={webDev}></Lottie>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Web Development</h2>
                        <p>My proficiency and experience in web development. I specialize in building engaging and user-friendly websites using a combination of front-end and back-end technologies. With expertise in HTML, CSS, JavaScript, and frameworks such as React, I create visually appealing and responsive interfaces. Additionally, I have a solid understanding of server-side programming languages like PHP and Python, enabling me to develop robust backend functionalities. By integrating modern design principles, optimizing performance, and ensuring cross-browser compatibility, I deliver dynamic and high-quality web solutions.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WhatIDo;