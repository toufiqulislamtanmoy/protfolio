import { Outlet } from "react-router-dom";
import ProjectNav from "../Components/Shared/ProjectNav";
import Footer from "../Components/Home/Footer/Footer";

const ProjectLayout = () => {
    return (
        <>
           <ProjectNav/>
           <Outlet/>
           <Footer/> 
        </>
    );
};

export default ProjectLayout;