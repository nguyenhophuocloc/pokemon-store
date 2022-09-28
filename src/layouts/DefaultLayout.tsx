import { Outlet } from "react-router";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const DefaultLayout = () => {
    return (<>
        <Header />
        <Outlet />
        <ToastContainer />
        <Footer />
    </>);
}

export default DefaultLayout;