import Header from "../components/Header";
import Menu from "../components/Menu";
import { Outlet } from "react-router-dom";

const Layout = () =>{

    return(
        <>
            <Header/>
            <Menu/>
            <Outlet/>
        </>
    );
};

export default Layout;