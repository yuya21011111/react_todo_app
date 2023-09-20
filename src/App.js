import './App.css';
import Input from './components/Input';
import Title from './components/Title';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="body">
     <Title />
     <Input />
     <TodoList />
    </div>
  );
}

export default App;
