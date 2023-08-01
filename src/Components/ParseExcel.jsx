import React, { useState } from "react";
import * as XLSX from "xlsx";

export const ParseExcel = () => {
  const [fileName, setFileName] = useState(null);

  const handleFile = async (e) => {
    const file = e.target.files[0];
    setFileName(file.name);
    const data = await file.arrayBuffer();
    const workbook = XLSX.read(data);

    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);

    console.log(jsonData);
  };

  return (
    <div>
      <h1>ParseExcel</h1>
      {fileName && (
        <p>
          FileName: <span>{fileName}</span>
        </p>
      )}
      <input type="file" onChange={(e) => handleFile(e)} />
    </div>
  );
};
