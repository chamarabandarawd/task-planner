import React from 'react';
import './styles.css';

const InputFeild= ()=> {
  return (
    <form className='input'>
        <input type="text" placeholder='Enter a task' className='input-box'/>
        <button className='input-submit' type='submit'>Go</button>
    </form>
  )
}

export default InputFeild
