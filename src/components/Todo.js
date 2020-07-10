import React from 'react';
import AddTodo from './AddTodo';
import ListTodo from './ListTodo';

function Todo() {
    return (
        <div className="Todo">
            <p>Here is the todo!</p>
            <AddTodo />
            <ListTodo />
        </div>
    );
}

export default Todo;