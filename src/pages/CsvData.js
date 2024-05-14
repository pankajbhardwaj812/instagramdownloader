import React, { useState } from 'react';
import Papa from 'papaparse'; // For parsing CSV data

const CsvDatafile = () => {
    {
        const [csvData, setCsvData] = useState([]);
        const [totalValue, setTotalValue] = useState(0);
      
        // Function to handle file selection
        const handleFileSelect = (e) => {
          const file = e.target.files[0];
          if (file) {
            const reader = new FileReader();
            reader.onload = () => {
              const parsedData = Papa.parse(reader.result, { header: true }).data;
              setCsvData(parsedData);
              calculateTotalValue(parsedData);
            };
            reader.readAsText(file);
          }
        };
      
        // Function to calculate total value
        const calculateTotalValue = (data) => {
          let total = 0;
          data.forEach((row) => {
            Object.values(row).forEach((value) => {
              total += parseFloat(value) || 0;
            });
          });
          setTotalValue(total);
        };
      
        // Function to handle changes to CSV data
        const handleChange = (newValue, rowIndex, columnName) => {
          const newData = [...csvData];
          const oldValue = parseFloat(newData[rowIndex][columnName]) || 0;
          const change = parseFloat(newValue) - oldValue;
          const isPercentage = newValue.includes('%');
      
          // If the new value is a percentage, calculate the change based on the total value
          if (isPercentage) {
            const percentageChange = parseFloat(newValue) / 100;
            const updatedData = newData.map((row, index) => {
              const newRow = { ...row };
              Object.keys(newRow).forEach((key) => {
                if (index !== rowIndex) {
                  newRow[key] = parseFloat(newRow[key]) + (parseFloat(newRow[key]) * percentageChange);
                }
              });
              return newRow;
            });
            setCsvData(updatedData);
            calculateTotalValue(updatedData);
          } else {
            newData[rowIndex][columnName] = newValue;
            setCsvData(newData);
            setTotalValue(totalValue + change);
          }
        };
      
        return (
          <div>
            <input type="file" accept=".csv" onChange={handleFileSelect} />
            {
                csvData.length>0 &&
                <table>
                <thead>
                  <tr>
                    {Object.keys(csvData[0] || {}).map((columnName, index) => (
                      <th key={index}>{columnName}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {csvData.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {Object.keys(row).map((columnName, columnIndex) => (
                        <td key={columnIndex}>
                          <input
                            type="text"
                            value={row[columnName]}
                            onChange={(e) => handleChange(e.target.value, rowIndex, columnName)}
                          />
                        </td>
                      ))}
                    </tr>
                  ))}
                  <tr>
                    <td colSpan={Object.keys(csvData[0]).length}>Total Value: {totalValue}</td>
                  </tr>
                </tbody>
              </table>
            }
           
          </div>
        );
      };

}

export default CsvDatafile;
