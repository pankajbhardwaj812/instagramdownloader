import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getAbout } from "../api/Collection";
import { useEffect, useState } from "react";

const Homes=()=>{
    const navigate=useNavigate();
    const [aboutinfo,setaboutinfo]=useState();


    const About=async()=>{
      const req= await getAbout()
      if(req?.data){
        setaboutinfo(req.data?.attributes)
      }


    }
    useEffect(()=>{
      About()
    },[])
   
    
    return(
        <Main>
        <h1>Strapi Demo </h1>
        <p className="sub-heading">Explore your City</p>
        <div className="main-box">

        <div className="box">
          <img
            alt="img"
            src="https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <p className="title" onClick={()=>navigate("/cars")}>Cars</p>
        </div>
        <div className="box">
          <img
            alt="img"
           src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
         
          <p className="title">Hotels</p>
        </div>
        <div className="box">
          <img
            alt="img"
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
          
          <p className="title">Restaurants</p>
        </div>
        </div>

        <div className="About">
          <p className="title">{aboutinfo?.Title}</p>
          <p className="about">{aboutinfo?.About}</p>

        </div>
      </Main>
    )
}
export default Homes
const Main = styled.div`
  background: #f9fafb;
  min-height: 100vh;
  h1 {
    margin: 0;
    padding: 20px;
    text-align: center;
  }
  .sub-heading {
    color: #e27d60;
    font-size: 50px;
    text-align: center;
    padding: 0;
  }
  .main-box{
    margin: 40px 20px;
    display:grid;
    grid-template-columns: repeat(auto-fit,minmax(380px,1fr));

  }
  .box {
    width: 380px;
    background-color: white;
    padding: 10px;
    border-radius: 10px;
    img {
      width: 100%;
      height: 240px;
      border-radius: 5px;
    }
    .title {
      font-size: 40px;
      font-weight: 600;
      text-align: center;
      color: #e27d60;
      cursor: pointer;
    }
  }
  .About{
   display:flex;
   justify-content: center;
   flex-direction: column;
   align-items: center;
   margin:20px 80px;
    
  }
  .title{
    font-size: 40px;
    font-weight: 600;
    text-align: center;
    color: #333333;
    cursor: pointer;
    margin:10px 0px;
 
  }
  .about{
    font-size:20px;
    color: #333333;
    

    font-weight:500;

  }
`;
