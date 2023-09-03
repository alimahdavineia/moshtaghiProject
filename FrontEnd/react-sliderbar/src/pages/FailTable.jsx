import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Table,Collapse,Button} from "react-bootstrap";
import axios from "axios";
import SuccessAlert from "../component/SuccessAlert";




const FailTable = () => {
  const [allFails, setAllFails] = useState([]);
  const [codeRefferalType, setCodeRefferalType] = useState([]);
  const [openCollapseTeam, setOpenCollapseTeam] = useState(false);
  const [openCollapseNazer, setOpenCollapseNazer] = useState(false);
  const [openCollapseDiscription, setOpenCollapseDiscription] = useState(false);
  
  
 
  
  useEffect(() => {
   
    axios
      .get("http://localhost:8000/fails/")
      // .then((res)=>console.log(res.data));
      .then((res) => setAllFails(res.data));
      
      
  }, []);


  const refferalTaskTeam = (failsId,teamCode) => {
    SuccessAlert(true);
    
    axios.get(`http://127.0.0.1:8000/reffraltype/${teamCode}`)
     .then((res)=> setCodeRefferalType(res.data)); 
    
      // .then((res) => setCodeRefferalType(res.data[0].id));
    codeRefferalType.map((data)=>console.log(data.id));

 
    let formField =new FormData()
    formField.append('id_fail_registers',failsId);
    formField.append('id_reffera_type',"2");
    formField.append('description',"ارجاع به ");

    
    axios({
      method:'post',
      url:`http://127.0.0.1:8000/setTaskRefferal/`,
      data : formField,
    }).then((response) => {
      console.log("response1") 
      console.log(response.data) 
      console.log("response2") 


      if (response.data=="Save TaskRefferal"){
        console.log("Save TaskRefferal")
        
      }else if(response.data=="Not Save TaskRefferal"){
        console.log("Not Save TaskRefferal")
      }
    })    
    };
const refferalTaskNazer = (failsId) => {
      
      // axios
      
      //   .get(`http://127.0.0.1:8000/nodearea/${failsId}`)
      //   .then((res) => setSubCategories(res.data));
  
      console.log("TaskNazer")
         
        
    };


  return (
<>
   
    <Table id="FailTable" striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>نام تاسیس</th>
          <th>نام تجهیز </th>
          <th> ایراد مشاهده شده </th>
          <th> زمان اعلام خرابی </th>
          <th> ارجاع </th>
        </tr>
      </thead>
      <tbody>
        {allFails.map((fails)=>(

        <tr>
          <td>{fails.id_TbNodes}</td>
          <td>{fails.id_TbAssets}</td>
          <td>{fails.id_TbFailDevices}  </td>
          <td>{fails.date_register} </td>
          <td>
              <Button
                variant="primary"
                onClick={() => setOpenCollapseTeam(!openCollapseTeam)}
                aria-controls="example-collapse-text"
                aria-expanded={openCollapseTeam}
              >ارجاع به اکیپ ها</Button>

              <Collapse in={openCollapseTeam}>
              <div id="example-collapse-text">
              <Button size="md" variant="secondary" onClick={() => refferalTaskTeam(fails.id,"T1")}> T1 </Button>
              <Button size="md" variant="success" onClick={() => refferalTaskTeam(fails.id,"T2")}> T2 </Button>
              <Button size="md" variant="warning" onClick={() => refferalTaskTeam(fails.id,"T3")}>T3 </Button>
              <Button size="md" variant="danger" onClick={() => refferalTaskTeam(fails.id,"T4")}>T4 </Button>
              <Button size="md" variant="primary" onClick={() => refferalTaskTeam(fails.id,"T5")}>T5 </Button>
              </div>
              </Collapse>
||
              <Button
                variant="success"
                onClick={() => setOpenCollapseNazer(!openCollapseNazer)}
                aria-controls="example-collapse-text"
                aria-expanded={openCollapseNazer}
              >ارجاع به ناظرین</Button>

              <Collapse in={openCollapseNazer}>
              <div id="example-collapse-text">
              <Button size="md" variant="secondary" onClick={() => refferalTaskNazer(fails.id,"N1")}>N1</Button>
              <Button size="md" variant="success" onClick={() => refferalTaskNazer(fails.id,"N2")}>N2  </Button>
              <Button size="md" variant="warning" onClick={() => refferalTaskNazer(fails.id,"N3")}>N3 </Button>
              </div>
              </Collapse>
||
              <Button
                variant="warning"
                onClick={() => setOpenCollapseDiscription(!openCollapseDiscription)}
                aria-controls="example-collapse-text"
                aria-expanded={openCollapseDiscription}
              >توضیحات  </Button>

              <Collapse in={openCollapseDiscription}>
              <div id="example-collapse-text">
              {fails.fail_discription}
              </div>
              </Collapse>

          </td>
        </tr>
        ))}

      </tbody>
    </Table>




</>

    
  );
}

export default FailTable;
