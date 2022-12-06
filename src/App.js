import './App.css';
import { TodoList } from './components/TodoList';
import { TodoAdd } from './components/TodoAdd'; 


function App() {
  return (
    <div className="App">
      <div className="card-to-do">
        <h1> Lista de Tareas </h1>
        
        <div className='counter-todos'>
          <h3> Numero de Realizadas: 3</h3>
          <h3> Numero de Pendientes: 3</h3>
        </div>

        <div className='add-todo'>
          <h3>Agregar Tarea</h3>
          <TodoAdd></TodoAdd>
        </div>
      </div>
      <TodoList></TodoList>
    </div>
  );
}

export default App;