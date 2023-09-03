import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Table,Button} from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";





const TeamPage = () => {
  const [allFails, setAllFails] = useState([]);
   
  useEffect(() => {
   
    axios
      .get("http://localhost:8000/fails/1")
      // .then((res)=>console.log(res.data));
      .then((res) => setAllFails(res.data));
      
      
  }, []);


 

const returnFailPage = (failId) => {

  console.log(failId)
         
        
    };
const compliteFailPage = (failId) => {
      
      // axios
      //   .get(`http://127.0.0.1:8000/nodearea/${failsId}`)
      //   .then((res) => setSubCategories(res.data));
      //console.log(failId)
  
         
        
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
        {allFails.map((fail)=>(

        <tr>
          <td>{fail.id_TbNodes}</td>
          <td>{fail.id_TbAssets}</td>
          <td>{fail.id_TbFailDevices}  </td>
          <td>{fail.date_register} </td>
          <td>
          <Button
                variant="warning"
              
                aria-controls="example-collapse-text"
              >   <Link 
              to={{
              
                pathname: `/compilteTeamPage/${fail.id}`,
                state: { myfail: fail }
              }}
               >تکمیل</Link> </Button>
              |
          <Button
                variant="danger"
                onClick={() => returnFailPage(fail.id)}
                aria-controls="example-collapse-text"
              > 
             <Link to={`/compilteTeamPage/${fail.id}`} >برگشت</Link>
               </Button>


          </td>

        </tr>
        
        ))}

      </tbody>
    </Table>




</>

    
  );
}

export default TeamPage;
