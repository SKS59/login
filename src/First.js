import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Home from "./Home";
import Signup from "./Signup";

function First() {
    return ( <>
    <BrowserRouter>
        <Routes>
            <Route index path="/" element={<App/>} />
            <Route path="/home" element={<Home/>}/>
            <Route path="/signup" element={<Signup/>}/>
        </Routes>
    </BrowserRouter>
    </> );
}

export default First;