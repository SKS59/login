import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Home from "./Home";

function First() {
    return ( <>
    <BrowserRouter>
        <Routes>
            <Route index path="/" element={<App/>} />
            <Route path="/home" element={<Home/>}/>
        </Routes>
    </BrowserRouter>
    </> );
}

export default First;