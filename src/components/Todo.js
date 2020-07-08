import React, { useState, useEffect  } from 'react';
import Box from './Card';

const axios = require('axios');

function Todo() {
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
        <li key={item.id.toString()}>
            <Box item={item}/>
        </li>
    );

    return (
    <div className="Todo">
        <p>Here is the todo!</p>
        <ul>{ listItems }</ul>
    </div>
    );
}

export default Todo;