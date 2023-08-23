import React from 'react';
import "./styles.css";
import { ToDo } from '../model';
import SingleTodo from './SingleTodo';
import { Droppable } from 'react-beautiful-dnd';

interface Props {
  todos: ToDo[];
  setTodos: React.Dispatch<React.SetStateAction<ToDo[]>>;
  completedTodos: ToDo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<ToDo[]>>;
  inProgressTodos: ToDo[];
  setInProgressTodos:React.Dispatch<React.SetStateAction<ToDo[]>>;

}

const TodoList: React.FC<Props> = ({ 
  todos, setTodos, 
  completedTodos, setCompletedTodos ,
  inProgressTodos,setInProgressTodos}: Props) => {
  return (
    <div className="todos">
      <Droppable droppableId='New-Tasks'>
        {
          (provided) => (
            <div 
            className="column" 
            ref={provided.innerRef} 
            {...provided.droppableProps}>
              <h2>New Tasks</h2>
              {todos.map((todo,index) => (
                <SingleTodo 
                index={index}
                todo={todo} 
                todos={todos} 
                setTodos={setTodos} />
              ))}
              {provided.placeholder}
              </div>
          )
        }

      </Droppable>
       <Droppable droppableId='InProgress-Tasks'>
        {
          (provided) => (
            <div 
            className="column" 
            ref={provided.innerRef} 
            {...provided.droppableProps}>
              <h2>InProgress Tasks</h2>
              {inProgressTodos.map((todo,index) => (
                <SingleTodo
                index={index} 
                todo={todo} 
                todos={inProgressTodos} 
                setTodos={setInProgressTodos} />
              ))}
              {provided.placeholder}
              </div>
          )
        }

      </Droppable> 
      <Droppable droppableId='Completed-Tasks'>
        {
          (provided) => (
            <div 
            className="column" 
            ref={provided.innerRef} 
            {...provided.droppableProps}>
              <h2>Completed Tasks</h2>
              {completedTodos.map((todo,index) => (
                <SingleTodo 
                index={index}
                todo={todo} 
                todos={completedTodos} 
                setTodos={setCompletedTodos} />
              ))}
               {provided.placeholder}
               </div>
          )
        }
      </Droppable>
    </div>

  )
}

export default TodoList