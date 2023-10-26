import { acTodoAdd } from '../actions';

export default function postTodo(title) {
   return async (dispatch) => {
      const response = await fetch('http://localhost:9000/todos', {
         method: 'POST',
         body: JSON.stringify({ title }),
         headers: {
            'Content-Type': 'application/json',
         },
      });
      const todo = await response.json();
      dispatch(acTodoAdd(todo.title));
   };
}
