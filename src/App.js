import './App.css';
import Input from './components/Input';
import Title from './components/Title';
import TodoList from './components/TodoList';
import { useState } from 'react';

function App() {
  const [todoList, settodoList] = useState([])
  return (
    <div className="body">
     <Title />
     <Input todoList={todoList} settodoList={settodoList} />
     <TodoList />
    </div>
  );
}

export default App;
