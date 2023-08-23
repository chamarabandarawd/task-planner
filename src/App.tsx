import React, { useState } from 'react';
import './App.css';
import InputFeild from './components/InputFeild';
import { ToDo } from './model';
import TodoList from './components/TodoList';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';


const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<ToDo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<ToDo[]>([])
  const [inProgressTodos, setInProgressTodos] = useState<ToDo[]>([])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("")
    }
  };

const onDragEndHandle =(result:DropResult)=>{
  const{source,destination}=result;

  if(!destination) return;
  if(destination.droppableId===source.droppableId && destination.index===source.index) return;

  let add,
  active=todos,
  inProgress=inProgressTodos,
  complete=completedTodos;

  if(source.droppableId==='New-Tasks'){
    add=active[source.index];
    active.splice(source.index,1);
  }else if(source.droppableId==='InProgress-Tasks') {
    add=inProgress[source.index];
    inProgress.splice(source.index,1);
  }else{
    add= complete[source.index];
    complete.splice(source.index,1);
  }

  if(destination.droppableId==='New-Tasks'){
    active.splice(destination.index,0,add);
  }else if(destination.droppableId==='InProgress-Tasks') {
    inProgress.splice(destination.index,0,add);
  }else{
    complete.splice(destination.index,0,add);
  }

  setTodos(active);
  setInProgressTodos(inProgress);
  setCompletedTodos(complete);

};

  return (
    
      <div className="App">
        <div className="heading">Task Pulse</div>
        <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <DragDropContext onDragEnd={onDragEndHandle}>
        <TodoList
          todos={todos}
          setTodos={setTodos}
          completedTodos={completedTodos}
          setCompletedTodos={setCompletedTodos}
          inProgressTodos={inProgressTodos}
          setInProgressTodos={setInProgressTodos} 
        />
        </DragDropContext>
      </div>

  );
}

export default App;
