import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams , Link } from 'react-router-dom'
import { Form ,Button, Alert,Card,Carousel,Table,Accordion,InputGroup } from 'react-bootstrap';


function CompilteTeamPage() {
    const { id } = useParams();
        
    const [myFail,setMyFail]=useState([])
    const [fixId,setFixId]=useState([])
    const [fixProblem,setFixProblem]=useState([])

  
    useEffect(() => {
        async function fetchMyFail(){
            const {data}=await axios.get(`http://127.0.0.1:8000/failById/${id}`)           
            setMyFail(data)
            setFixId(data.id_TbFailDevices)
        }
        fetchMyFail()
    },[])

    useEffect(() => {
        async function fetchMyFixs(){
            console.log("ali")
            console.log({fixId})
            console.log("ali")

            const {data}=await axios.get(`http://127.0.0.1:8000/fixById/${fixId}`)           
            setFixProblem(data)
            
        }
        fetchMyFixs()
    },[])



  return (
    <div>
        <Link to="/TeamFails">برگشت </Link>
      <h1>{myFail.id_TbAreas}</h1>
      <h1>{myFail.id_TbNodes}</h1>
      <h1>{myFail.id_TbAssets}</h1>
      <h1>{myFail.id_TbFailDevices}</h1>
      <h1>{myFail.fail_discription}</h1>
      <h1>{myFail.date_register}</h1>
      <h1>{myFail.code_fail_register}</h1>



      <Card
          bg="primary"
          text= 'white'          
          className="mb-2"
        >
          <Card.Header>ایراد مشاهده شده:</Card.Header>
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text>
            <Form.Select  aria-label="Select Area">
            <option> انتخاب....  </option>
            {fixProblem.map((fix) => (
            <option key={fix.id} value={fix.id}>
            {areas.area_name}
            </option>
          
        ))}
      </Form.Select>
            </Card.Text>
          </Card.Body>
        </Card>



    </div>
   
  )
}

export default CompilteTeamPage