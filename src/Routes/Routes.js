import { Route, Routes } from "react-router-dom"
import Homes from "../pages/Home"
import Cars from "../pages/Cars";





import Instagramdownload from "../pages/Instagramdownload";

const PageRoutes=()=>{
    return(
        <Routes>
            <Route path="/" element={<Instagramdownload/>} />
            <Route path ="/cars" element={<Cars/>} />
           
           
       
    
            <Route path ="/download" element={<Instagramdownload/>}/>

        </Routes>
    )
}
export default PageRoutes;