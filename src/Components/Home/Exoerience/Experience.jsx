import AOS from 'aos';
import 'aos/dist/aos.css';
const Experience = () => {
    AOS.init();
    return (
        <div id='experience' className="lg:flex justify-between my-24 gap-5" >
            <div className="lg:w-1/2" >
                <h1 className="text-5xl font-bold text-center my-10" data-aos="fade-right">Education</h1>
                <div className="card bg-gray-900 shadow-xl my-10" data-aos="flip-left">
                    <div className="card-body">
                        <h2 className="card-title">B.Sc in CSE From <span className='text-teal-400'>Varendra University</span></h2>
                        <h4 className='card-compact text-teal-400'>2019-2023</h4>
                        <p className="text-justify">
                            My B.Sc in CSE from Varendra University has provided me with a strong academic foundation, practical skills, and a passion for continued learning. I am excited to leverage my education and skills in pursuing a successful career in the field of computer science and engineering.
                        </p>
                    </div>
                </div>
                <div className="card bg-gray-900 shadow-xl my-10" data-aos="flip-left">
                    <div className="card-body">
                        <h2 className="card-title">HSC in Science Department From <span className='text-teal-400'>Court College</span></h2>
                        <h4 className='card-compact text-teal-400'>2017-2019</h4>
                        <p className="text-justify text-white">
                            My HSC education from Court College has laid a strong foundation for my academic and professional journey. It has equipped me with a solid understanding of scientific principles, honed my analytical and problem-solving skills, and instilled in me a passion for continuous learning.
                        </p>

                    </div>
                </div>
                <div className="card bg-gray-900 shadow-xl my-10" data-aos="flip-left">
                    <div className="card-body">
                        <h2 className="card-title">SSC in Science Department From <span className='text-teal-400'>Police Line School & College</span></h2>
                        <h4 className='card-compact text-teal-400'>2015-2017</h4>
                        <p className="text-justify">
                            I have completed my Secondary School Certificate (SSC) in the Science department from Police Line School & College during the period of 2015 to 2017. This two-year program has laid a strong educational foundation and equipped me with a solid understanding of scientific principles and fundamental subjects
                        </p>
                    </div>
                </div>
            </div>
            <div className="lg:w-1/2" >
                <h1 className="text-5xl font-bold text-center my-10"  data-aos="fade-left">Work Experience</h1>
                <div className="card bg-gray-900 shadow-xl my-10"  data-aos="flip-right">
                    <div className="card-body">
                        <h2 className="card-title">Aspiring Web Developer <span className='text-teal-400'>Self-Taught</span></h2>
                        <h4 className='card-compact text-teal-400'>2020-2023</h4>
                        <p className='text-justify'>
                            During this period, I embarked on a journey to become a web developer, focusing on learning and honing my skills in bug fixing, problem solving, and web development. Although I did not have formal work experience, I dedicated significant time and effort to self-study and practical projects to build a solid foundation in web development.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;