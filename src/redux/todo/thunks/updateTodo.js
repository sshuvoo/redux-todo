import { acTodoCompletingToogle, acTodoSetColor } from '../actions';

export function updateCompletedStatus(id, completedStatus) {
   return async (dispatch) => {
      await fetch(`http://localhost:9000/todos/${id}`, {
         method: 'PATCH',
         body: JSON.stringify({ completedStatus: !completedStatus }),
         headers: {
            'Content-Type': 'application/json',
         },
      });
      dispatch(acTodoCompletingToogle(id));
   };
}

export function updateColor(id, color) {
   return async (dispatch) => {
      await fetch(`http://localhost:9000/todos/${id}`, {
         method: 'PATCH',
         body: JSON.stringify({ color }),
         headers: {
            'Content-Type': 'application/json',
         },
      });
      dispatch(acTodoSetColor(id, color));
   };
}
