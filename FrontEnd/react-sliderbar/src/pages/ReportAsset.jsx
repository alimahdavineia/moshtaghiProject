import React,  {useState, useEffect}  from "react";
import axios from "axios";
import { Table, Container, Row, Col, Input, Button } from "reactstrap";
import {CSVLink}  from "react-csv";

const ReportAsset = () => {
  const [data, setData] = useState([]); // state to store data from API request
  const [filteredData, setFilteredData] = useState([]); // state to store filtered data for search feature
  const [searchTerm, setSearchTerm] = useState(""); // state to store search term
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [selectedSubcategoryId, setSelectedSubcategoryId] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/areas/')
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    if (selectedCategoryId) {
      fetch(`http://127.0.0.1:8000/nodearea/${selectedCategoryId}`)
        .then(response => response.json())
        .then(data => setSubcategories(data))
        .catch(error => console.error(error));
    } else {
      setSubcategories([]);
    }
  }, [selectedCategoryId]);
  
  useEffect(() => {
    if(selectedSubcategoryId){
      async function fetchData() {
        try {
          const response = await axios.get(`http://localhost:8000/assetnode/${selectedSubcategoryId}`);
          setData(response.data);
          setFilteredData(response.data);
        } catch (error) {
          console.log(error);
        }
      }
      fetchData();
    }

  }, [selectedSubcategoryId]);

  const handleCategoryChange = (event) => {
    const categoryId = event.target.value;
    setSelectedCategoryId(categoryId);
    setSelectedSubcategoryId(null);
  };

  const handleSubcategoryChange = (event) => {
    const subcategoryId = event.target.value;
    setSelectedSubcategoryId(subcategoryId);
  };
  
  
  const headers = [ // headers for Excel output
    { label: "Area", key: "id_areas" },
    { label: "NodeArea", key: "id_nodes" },
    { label: "NodeCode", key: "id_devices" },
    { label: "NodeCode", key: "asset_naumber" },
    { label: "NodeCode", key: "asset_location" }
  ];

  return (
    <Container>

 

      <Col>

      <Row>
      <label htmlFor="categorySelect">Category:</label>
      <select name="categorySelect" id="categorySelect" value={selectedCategoryId} onChange={handleCategoryChange}>
        <option value="">--ناحیه/آبرسانی--</option>
        {categories.map(category => (
          <option key={category.id} value={category.id}>{category.area_name}</option>
        ))}
      </select> 
      
      <label htmlFor="subcategorySelect">Subcategory:</label> 
      <select name="subcategorySelect" id="subcategorySelect" value={selectedSubcategoryId} onChange={handleSubcategoryChange}>
        <option value="">-- نام تاسیس / نقطه --</option>
        {subcategories.map(subcategory => (
          <option key={subcategory.id} value={subcategory.id}>{subcategory.node_name}</option>
        ))}
      </select> 
      </Row>
        <Table>
          <thead>
            <tr>
              <th>Area</th>
              <th>Node</th>
              <th>Device</th>
              <th>Number</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map(item => (
              <tr key={item.id}>
                <td>{item.id_areas}</td>
                <td>{item.id_nodes}</td>
                <td>{item.id_devices}</td>
                <td>{item.asset_naumber}</td>
                <td>{item.asset_location}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Row className="my-3">
       
          <Col xs={6} className="text-right">
            <CSVLink data={filteredData} headers={headers}>
              <Button color="primary">Export to CSV</Button>
            </CSVLink>
          </Col>
        </Row>
      </Col>
    </Container>
  );
};

export default ReportAsset;