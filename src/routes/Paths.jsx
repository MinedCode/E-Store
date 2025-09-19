import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import ProductAdd from "../pages/ProductAdd";
import ProductEdit from "../pages/ProductEdit";
import NotFound from "../pages/NotFound";
import Products from "../pages/Products";
import Register from "../pages/Register";
import Login from "../pages/Login";


const Paths = () =>{

    return(

        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout/>}>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/productadd" element={<ProductAdd/>}/>
                        <Route path="/productedit/:id" element={<ProductEdit/>}/>
                        <Route path="/products" element={<Products/>}/>
                        <Route path="/login" element={<Login/>}/>
                    </Route>
                    <Route path="/registers" element={<Register/>}/>
                    <Route path="/*" element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
};

export default Paths;