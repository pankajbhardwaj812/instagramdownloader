import { useState } from "react"

const Convert=()=>{
    const [jsonData,setjsonData]=useState(null);
    const handlechange=(e)=>{
        const file=e.target.files[0];
        const reader=new FileReader();
        const converttoJson=(csvData)=>{
            const lines=csvData.split('\n');
            const headers=lines[0].split(",");
            const result=[];
            for(let i=0; i<headers.length; i++){
                const obj={};
                const currentline=lines[i].split(",");
                for(let j=0; j<headers.length; j++){
                    obj[headers[j].trim()]=currentline[j].trim();
                }
                result.push(obj);
            }
            return result;
            

        }
        
        reader.onload=(e)=>{
            const csvData=e.target.result;
            const jsonData=converttoJson(csvData);
            setjsonData(jsonData)
           
        }
        reader.readAsText(file);

    }

    console.log(JSON.stringify(jsonData,null,2))
    return(
        <>
         <p>convert</p>
        <input type="file" accept=".csv" onChange={handlechange} />

        </>
       
    )


}
export  default Convert