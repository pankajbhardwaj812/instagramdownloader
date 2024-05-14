import { Workbook } from "@fortune-sheet/react";
import "@fortune-sheet/react/dist/index.css";
import { useEffect, useState } from "react";


const FortuneSheet = () => {
  const [data, setData] = useState([]); // State to store file content
  const [celldata, setCelldata] = useState([]); // State to store processed data
  const settings = {
    data: [
      {
        name: "Sheet1",
        celldata:  celldata,
       
      },
    ], // sheet data
    onChange: (data) => {}, // onChange event
    lang: "zh", // set language
    // More other settings...
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = (e) => {
      const fileContent = e.target.result;
      setData(fileContent);
    };
  };

  useEffect(() => {
    if (data) {
      const processedData = [];
      if (data.includes("\n")) {
     
        const rows = data.split("\n").map((row) => row.split(","));
        rows.forEach((row, rowIndex) => {
          row.forEach((value, colIndex) => {
            processedData.push({
              r: rowIndex,
              c: colIndex,
              v: {
                ct: { fa: "General", t: "g" }, // Default formatting
                m: value, // No metadata
                v: value,
              },
            });
          });
        });
      } else {
        // Handle other potential data formats (if applicable)
        console.warn("Unsupported data format. Adjust parsing logic.");
      }
      setCelldata(processedData); // Update processed data state
    }
  }, [data]);
  console.log(celldata, "data");
  return (
    <div
      style={{
        width: "100%",
        height: "90vh",
      }}
    >
      <input type="file" onChange={handleFileChange} />
      {celldata && <Workbook {...settings} />}
    </div>
  );
};

export default FortuneSheet;
