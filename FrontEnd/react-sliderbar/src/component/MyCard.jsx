import React from 'react'
import { Form ,Card } from 'react-bootstrap';

function MyCard(props,onChangeFunction,allData) {
  return (


    <Card
    bg={props.bg}
    text={props.textColor}
    className="mb-2"
  >
     
    <Card.Header>{props.CardHeader}</Card.Header>
        <Card.Body>
           <Card.Title></Card.Title>
                <Card.Text>
                        <Form.Select onChange = {onChangeFunction}>
                            {/* <option>انتخاب ...</option>
                            
                                {allData.map((data) => (
                                    <option key={data.id} value={data.id}>
                                        {data.id}
                                    </option>
                                ))} */}
                        </Form.Select>
                </Card.Text>
        </Card.Body>
  </Card>
  
  )
}

export default MyCard