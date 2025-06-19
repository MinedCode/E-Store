import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import ProductAdd from "../Pages/ProductAdd";
import ProductEdit from "../Pages/ProductEdit";

const Paths = () =>{

    return(

        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/productadd" element={<ProductAdd/>}/>
                        <Route path="/productedit" element={<ProductEdit/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
};

export default Paths;