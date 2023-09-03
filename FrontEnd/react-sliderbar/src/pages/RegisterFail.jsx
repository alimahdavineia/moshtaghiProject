import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form ,Button, Alert,Card,Carousel,Table,Accordion,InputGroup } from 'react-bootstrap';
import logo1 from '../images/p1.jpg';
import logo2 from '../images/p2.jpg';
import logo3 from '../images/p3.jpg';
import DeliveryAssets from "./DeliveryAssets";

const Reporter = () => {
  const [AreaSelect, setAreaSelect] = useState([]);
  const [NodeSelect, setNodeSelect] = useState([]);
  const [AssetSelect, setAssetSelect] = useState([]);
  const [failSelect, setFailSelect] = useState([]);

  const [enSubmit, setEnSubmit] = useState(true);

  const [dataArea, setDataArea] = useState("");
  const [dataNode, setDataNode] = useState("");
  const [dataAsset, setDataAsset] = useState("");
  const [dataDiscription, setDataDiscription] = useState("");
 
  const [failRegister, setFailRegister] = useState("");

  const [alertRepeted, setAlertRepeted] = useState(false);
  const [alertOkSave, setAlertOkSave] = useState(false);
  const [alertErrSave, setAlertErrSave] = useState(false);

  const [allFails, setAllFails] = useState([]);
  const [showToast, setShowToast] = useState(false);
  

  useEffect(() => {
    axios
      .get("http://localhost:8000/fails/")
      .then((res) => setAllFails(res.data));
      
  }, []);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/areas/")
      .then((res) => setAreaSelect(res.data));
      
      
  }, []);

  const fetchNodeSelect = (categoryId) => {
    setAssetSelect([]);
    axios
      .get(`http://127.0.0.1:8000/nodearea/${categoryId}`)
      .then((res) => setNodeSelect(res.data));

       setDataArea(categoryId);
      
  };


  const fetchAssetSelect = (subCategoryId) => {
    axios
      .get(`http://localhost:8000/assetnode/${subCategoryId}`)
      .then((res) => setAssetSelect(res.data));     
      setDataNode(subCategoryId);
      setAssetSelect([]);




  };

  const fetchSubAssetSelect = (idAsset) => {
    
    axios
    .get(`http://127.0.0.1:8000/deviceFailsByAsset/${idAsset}`)
    .then((res) => setFailSelect(res.data));

    setDataAsset(idAsset);
    

  };


const fetchFailSelect = (failId) => {
      setFailRegister(failId);
      if (failId){
        setEnSubmit(false)
      }

};

const funsetAlertErrSave=()=>{
  setAlertErrSave(false)
  window.location.reload();
}
const funsetAlertOkSave=()=>{
  setAlertOkSave(false)
  window.location.reload();
}
const funsetAlertRepeted=()=>{
  setAlertRepeted(false)
  window.location.reload();
}

const successToast=()=>{
  setShowToast(false)
  // window.location.reload();
}

const ChangeDiscription=(myDiscription)=>{
  console.log(myDiscription)
  setDataDiscription(myDiscription)
  // window.location.reload();
}
 
const registerFail = () => {
  // SuccessAlert(true)  
  let formField =new FormData()
  formField.append('id_TbAreas',dataArea)
  formField.append('id_TbNodes',dataNode)
  formField.append('id_TbAssets',dataAsset)
  formField.append('fail_discription',dataDiscription)
  formField.append('id_TbFailDevices',failRegister)
  
  
  axios({
    method:'post',
    url:`http://127.0.0.1:8000/addFail/`,
    data : formField,
  }).then((response) => {
    console.log(response.data)  
    if (response.data=="Data Repeted"){
      setAlertRepeted(true)
      setEnSubmit(true)
      

    }else if (response.data=="Save Data"){
      setAlertOkSave(true)
      setEnSubmit(true)
    }else if(response.data=="Not Save Data"){
      setAlertErrSave(true)
      setEnSubmit(true)
    }
  })    
  };
  let assetname="ali"



  return (
    <>
  <div class="container-fluid mt-3">


      <h4>صفحه ثبت خرابی سامانه اسکادا</h4>
      <DeliveryAssets assetname={assetname}/>
      <div class="row">
        <div class="col-md-6 p-3 bg-dark text-white">
        
        <Card
          bg="primary"
          text= 'white'          
          className="mb-2"
        >
          <Card.Header> 1: آبرسانی/اتفاقات</Card.Header>
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text>
            <Form.Select onChange={(e) => fetchNodeSelect(e.target.value)} aria-label="Select Area">
            <option> انتخاب....  </option>
            {AreaSelect.map((areas) => (
            <option key={areas.id} value={areas.id}>
            {areas.area_name}
            </option>
          
        ))}
      </Form.Select>
            </Card.Text>
          </Card.Body>
        </Card>
     
        <Card
          bg="success"
          text='white'
          className="mb-2"
        >
          <Card.Header>2: تاسیس/نقطه</Card.Header>
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text>
            <Form.Select onChange={(e) => fetchAssetSelect(e.target.value)} aria-label="Select Node">
      <option>انتخاب ...</option>
      {NodeSelect.map((nodes) => (
          <option key={nodes.id} value={nodes.id}>
            {nodes.node_name}
          </option>
          
        ))}
      </Form.Select>
            </Card.Text>
          </Card.Body>
        </Card>

        {/* <MyCard bg="success" CardHeader="منطقه" textColor='white' 
                  onChangeFunction={(e)=>fetchNodeSelect(e.target.value)}
                  allData={NodeSelect}/> */}



      <br/>


        </div>
    
        <div class="col-md-6 p-3 bg-dark text-white">
        <Card
          bg="warning"
          text='white'
          className="mb-2"
        >
          <Card.Header>3: تجهیزات / قطعات</Card.Header>
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text>
            <Form.Select onChange={e=> fetchSubAssetSelect(e.target.value)} aria-label="Select Asset">
      <option>انتخاب ...</option>
      {AssetSelect.map((assets) => (
          <option key={assets.id} value={assets.id} >
            {assets.id_devices} {assets.asset_location}
          </option>

        ))}
           </Form.Select>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          bg="secondary"
          text='white'
          className="mb-2"
        >
          <Card.Header>4: نوع خرابی </Card.Header>
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text>
            <Form.Select onChange={(e) => fetchFailSelect(e.target.value)} aria-label="Select Fail Type">
              <option>انتخاب ...</option>
              {failSelect.map((failType) => (
              <option key={failType.id} value={failType.id}>
              {failType.id_fail_types}
              </option>

        ))}
      </Form.Select>
            </Card.Text>
          </Card.Body>
        </Card>

        </div>
      </div>
      <div class="row p-3 bg-dark text-white" >
        <div>
        <Alert show={alertRepeted} variant="warning">
        <Alert.Heading> تکرار در ثبت خرابی امروز</Alert.Heading>
        <p>
          کاربر گرامی این خرابی امروز ثبت شده است در صورت نیاز با مرکز تله متری تماس حاصل شود 35223600
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => funsetAlertRepeted(false)} variant="outline-warning">
            بستن پیغام
          </Button>
        </div>
      </Alert>

      <Alert show={alertOkSave} variant="success">
        <Alert.Heading>ثبت با موفقیت انجام شد </Alert.Heading>
        <p>
          کاربر گرامی ثبت با موفقیت انجام شد.خرابی  بر اساس اولویت برطرف خواهد شد.در صورت نیاز با مرکز تله متری تماس حاصل شود 35223600
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => funsetAlertOkSave()} variant="outline-success">
            بستن پیغام
          </Button>
        </div>
      </Alert>

      <Alert show={alertErrSave} variant="danger">
        <Alert.Heading>ثبت نا موفق  </Alert.Heading>
        <p>
          کاربر گرامی این خرابی ثبت نمی شود ممکن است ایراد در اتصال باشد صورت نیاز با مرکز تله متری تماس حاصل شود 35223600
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => funsetAlertErrSave() } variant="outline-danger">
            بستن پیغام
          </Button>
        </div>
      </Alert>
        <Alert variant="warning" hidden={!enSubmit}>
          .همکار گرامی لطفاً ابتدا موارد را به ترتیب انتخاب فرمائید: 1- آبرسانی/اتفاقات---- 2- نام تاسیس/نقطه---- 3-تجهیزات/قطعات---- 4-نوع خرابی مشاهده شده مورد نظر را انتخاب سپس بخش توضیحات و تائید فعال می شود. حتماً برای هر تجهیز خرابی مجزا ثبت شود. با تشکر       </Alert>

        <Accordion defaultActiveKey="1" hidden={enSubmit} >
        <Accordion.Item eventKey="0">
        <Accordion.Header>توضیحات : </Accordion.Header>
        <Accordion.Body>
           <InputGroup>           
           <Form.Control as="textarea" aria-label="With textarea" onChange={(e) => ChangeDiscription(e.target.value)} />             
           </InputGroup>
        </Accordion.Body>
        </Accordion.Item>
        </Accordion>
        <br/>
        <div dir="ltr">
        <Button variant="danger" onClick={registerFail} hidden={enSubmit} > ثبت خرابی </Button>
        </div>

        </div>
       
      </div>
      <div class="row">
      <Table id="FailTable" striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>نام تاسیس</th>
          <th>نام تجهیز </th>
          <th> ایراد مشاهده شده </th>
          <th> زمان اعلام خرابی </th>
          <th> آخرین وضعیت </th>
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
            ارجاع به اکیپ

          </td>
        </tr>
        ))}


      </tbody>
    </Table>

      </div>
      <div class="row">
      <div class="col-md-4 p-3 bg-dark text-white">
      <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={logo1}
          alt="First slide"
        />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={logo2}
          alt="Second slide"
        />
        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={logo3}
          alt="Third slide"
        />
        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
      <div class="col-md-4 p-3 bg-dark text-white">
      <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={logo1}
          alt="First slide"
        />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={logo2}
          alt="Second slide"
        />
        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={logo3}
          alt="Third slide"
        />
        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
      <div class="col-md-4 p-3 bg-dark text-white">
      <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={logo1}
          alt="First slide"
        />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={logo2}
          alt="Second slide"
        />
        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={logo3}
          alt="Third slide"
        />
        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
      
      </div>

      
  </div>


 
    </>
  );
};

export default Reporter;
