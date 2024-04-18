import 'aos/dist/aos.css';
import ProgressBar from 'react-animated-progress-bar';
import useSoftSkills from '../../../Hooks/useSoftSkills';
import useTechskills from '../../../Hooks/useTechskills';
const Skills = () => {



    const { softSkills } = useSoftSkills();
    const { techskills } = useTechskills();

    console.log("Tech Skills is here", techskills);

    return (
        <div id='skills' className='my-10' data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
            <div className="">

                <h1 className="text-5xl font-bold my-10">Technical Skills</h1>
                <div id='technicalSkills' className='w-full grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
                    {
                        techskills.map((ts, ind) =>
                            <div key={ts._id}
                                className='mx-5'
                                data-aos="fade-down-left"
                                data-aos-delay={200 * ind}
                            >
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
                </div>

            </div>
            <div className="">
                <h1 data-aos="fade-up" className="text-5xl font-bold my-10 text-center lg:text-start">Soft Skills</h1>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 space-y-10">
                    {
                        softSkills.map((softSkill, ind) =>
                            <div key={softSkill} className="mt-10 flex flex-col items-center justify-center"
                                data-aos="fade-right" data-aos-delay={200 * ind}>
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



                </div>
            </div>
        </div>
    );
};

export default Skills;