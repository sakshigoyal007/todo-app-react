import React, { Component } from 'react';


const ToDo = (props) => {
    return (
        <div className="list-item">
            {props.content}
            <button className="delete custom-btn is-pulled-right" onClick={() => { props.onDelete(props.id) }} ></button>

        </div>
    );
}

const TodoList = (props) => {
    const taskTodo = props.datas.map((task, index) => {
        return <ToDo content={task} key={index} id={index} onDelete={props.onDelete} />
    })
    return (
        <div className="list-wrapper">
            {taskTodo}
        </div>
    );
}

export default TodoList;