import { Outlet } from "react-router-dom";
import Navbar from "../Components/Home/Navbar/Navbar";
import Footer from "../Components/Home/Footer/Footer";
import useLoading from "../Hooks/useLoadding";
import Hold from "../Components/Shared/Hold";

const Main = () => {
    const isLoading = useLoading(1000)
    return (
        <>
            {
                isLoading ? <Hold text={"🚀 Launching the experience, please wait.."} /> :
                    <div>
                        <Navbar />
                        <Outlet />
                        <Footer />
                    </div>
            }
        </>
    );
};

export default Main;