import styled from "styled-components";
import { downloaddataApi, downloadimgApi } from "../Services/Collection";
import { useState } from "react";
import { Button } from "antd";


const Instagramdownload=()=>{
const [link,setLink]=useState();
const [data,setData]=useState([]);
const[loading,setloading]=useState(false)
const downloadimag=async(e)=>{
  
    window.open(`http://192.168.1.70:5005/user/tarun1?url=${e}`)
    // const payload={
    //     "url":e

    // }
  
   
    // const req = await downloadimgApi(payload);

    
}


    const handleClick=async()=>{
        setloading(true)
        const req=await downloaddataApi(link)
  if(req.status===200){
 
   setData(req?.data?.src)
  }
  setloading(false)

    }
    return(
        <Mainpage>
        <h1>Instagram Video Download</h1>
        <Wrapper>
          
        <input className="input-box" onChange={(e)=>setLink(e.target.value)} type="text"/>
        <Button loading={loading} size="large" style={{background:"#e27d60",color:"white",borderRadius:"0 10px 10px 0"}}  onClick={()=>handleClick()}>Download</Button>
        </Wrapper>
        {
            data.length>0 &&
            <Content>
                {
                    data.map((e,i)=>(
                        
                        <div className="images-download" key={i}>
                            <img src={`http://192.168.1.70:5005/user/tarun1?url=${e}`} alt=""  className="image"/>
                           
                            <Button onClick={()=>downloadimag(e)} >Download</Button>
                        </div>
                    ))
                }
                

        </Content>
        }
        
        </Mainpage>
    )

}

export default Instagramdownload;

const Mainpage=styled.div`
text-align: center;
h1{
    margin:30px;
}
`
const Wrapper=styled.div`
display:flex;
justify-content:center;
align-items:center;

.input-box{
    width:400px;
    height:18px;
    border-radius:10px 0px 0px 10px;
    border:1px solid #e27d60;
    outline:none;
    padding:10px;
    font-size:20px;
}
.button-box{
    width:200px;
    
    border-radius:0px 10px 10px 0px;
    border:1px solid #e27d60;
    outline:none;
    padding:10px;
    font-size:20px;
    background-color:#e27d60;
    color:white;
    cursor:pointer;
}
`
const Content = styled.div`
.images-download{
    display:flex;
    justify-content:center;
    gap:30px;
    align-items:center;
    margin:20px 0px;
   .image{
    height:100px;
    width:100px;
   }
}

`