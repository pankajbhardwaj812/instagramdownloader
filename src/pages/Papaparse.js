import { Parser } from 'hot-formula-parser';
import React, { useState } from 'react';
import { read, utils, writeFileXLSX } from 'xlsx'


function ExcelSheetReader() {
    const [data, setData] = useState([]);
    const [result, setResult] = useState([]);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = (e) => {
            const data = new Uint8Array(e.target.result);
            const workbook = read(data, { type: 'array' });
            const sheetName = workbook.SheetNames[0]; // Assuming only one sheet
            const worksheet = workbook.Sheets[sheetName];
            const parsedData = utils.sheet_to_json(worksheet, { header: 1 });

            setData(parsedData);
        };

        reader.readAsArrayBuffer(file);
    };

    const evaluateFormulas = () => {
        const parser = new Parser();

        const evaluatedData = data.map(row => {
            return row.map(cell => {
                if (typeof cell === 'string' && cell.startsWith('=')) {
                    parser.parse(cell.slice(1));
                    return parser.getResult();
                } else {
                    return cell;
                }
            });
        });

        setResult(evaluatedData);
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={evaluateFormulas}>Evaluate Formulas</button>
            <table>
                <tbody>
                    {result.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((cell, cellIndex) => (
                                <td key={cellIndex}>{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ExcelSheetReader;
