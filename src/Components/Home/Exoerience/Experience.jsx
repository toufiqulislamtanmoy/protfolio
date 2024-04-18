
import { Link } from 'react-router-dom';

import image from "../../../assets/aks.png"
const Experience = () => {

    return (
        <div id='experience' className=" my-24 gap-5" >

            <div className="" >
                <h1 className="text-5xl font-bold text-center my-10" data-aos="fade-left ">Work Experience</h1>
                <div className="card text-gray-300 bg-gray-900 shadow-xl my-10" data-aos="flip-right">
                    <div className="card-body">
                        <h2 className="card-title">Junior React Js Developer <span className='card-compact text-teal-400 text-sm'>DEC 2023-Present</span>
                        </h2>
                        <div className='flex items-start gap-3 '>
                            <img className='w-12 h-12 ' src={image} alt="" />
                            <div>
                                <Link to={""} className='hover:underline'>
                                    <span className='text-teal-400'>Ankabut Software</span>
                                </Link>
                                <p>Rapidly expanding software firm delivering seamless user experiences with lightning speed.</p>

                            </div>
                        </div>
                        <h4 className='card-compact text-teal-400'></h4>
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