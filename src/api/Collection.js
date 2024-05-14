import { getApi } from "./Mehtods"

const carCollection="api/cars?populate=*"

const about ="api/about"

 export const getcarCollection=(payload)=>{
     return getApi(`${carCollection}`)
 }

 export const getAbout=()=>{
            return getApi(about)
 }