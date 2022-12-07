import './App.css';
import { TodoList } from './components/TodoList';
import { TodoAdd } from './components/TodoAdd';
import { useTodo } from './hooks/useTodo';



function App() {

  const {
    todos,
    todosCount,
    pendingTodosCount,
    handleNewTodo,
    handleDeleteTodo,
    handleCompleteTodo,
    handleUpdateTodo } = useTodo()
  return (
    <div className="App">
      <div className="card-to-do">
        <h1> Lista de Tareas </h1>

        <div className='counter-todos'>
          <h3> Numero de Realizadas: {todosCount} </h3>
          <h3> Numero de Pendientes: {pendingTodosCount}</h3>
        </div>

        <div className='add-todo'>
          <h3>Agregar Tarea</h3>
          <TodoAdd handleNewTodo={handleNewTodo}></TodoAdd>
        </div>
      </div>
      <TodoList
        todos = {todos}
        handleUpdateTodo = {handleUpdateTodo}
        handleDeleteTodo = {handleDeleteTodo}
        handleCompleteTodo = {handleCompleteTodo}
      />
    </div>
  );
}

export default App;