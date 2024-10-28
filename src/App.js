import React from 'react';
import './App.css';

import TodoList from './components/TodoList/TodoList';
const App = () => {
    
    return (
        <div className='heading' >
            
            
            <h1> To-do List </h1>
            
           <TodoList />
            

        </div>
      
    );
};

export default App;