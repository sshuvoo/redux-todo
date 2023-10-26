import { acTodoDelete } from '../actions';

export default function deleteTodo(id) {
   return async (dispatch) => {
      await fetch(`http://localhost:9000/todos/${id}`, {
         method: 'DELETE',
      });
      dispatch(acTodoDelete(id));
   };
}
