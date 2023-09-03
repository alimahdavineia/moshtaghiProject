import React from "react";
import { Form ,Button, Alert,Card,Carousel,Table,Accordion,InputGroup } from 'react-bootstrap';
import Report from "./pages/Report.jsx";
import Asset from "./pages/Asset.jsx";
import Source from "./pages/Source.jsx";
import Connect from "./pages/Connect.jsx";
import Education from "./pages/Education.jsx";
import FailTable from "./pages/FailTable.jsx";
import Sidebar from "./component/Sidebar.jsx";
import Footer from "./component/Footer.jsx";
import Header from "./component/Header.jsx";
import RegisterFail from "./pages/RegisterFail.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import CompilteTeamPage from "./pages/CompilteTeamPage.jsx";
import TeamFails from "./pages/TeamPage.jsx";
import pic1 from '../src/images/p1.jpg';
import pic2 from '../src/images/p2.jpg';
import pic3 from '../src/images/p3.jpg';
import pic4 from '../src/images/p4.jpg';
import pic5 from '../src/images/p5.jpg';
import pic6 from '../src/images/p6.jpg';
import pic7 from '../src/images/p7.jpg';
import pic8 from '../src/images/p4.jpg';




function App() {
  return (
    <div>
      
      <Header />
     
      <main>
        {/* <BrowserRouter>
          <Sidebar>
            <Routes>
              <Route path="/" element={<FailTable />} exact />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/report" element={<Report />} />
              <Route path="/source" element={<Source />} />
              <Route path="/asset" element={<Asset />} />
              <Route path="/connect" element={<Connect />} />
              <Route path="/education" element={<Education />} />
              <Route path="/registerFail" element={<RegisterFail/>} />
              <Route path="/compilteTeamPage/:id" element={<CompilteTeamPage/>} />
              <Route path="/TeamFails" element={<TeamFails/>} />
            </Routes>
          </Sidebar>
        </BrowserRouter> */}

      <div class="row">
        <h5 class="bg-dark text-white text-center" >
          تذکر بسیار مهم :استفاده از این دستگاهها برای کودکان، افراد زیر 21 سال و زنان باردار ممنوع می باشد.، 
        </h5>
      </div> 
      <div class="row ">
      <div class="h-100 d-flex align-items-center justify-content-center">
           <div class="col-md-8 p-3 bg-dark text-white">

      <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={pic1}
          alt="First1"
        />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={pic2}
          alt="Second2"
        />
        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={pic3}
          alt="Third3"
        />
        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={pic4}
          alt="4"
        />
        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={pic5}
          alt="5"
        />
        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={pic6}
          alt="6"
        />
        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={pic7}
          alt="7"
        />
        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={pic8}
          alt="8"
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

      <div className=" row text-white text-center">
        <p>
        الکترو اسموک یا همان ویپ وسیله ای است که شبیه سیگار دود تولید می کند و همزمان نیکوتین هم دارد که فرد مصرف کننده میزان دریافت نیکوتین را می تواند تنظیم کند. هدف تولید این دستگاه جایگزین استفاده از سیگار است.
        </p>
      </div> 

      <div class="row">
      <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
  <button type="button" class="btn btn-secondary">ALOPOD</button>
  <button type="button" class="btn btn-secondary">IVG</button>

  <div class="btn-group" role="group">
    <button id="btnGroupDrop1" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Vape
    </button>
    <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
      <a class="dropdown-item" href="#">ALOPOD</a>
      <a class="dropdown-item" href="#">IVG</a>
    </div>
  </div>
</div> 
      </div>

      <div className="row">
        <div class="col-md-3 p-3 bg-dark text-white">
        <img
          className="d-block w-100"
          src={pic1}
          alt="1"
        />
        </div>
        <div class="col-md-3 p-3 bg-dark text-white">
        <img
          className="d-block w-100"
          src={pic2}
          alt="2"
        />
        </div>
        <div class="col-md-3 p-3 bg-dark text-white">
        <img
          className="d-block w-100"
          src={pic3}
          alt="3"
        />
        </div>

        <div class="col-md-3 p-3 bg-dark text-white">
        <img
          className="d-block w-100"
          src={pic4}
          alt="4"
        />
        </div>

      </div>



       
    
     
   
      </main>
      <Footer />
    </div>
  );
}

export default App;
