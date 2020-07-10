import React from 'react';
import { useForm } from "react-hook-form";
const axios = require('axios');

function AddTodo() {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
        data.state = "open";
        axios.post('http://localhost:3000/api/todo', data)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)} >
            <input type="text" placeholder="Title" name="title" ref={register({required: "Title is required"})} />
            { errors.title && <p>errors.title.message</p> }
            <input type="text" placeholder="Description" name="description" ref={register} />
            <input type="submit" />
        </form>
    );
}

export default AddTodo;