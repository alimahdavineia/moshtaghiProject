import React, { useState, useEffect } from "react";
import axios from "axios";
import * as XLSX from "xlsx";
import { Form ,Button} from 'react-bootstrap';



const Reporter = () => {
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [subSubCategories, setSubSubCategories] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [dataRows, setDataRows] = useState([]);
  // const [fileName, setFileName] = useState("");

  const [dataArea, setDataArea] = useState("");
  const [dataNode, setDataNode] = useState("");
  const [dataPara, setDataPara] = useState("");
  const [dataLocation, setDataLocation] = useState("");


  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/areas/")
      .then((res) => setCategories(res.data));
      
  }, []);

  const fetchSubCategories = (categoryId) => {
    setSubSubCategories([]);
    axios
      .get(`http://127.0.0.1:8000/nodearea/${categoryId}`)
      .then((res) => setSubCategories(res.data));

       setDataArea(categoryId);
      
  };


  const fetchSubSubCategories = (subCategoryId) => {
    axios
      .get(`http://localhost:8000/assetnode/${subCategoryId}`)
      .then((res) => setSubSubCategories(res.data));
      setDataNode(subCategoryId);
  };

  const fetchSubSubSubCategories = (nodeId) => {
      setDataPara(nodeId);
  };

  const fetchLocation = (locationId) => {
      setDataLocation(locationId);
  };

  
  const handleStartDate = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDate = (e) => {
    setEndDate(e.target.value);
  };
 
  const fetchReport = () => {
    axios
      .get(
        //`http://localhost:8000/report/${dataArea}/${dataNode}/${dataPara}/${dataLocation}/${startDate}/${endDate}`
        // `http://127.0.0.1:8000/report/a2/r2/l/2023-02-01/2023-02-03`
        `http://localhost:8000/report`
      )
      .then((res) => setDataRows(res.data))
      .catch((err) => console.log(err.message));
    // const workBook = XLSX.utils.book_new();
    // const workSheet = XLSX.utils.json_to_sheet(dataRows);
    // XLSX.utils.book_append_sheet(workBook, workSheet, "Sheet1");
    // setFileName(`report-${moment().format("YYYY-MM-DD-HHmmss")}.xlsx`);
    // XLSX.writeFile(workBook, fileName); 
    // console.log(
    //   `http://localhost:8000/report/${myArea.area_name}/${myNode.node_code}/${myParam.asset_location}/${startDate}/${endDate}`
    // )
    
    const workbook = XLSX.utils.book_new();   
    const worksheet = XLSX.utils.json_to_sheet(dataRows);
    XLSX.utils.book_append_sheet(workbook, worksheet, 'TeleReport');
    // setFileName(`report.xlsx`);
    // XLSX.writeFile(workBook, fileName);
    XLSX.writeFile(workbook, `report.xlsx`);
  };

  return (
    <>
      <h1>Reporter Page</h1>

      <Form.Select onChange={(e) => fetchSubCategories(e.target.value)} aria-label="Default select example">
      <option> انتخاب آبرسانی/اتفاقات  </option>
      {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.area_name}
          </option>
          
        ))}
      </Form.Select>

      <Form.Select onChange={(e) => fetchSubSubCategories(e.target.value)} aria-label="Default select example">
      <option>انتخاب تاسیس مورد نظر</option>
      {subCategories.map((subCategory) => (
          <option key={subCategory.id} value={subCategory.id}>
            {subCategory.node_name}
          </option>
          
        ))}
      </Form.Select>


      <Form.Select onChange={(e) => fetchSubSubSubCategories(e.target.value)} aria-label="Default select example">
      <option>انتخاب تجهیز مورد نظر</option>
      {subSubCategories.map((subSubCategory) => (
          <option key={subSubCategory.id} value={subSubCategory.id}>
            {subSubCategory.id_devices}
          </option>

        ))}
      </Form.Select>

      <Form.Select onChange={(e) => fetchLocation(e.target.value)} aria-label="Default select example">
      <option>موقعیت تجهیز</option>
      {subSubCategories.map((subSubSubCategory) => (
          <option key={subSubSubCategory.id} value={subSubSubCategory.id}>
           {subSubSubCategory.asset_location}
          </option>

        ))}
      </Form.Select>



      <Form.Control type="date" onChange={handleStartDate} />
      <Form.Control type="date" onChange={handleEndDate} />

      <Button variant="primary" onClick={fetchReport} >Generate Report</Button>
   

    </>
  );
};

export default Reporter;
