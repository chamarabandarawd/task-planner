import React ,{useState} from 'react';
import { ToDo } from '../model';
import{ AiOutlineEdit,AiOutlineDelete ,AiOutlineFileDone} from "react-icons/ai";
import "./styles.css";

interface Props {
    todo:ToDo;
    todos:ToDo[];
    setTodos:React.Dispatch<React.SetStateAction<ToDo[]>>
}



const SingleTodo:React.FC<Props> = ({todo,todos,setTodos}:Props) => {

  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleDone=(id:number)=>{
    setTodos(todos.map((todo)=>(
      todo.id===id?{...todo,isDone:!todo.isDone}:todo
    )));
  
  };

  const handleDelete=(id:number)=>{
    setTodos(todos.filter((todo)=>todo.id!==id));
  };

  return (
    <form className='todos_single'>
      {
        edit?( 
          <input className="todos_single-text" value={editTodo} onChange={(e)=>setEditTodo(e.target.value)}/>

        ): todo.isDone ? (
            <s className="todos_single-text">{todo.todo}</s>
           ):(
            <span className="todos_single-text">{todo.todo}</span>
           )}
            
            <div className='icon-main'>
                <span className="icon" onClick={()=>{
                  if(!edit && !todo.isDone){
                    setEdit(!edit);
                  }
                }}><AiOutlineEdit/></span>
                <span className="icon" onClick={()=>handleDelete(todo.id)}><AiOutlineDelete/></span>
                <span className="icon" onClick={()=>handleDone(todo.id)}><AiOutlineFileDone/></span>
            </div>
    </form>
  )
}

export default SingleTodo