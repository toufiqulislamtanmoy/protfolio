import { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";
const Projects = () => {
    AOS.init();
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('https://my-protfolio-server-gamma.vercel.app/projects')
            .then(res => res.json())
            .then(data => {
                setProjects(data);
            });
    }, []);

    return (

        <div id='projects' className="my-24 ">
            <h1 className="text-5xl font-bold text-center my-10">Recent Projects</h1>
            <div  className="flex items-center justify-center bg-base-100 lg:mx-0 mx-10">
                <div  className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mt-5">
                    {
                        projects.map(project =>
                            <div data-aos="fade-down-left" key={project.projectID} className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                                <div className="h-96 w-full">
                                    <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={project.project_banner} alt="" />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                                <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                                    <h1 className="font-dmserif text-3xl font-bold text-white">{project.project_name}</h1>
                                    <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">{project.project_summary}</p>
                                    <Link to={`/projects/projectsDetails/${project._id}`} className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</Link>
                                    
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>

        // <div id='projects' classNameName="my-10 mx-5 lg:mx-0">
        //     <h1 classNameName="text-5xl font-bold text-center my-10">Projects</h1>
        //     <div data-aos="fade-down-right" classNameName="grid lg:grid-cols-3 grid-cols-1 gap-5">
        //         {projects.map(project => (
        //             <div
        //                 key={project.projectID}
        //                 classNameName={`card w-full bg-base-100 shadow-xl image-full ${isHovered === project.projectID ? 'hovered' : ''
        //                     }`}
        //                 onMouseEnter={() => setIsHovered(project.projectID)}
        //                 onMouseLeave={() => setIsHovered(null)}
        //                 style={{ height: '300px' }}
        //             >
        //                 <figure>
        //                     <img src={project.project_banner} alt="Shoes" />
        //                 </figure>
        //                 <div classNameName="card-body">
        //                     {isHovered === project.projectID && (
        //                         <>
        //                             <h2 classNameName="card-title">{project.project_name}</h2>
        //                             <p>{project.project_summary}</p>
        //                             <div classNameName="card-actions items-center justify-center">
        //                                 <Link to={`/projectsDetails/${project.projectID}`}>
        //                                     <FaArrowCircleUp classNameName="text-2xl" />
        //                                 </Link>
        //                             </div>
        //                         </>
        //                     )}
        //                 </div>
        //             </div>
        //         ))}
        //     </div>
        // </div>
    );
};

export default Projects;
