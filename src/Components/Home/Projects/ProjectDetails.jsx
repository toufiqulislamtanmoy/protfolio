import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import ReactPlayer from 'react-player';
import { FaGithub, FaGlobe } from "react-icons/fa";

const ProjectDetails = () => {
    const { id } = useParams();
    const [project, setProject] = useState([]);
    useEffect(() => {
        fetch(`https://my-protfolio-server-gamma.vercel.app/projects/${id}`).then(res => res.json()).then(data => {
            console.log(data);
            setProject(data);
        })
    }, [id])
    const {
        project_name,
        project_summary,
        project_preview_url,
        tools_and_technology,
        live_site_link,
        client_side_link,
        server_side_link,
        features
    } = project;
    console.log(project);
    return (
        <div className="mx-5">
            <h2 className="text-5xl font-bold text-center my-10">{project_name}</h2>
            <div className="card bg-base-100 ">
                <div className="lg:w-[50%] w-full mx-auto shadow-2xl p-5  bg-secondary rounded-2xl">
                    <ReactPlayer
                        url={project_preview_url}
                        height={window.innerWidth > 600 ? 450 : 250}
                        width="100%"
                        controls={true}
                        config={{
                            youtube: {
                                playerVars: { showinfo: 1 },
                            },
                        }}
                    />
                </div>
                <div className="card-body space-y-5">
                    <h2 className="card-title">
                        {project_name}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{project_summary}</p>
                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold">Features</h2>
                        {features &&
                            features.map((feature, ind) =>
                                <div key={ind} className="block badge badge-outline lg:badge lg:badge-outline">{feature}</div>
                            )
                        }
                    </div>
                    <div className="card-actions">
                        <h2 className="text-xl font-semibold">Tools & Technologies</h2>
                        <ul className="steps steps-vertical lg:steps-horizontal">
                            {tools_and_technology &&
                                tools_and_technology.map((tt, ind) =>
                                    <li key={ind} className="step step-primary hover:step-accent">{tt}</li>
                                )
                            }
                        </ul>

                    </div>

                    <div className="py-10">
                        <div className="lg:flex gap-4 items-center justify-around">
                            <Link to={live_site_link} className="flex flex-col items-center justify-center gap-4  hover:scale-125 hover:text-[#00eeff] cursor-pointer transition duration-150 ease-out hover:ease-in" spy={true} smooth={true}  >
                                <span className="text-4xl text-center"><FaGlobe /></span>
                                <span className="text-xl">Live Preview</span>

                            </Link>
                            <Link to={client_side_link} className="flex flex-col items-center justify-center gap-4  hover:scale-125 hover:text-[#00eeff] cursor-pointer text-4xl transition duration-150 ease-out hover:ease-in" spy={true} smooth={true}  >
                                <span className="text-4xl text-center"><FaGithub /></span>
                                <span className="text-xl">Client Source Code</span>
                            </Link>
                            <Link to={server_side_link} className="flex flex-col items-center justify-center gap-4  hover:scale-125 hover:text-[#00eeff] cursor-pointer text-4xl transition duration-150 ease-out hover:ease-in" spy={true} smooth={true}  >
                                <span className="text-4xl text-center"><FaGithub /></span>
                                <span className="text-xl">Server Source Code</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
