import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import { Button} from 'react-bootstrap';




function Asset() {
  const [assets, setAssets] = useState([]);
  const [filterArea, setFilterArea] = useState([]);
  const [filterNode, setFilterNode] = useState([]);
  const [filterDevice, setFilterDevice] = useState([]);
  const [filterModel, setFilterModel] = useState([]);
  const [filterAssets, setFilterAssets] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get("http://127.0.0.1:8000/assets/");
      setAssets(data);
    }
    fetchData();
  }, []);
  
  const handleFilterChangeArea= (enent)=>{
    setFilterArea(event.target.value);
  }
  const handleFilterChangeNode= (enent)=>{
    setFilterNode(event.target.value);
  }
  const handleFilterChangeDevice= (enent)=>{
    setFilterDevice(event.target.value);
  }
  const handleFilterChangeModel= (enent)=>{
    setFilterModel(event.target.value);
  }
  const handleFilterChangeAssets= (enent)=>{
    setFilterAssets(event.target.value);
  }

  const MyAssets = assets.filter((item)=>
          item.asset_number.toString().toLowerCase().includes(filterAssets.toString().toLowerCase()) && 
          item.id_nodes.toString().toLowerCase().includes(filterNode.toString().toLowerCase()) &&
          item.id_areas.toString().toLowerCase().includes(filterArea.toString().toLowerCase()) &&
          item.id_devices.toString().toLowerCase().includes(filterDevice.toString().toLowerCase()) &&
          item.id_modelCopmanys.toString().toLowerCase().includes(filterModel.toString().toLowerCase()) 


  );



  return (

    <Table id="FailTable" striped bordered hover variant="dark">
      <thead>
            <tr>
              <th><input type="text" value={filterArea} onChange={handleFilterChangeArea} /> </th>
              <th><input type="text" value={filterNode} onChange={handleFilterChangeNode} /> </th>
              <th><input type="text" value={filterDevice} onChange={handleFilterChangeDevice} /> </th>
              <th><input type="text" value={filterModel} onChange={handleFilterChangeModel} /> </th>
              <th></th>
              <th><input type="text" value={filterAssets} onChange={handleFilterChangeAssets} /> </th>
            </tr>

           <tr>
              <th>  آبرسانی/منطقه</th>
              <th> نام نقطه / محل استقرار</th>
              <th> نام تجهیز </th>
              <th> مدل تجهیز </th>
              <th>تعداد </th>
              <th>شماره اموال </th>
              <th> ویرایش </th>
              
           </tr>
      </thead>
      <tbody>
        {MyAssets.map(asset =>(
            <tr>
            <td>{asset.id_areas}</td>
            <td>{asset.id_nodes}</td>
            <td>{asset.id_devices}</td>
            <td>{asset.id_modelCopmanys}</td>
            <td>{asset.No_Assets}</td>
            <td>{asset.asset_number}</td>
            <td> <Button variant="succes"> ویرایش </Button></td> 
          </tr>

        ))}
      

      </tbody>
    </Table>
 
  );
}

export default Asset;
