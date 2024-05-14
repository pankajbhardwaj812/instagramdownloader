import { Route, Routes } from "react-router-dom"
import Homes from "../pages/Home"
import Cars from "../pages/Cars";
import Convert from "../pages/Convertcsv";
import ExcelSheetReader from "../pages/Papaparse";
import FortuneSheet from "../pages/Fortunesheet";

import CsvDatafile from "../pages/CsvData";
import Draganddrop from "../pages/DragandDrop";
import Instagramdownload from "../pages/Instagramdownload";

const PageRoutes=()=>{
    return(
        <Routes>
            <Route path="/" element={<Instagramdownload/>} />
            <Route path ="/cars" element={<Cars/>} />
            <Route path ="/convert" element={<Convert/>} />
            <Route path ="/json" element={< ExcelSheetReader/>} />
            <Route path ="/fortune-sheets" element={<FortuneSheet/>}/>
            <Route path ="/csv" element={<CsvDatafile/> }/>
            <Route path ="/draganddrop" element={<Draganddrop/>} />
            <Route path ="/download" element={<Instagramdownload/>}/>

        </Routes>
    )
}
export default PageRoutes;