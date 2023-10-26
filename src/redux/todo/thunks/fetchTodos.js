import { acTodoLoad } from '../actions';

export default async function fetchTodos(dispatch) {
   const response = await fetch('http://localhost:9000/todos');
   const todos = await response.json();
   dispatch(acTodoLoad(todos));
}
