import AOS from 'aos';
import 'aos/dist/aos.css';
import Lottie from "lottie-react";
import techSkill from "../../../assets/animations/TechSkill.json";
import ProgressBar from 'react-animated-progress-bar';
import useSoftSkills from '../../../Hooks/useSoftSkills';
import useTechskills from '../../../Hooks/useTechskills';
const Skills = () => {
    AOS.init();


    const { softSkills } = useSoftSkills();
    const { techskills } = useTechskills();

    console.log("Tech Skills is here",techskills);

    return (
        <div id='skills' className='my-10' data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
            <div className="lg:flex lg:flex-row-reverse justify-between items-center">
                <div className="rounded-lg lg:w-1/2" data-aos="fade-down-right" >
                    <h1 className="text-5xl font-bold text-center my-10">Technical Skills</h1>
                    <Lottie animationData={techSkill} />
                </div>
                <div id='technicalSkills' className='lg:w-1/2'>
                    {
                        techskills.map(ts =>
                            <div key={ts._id} className='mx-5' data-aos="fade-down-left">
                                <h2>{ts.name}</h2>
                                <ProgressBar
                                    width="100%"
                                    height="10px"
                                    rect
                                    fontColor="grey"
                                    percentage={ts.percent}
                                    rectPadding="1px"
                                    rectBorderRadius="20px"
                                    trackPathColor="white"
                                    trackBorderColor="black"
                                    defColor={{
                                        fair: 'orangered',
                                        good: 'yellow',
                                        excellent: 'orange',
                                        poor: 'red',
                                    }}
                                />
                            </div>

                        )
                    }
                    {/* <div className='mx-5' data-aos="fade-down-left">
                        <h2>HTML</h2>
                        <ProgressBar
                            width="100%"
                            height="10px"
                            rect
                            fontColor="grey"
                            percentage="95"
                            rectPadding="1px"
                            rectBorderRadius="20px"
                            trackPathColor="transparent"
                            trackBorderColor="grey"
                            defColor={{
                                fair: 'orangered',
                                good: 'yellow',
                                excellent: '#3ABFF8',
                                poor: 'red',
                            }}
                        />
                    </div>
                    <div className='mx-5' data-aos="fade-down-left">
                        <h2>CSS</h2>
                        <ProgressBar
                            width="100%"
                            height="10px"
                            rect
                            fontColor="gray"
                            percentage="85"
                            rectPadding="1px"
                            rectBorderRadius="20px"
                            trackPathColor="transparent"
                            bgColor="#333333"
                            trackBorderColor="grey"
                            defColor={{
                                fair: 'orangered',
                                good: 'yellow',
                                excellent: '#3ABFF8',
                                poor: 'red',
                            }}
                        />
                    </div>
                    <div className='mx-5' data-aos="fade-down-left">
                        <h2>JavaScript</h2>
                        <ProgressBar
                            width="100%"
                            height="10px"
                            rect
                            fontColor="gray"
                            percentage="80"
                            rectPadding="1px"
                            rectBorderRadius="20px"
                            trackPathColor="transparent"
                            bgColor="#333333"
                            trackBorderColor="grey"
                            defColor={{
                                fair: 'orangered',
                                good: 'yellow',
                                excellent: '#3ABFF8',
                                poor: 'red',
                            }}
                        />
                    </div>
                    <div className='mx-5' data-aos="fade-down-left">
                        <h2>React JS</h2>
                        <ProgressBar
                            width="100%"
                            height="10px"
                            rect
                            fontColor="gray"
                            percentage="89"
                            rectPadding="1px"
                            rectBorderRadius="20px"
                            trackPathColor="transparent"
                            bgColor="#333333"
                            trackBorderColor="grey"
                            defColor={{
                                fair: 'orangered',
                                good: 'yellow',
                                excellent: '#3ABFF8',
                                poor: 'red',
                            }}
                        />
                    </div>
                    <div className='mx-5' data-aos="fade-down-left">
                        <h2>Express JS</h2>
                        <ProgressBar
                            width="100%"
                            height="10px"
                            rect
                            fontColor="gray"
                            percentage="80"
                            rectPadding="1px"
                            rectBorderRadius="20px"
                            trackPathColor="transparent"
                            bgColor="#333333"
                            trackBorderColor="grey"
                            defColor={{
                                fair: 'orangered',
                                good: 'yellow',
                                excellent: '#3ABFF8',
                                poor: 'red',
                            }}
                        />
                    </div>
                    <div className='mx-5' data-aos="fade-down-left">
                        <h2>MongoDB</h2>
                        <ProgressBar
                            width="100%"
                            height="10px"
                            rect
                            fontColor="gray"
                            percentage="70"
                            rectPadding="1px"
                            rectBorderRadius="20px"
                            trackPathColor="transparent"
                            bgColor="#333333"
                            trackBorderColor="grey"
                            defColor={{
                                fair: 'orangered',
                                good: 'yellow',
                                excellent: '#3ABFF8',
                                poor: 'red',
                            }}
                        />
                    </div>
                    <div className='mx-5' data-aos="fade-down-left">
                        <h2>MySQL</h2>
                        <ProgressBar
                            width="100%"
                            height="10px"
                            rect
                            fontColor="gray"
                            percentage="70"
                            rectPadding="1px"
                            rectBorderRadius="20px"
                            trackPathColor="transparent"
                            bgColor="#333333"
                            trackBorderColor="grey"
                            defColor={{
                                fair: 'orangered',
                                good: 'yellow',
                                excellent: '#3ABFF8',
                                poor: 'red',
                            }}
                        />
                    </div>
                    <div className='mx-5' data-aos="fade-down-left">
                        <h2>C & C++</h2>
                        <ProgressBar
                            width="100%"
                            height="10px"
                            rect
                            fontColor="gray"
                            percentage="80"
                            rectPadding="1px"
                            rectBorderRadius="20px"
                            trackPathColor="transparent"
                            bgColor="#333333"
                            trackBorderColor="grey"
                            defColor={{
                                fair: 'orangered',
                                good: 'yellow',
                                excellent: '#3ABFF8',
                                poor: 'red',
                            }}
                        />
                    </div> */}
                </div>
            </div>
            <div className="">
                <h1 data-aos="fade-up" className="text-5xl font-bold my-10 text-center lg:text-start">Soft Skills</h1>
                <div className="grid lg:grid-cols-2 grid-cols-1 space-y-10">
                    {
                        softSkills.map(softSkill =>
                            <div key={softSkill} className="mt-10 flex flex-col items-center justify-center" data-aos="fade-right">
                                <h2 className='text-3xl font-semibold' >{softSkill.name}</h2>
                                <ProgressBar
                                    width=""
                                    height="5px"
                                    fontColor="white"
                                    trackWidth="10"
                                    percentage={softSkill.percent}
                                    trackPathColor="white"
                                    trackBorderColor="black"
                                    hollowBackgroundColor="#333333"
                                    defColor={{
                                        fair: 'orangered',
                                        good: 'yellow',
                                        excellent: 'orange',
                                        poor: 'red',
                                    }}
                                />
                            </div>
                        )
                    }
                    {/* <div className="mt-10 flex flex-col items-center justify-center" data-aos="fade-right">
                        <h2 className='text-3xl font-semibold' >Communication</h2>
                        <ProgressBar
                            width=""
                            height="5px"
                            fontColor="white"
                            trackWidth="10"
                            percentage="85"
                            trackPathColor="grey"
                            trackBorderColor="black"
                            hollowBackgroundColor="#333333"
                            defColor={{
                                fair: 'orangered',
                                good: 'yellow',
                                excellent: '#3ABFF8',
                                poor: 'red',
                            }}
                        />
                    </div>
                    <div className="mt-10 flex flex-col items-center justify-center" data-aos="fade-left">
                        <h2 className='text-3xl font-semibold'>Team Work</h2>
                        <ProgressBar
                            width=""
                            height="5px"
                            fontColor="white"
                            trackWidth="10"
                            percentage="90"
                            trackPathColor="grey"
                            trackBorderColor="black"
                            hollowBackgroundColor="#333333"
                            defColor={{
                                fair: 'orangered',
                                good: 'yellow',
                                excellent: '#3ABFF8',
                                poor: 'red',
                            }}
                        />
                    </div>
                    <div className="mt-10 flex flex-col items-center justify-center" data-aos="fade-right">
                        <h2 className='text-3xl font-semibold'>Project Management</h2>
                        <ProgressBar
                            width=""
                            height="5px"
                            fontColor="white"
                            trackWidth="10"
                            percentage="90"
                            trackPathColor="grey"
                            trackBorderColor="black"
                            hollowBackgroundColor="#333333"
                            defColor={{
                                fair: 'orangered',
                                good: 'yellow',
                                excellent: '#3ABFF8',
                                poor: 'red',
                            }}
                        />
                    </div>
                    <div className="mt-10 flex flex-col items-center justify-center" data-aos="fade-left">
                        <h2 className='text-3xl font-semibold'>Creativity</h2>
                        <ProgressBar
                            width=""
                            height="5px"
                            fontColor="white"
                            trackWidth="10"
                            percentage="60"
                            trackPathColor="grey"
                            trackBorderColor="black"
                            hollowBackgroundColor="#333333"
                            defColor={{
                                fair: 'orangered',
                                good: 'yellow',
                                excellent: '#3ABFF8',
                                poor: 'red',
                            }}
                        />
                    </div> */}


                </div>
            </div>
        </div>
    );
};

export default Skills;