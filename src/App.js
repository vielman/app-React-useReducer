import './App.css';
import TodoList from './components/pure/TodoList';
import TodoContext  from './context/todoContext';

function App() {
  return (
    <TodoContext>
      <div className="App">
        <header className="App-header">
          <TodoList></TodoList>
        </header>
      </div>
    </TodoContext>
  );
}

export default App;
