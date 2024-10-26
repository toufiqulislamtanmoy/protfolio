 
import { Link } from 'react-router-dom';

import image from "../../../assets/aks.png"
const Experience = () => {

    return (
        <div id='experience' className=" my-24 gap-5" >

            <div className="" >
                <h1 className="text-5xl font-bold text-center my-10" data-aos="fade-left ">Work Experience</h1>
                <div className="card text-gray-300 bg-gray-900 shadow-xl my-10" data-aos="flip-right">
                    <div className="card-body">
                        <h2 className="card-title">Junior React Js Developer <span className='card-compact text-teal-400 text-sm'>March 2023-Present</span>
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
                        As a Junior Front-End Developer at Ankabut Software, I convert UI designs into responsive websites, integrate API data, and adhere to best practices in front-end development to ensure high-quality user experiences.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;