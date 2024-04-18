import { useState, useEffect } from "react";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

const Projects = () => {

    const [projects, setProjects] = useState([]);
    const [value, setValue] = useState(0);
    const [filteredProjects, setFilteredProjects] = useState([]);

    useEffect(() => {
        fetch("https://my-protfolio-server-gamma.vercel.app/projects")
            .then((res) => res.json())
            .then((data) => {
                setProjects(data);
            });
    }, []);

    useEffect(() => {
        // Filter projects based on the active tab
        if (value === 0) {
            // Show all projects
            setFilteredProjects(projects);
        } else if (value === 1) {
            // Filter React & Express projects
            const reactExpressProjects = projects.filter(
                (project) => project.type === "React"
            );
            setFilteredProjects(reactExpressProjects);
        } else if (value === 2) {
            // Filter PHP projects
            const phpProjects = projects.filter(
                (project) => project.type === "PHP"
            );
            setFilteredProjects(phpProjects);
        }
    }, [value, projects]);

    const handleChange = (event, newValue) => {
        console.log(newValue);
        setValue(newValue);
    };

    return (
        <div id="projects" className="my-24 ">
            <h1 className="text-5xl font-bold text-center my-10">Projects</h1>
            <Box
                sx={{
                    flexGrow: 1,
                    bgcolor: "background.paper",
                }}
            >
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="visible arrows tabs example"
                >
                    <Tab label="All" />
                    <Tab label="React & Express" />
                    <Tab label="PHP" />
                </Tabs>
            </Box>
            <div className="flex items-center justify-center bg-base-100 lg:mx-0 mx-10">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mt-5">
                    {filteredProjects.map((project, ind) => (
                        <div
                            data-aos="fade-down-left"
                            data-aos-delay={200 * ind}
                            key={project.projectID}
                            className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30"
                        >
                            <div className="h-72 w-full">
                                <img
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                                    src={project.project_banner}
                                    alt=""
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                                <h1 className="font-dmserif text-3xl font-bold text-white">
                                    {project.project_name}
                                </h1>
                                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    {project.project_summary}
                                </p>
                                <Link
                                    to={`/projects/projectsDetails/${project._id}`}
                                    className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"
                                >
                                    See More
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
