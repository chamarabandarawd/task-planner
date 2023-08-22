import React from 'react';
import { ToDo } from '../model';
import{ AiOutlineEdit,AiOutlineDelete ,AiOutlineFileDone} from "react-icons/ai"

interface Props {
    todo:ToDo;
    todos:ToDo[];
    setTodos:React.Dispatch<React.SetStateAction<ToDo[]>>
}

const SingleTodo:React.FC<Props> = ({todo,todos,setTodos}:Props) => {
  return (
    <form className='todos_single'>
        <span className="todos_single-text">
            {todo.todo}
            </span>
            <div>
                <span className="icon"><AiOutlineEdit/></span>
                <span className="icon"><AiOutlineDelete/></span>
                <span className="icon"><AiOutlineFileDone/></span>
            </div>
    </form>
  )
}

export default SingleTodo