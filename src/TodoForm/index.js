import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import "./TodoForm.css";
import { TodoContext } from "../TodoContext";

function TodoForm() {
    const { 
        addTodo, 
        setOpenModal 
    } = React.useContext(TodoContext);
     const onSubmit = (e) => {
        e.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
     }
     const [newTodoValue, setNewTodoValue] = React.useState('');
     const onCancel = () => {
        setOpenModal(false);
     }
    return (
        <form onSubmit={onSubmit} className="TodoForm">
            <label className="TodoForm-label">Escribe tu nueva tarea</label>
            <TextareaAutosize
                className="TodoForm-textarea"
                value={newTodoValue}
                onChange={(e) => {
                    setNewTodoValue(e.target.value);
                }}
                placeholder="Escribe una nueva tarea..."
                minRows={3}
                maxRows={8}
                cacheMeasurements
                autoFocus
            />
            <div className="TodoForm-buttonContainer">
                <button type="button" onClick={onCancel} className="TodoForm-button TodoForm-button--cancel">Cancelar</button>

                <button type="submit" className="TodoForm-button TodoForm-button--add">Añadir</button>
            </div>
        </form>
    )
}

export { TodoForm };
