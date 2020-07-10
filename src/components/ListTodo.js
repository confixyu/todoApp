import React, { useState, useEffect  } from 'react';
import Container from 'react-bootstrap/Container';
import Box from './Card';

const axios = require('axios');

function ListTodo() {
    const [page] = useState(1);
    const [todoData, setTodoData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/api/todo')
        .then(function (response) {
            setTodoData(response.data.todos)
        })
        .catch(function (error) {
            console.log(error);
        })
    },[page]);
   
    const listItems = todoData.map((item) =>
        <div key={item.id.toString()} style={{ margin: 20}}>
            <Box item={item}/>
        </div>
    );

    return (
    <div className="Todo">
        <Container bg="primary">
            <div >{ listItems }</div>
        </Container>
        
    </div>
    );
}

export default ListTodo;