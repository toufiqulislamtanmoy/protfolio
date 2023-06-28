import { Outlet } from "react-router-dom";
import Navbar from "../Components/Home/Navbar/Navbar";
import Footer from "../Components/Home/Footer/Footer";

const Main = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer/>
        </>
    );
};

export default Main;