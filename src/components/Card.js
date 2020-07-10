import React from 'react';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
const axios = require('axios');

function Box({ item }){
    const updateState = (item) => {
        let state = "";
        if (item.state === "open"){
            state = "done";
        }else{
            state = "open";
        }
        axios.put('http://localhost:3000/api/todo/' + item.id, {state})
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

        //refreshPage();
    }

    function refreshPage() {
        window.location.reload(false);
    }

    return(
        <Card className="d-inline-block g-card m-25" 
        bg="primary" 
        text="white">
            <Card.Header>
                <Card.Title>{ item.title }</Card.Title>
            </Card.Header>
            <Card.Body>
                <Card.Text>{ item.title }</Card.Text>
                <Button onClick={updateState(item)}>{ item.state }</Button>
            </Card.Body>
        </Card>
    );
}

export default Box;