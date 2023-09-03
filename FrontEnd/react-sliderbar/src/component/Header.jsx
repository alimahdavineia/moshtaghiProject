import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import SuccessAlert from "../component/SuccessAlert.jsx";
import { Form ,Button, Alert,Card,Carousel,Table,Accordion,InputGroup } from 'react-bootstrap';

import pic1 from '../images/colors.png';
import pic2 from '../images/shop1.png';


function Header() {
  return (
    <>
   
    <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
      <Container fluid>
      
      <img
          // className="d-block w-100"
          src={pic1}
          alt="Second2"
          height={50}
          width={50}
        />
        <Navbar.Brand href="#">دودکش اینجاست       
        </Navbar.Brand>
        

      
   <nav >
    <a class="navbar-brand" href="#">
        <img src={pic2} width="30" height="30" alt=""/>
    سبدخرید
       </a>
   </nav>



        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="جستجو"
              className="me-2"
              aria-label="جستجو"
            />
            <Button id="btSearch" variant="outline-primary">
              جستجو
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default Header;
