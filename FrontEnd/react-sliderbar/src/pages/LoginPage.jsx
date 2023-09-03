import React,{useState,useEffect} from 'react'
import FormContainer from '../component/FormContainer.jsx'
import  {Form,Button,Col,Row} from 'react-bootstrap'
import { Link } from 'react-router-dom'



function LoginPage() {


  return (
    <FormContainer>

        <h1>Sing In</h1>
        {/* <Form onSubmit={submitHandler}> */}
        <Form>
            <Form.Group controlId='email'>
                <Form.Label> ایمیل سازمانی</Form.Label>
                <Form.Control
                type='email'
                // placeholder='...ایمیل سازمانی را وارد کنید'
                // value={email}
                onchange={(e) => setEmail(e.target.value)}
                ></Form.Control>
            </Form.Group  >
            <Form.Group controlId ='password' className='my-4'>
                <Form.Label>رمز عبور</Form.Label>
                <Form.Control
                type='password'
                placeholder='...رمز عبور را وارد کنید'
                // value={password}
                // onchange={(e) => setPassword(e.target.value)}
                
                ></Form.Control>
            </Form.Group>
            <Button
            type='submit'
            variant='primary'
            className='my-4'> ورود
            </Button>
        </Form>
        <Row className="my-4">
            <Col>
             آیا شما کاربر جدید هستید؟
             
            <Link>
             ثبت نام کنید!
             </Link>
             
            </Col>
        </Row>
    </FormContainer>

  )
}

export default LoginPage