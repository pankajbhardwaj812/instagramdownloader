import { getApi, postApi } from "./Method"

const downloadlink="/user/tarun"
const donwloadimg="/user/tarun1"

 export const downloaddataApi=(payload)=>{
    return getApi(`${downloadlink}?url=${payload}`)
}

export const downloadimgApi=(payload)=>{
    console.log(payload,"package")
    return postApi(donwloadimg,payload)
}