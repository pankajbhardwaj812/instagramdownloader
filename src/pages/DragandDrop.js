import { Button, Upload, message } from "antd";
import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import styled from "styled-components";

const Draganddrop=()=>{
    const fileTypes = ["JPG", "PNG", "GIF","JPEG"];
    const [file, setFile] = useState();
    const handleChange = (file) => {
      setFile(Array.from(file));
    };
    console.log(file)

    const props = {
        name: 'file',
        headers: {
          authorization: 'authorization-text',
        },
        onChange(info) {
          if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
          }
          if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
          } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
          }
        },
        progress: {
          strokeColor: {
            '0%': '#108ee9',
            '100%': '#87d068',
          },
          strokeWidth: 3,
          format: (percent) => percent && `${parseFloat(percent.toFixed(2))}%`,
        },
      };
    return(
        <Draggerupload>
        {/* <FileUploader    multiple   handleChange={handleChange} name="file" types={fileTypes}  />
        <div style={{textAlign:"start",margin:"20px"}}>
        {file?.map((e,i)=>(
            <>
            <p > {i+1}.{e.name}</p> <br></br>
            </>
           
           
         
        ))}
           </div> */}
            <Upload {...props}>
    <Button >Click to Upload</Button>
  </Upload>

        </Draggerupload>
    )

}
export default Draganddrop;

const Draggerupload=styled.div`
display:flex;
height:100vh;
align-items:center;
justify-content:center;
flex-direction:column;
`