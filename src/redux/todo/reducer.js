import {
   todoAdd,
   todoClearCompleted,
   todoCompleteAll,
   todoCompletingToggle,
   todoDelete,
   todoSetColor,
} from './actionTypes';

const initialState = [];

const reducer = (state = initialState, action) => {
   switch (action.type) {
      case todoAdd:
         if (action.payload.trim() === '') {
            return [...state];
         } else {
            return [
               ...state,
               {
                  id: state.length >= 1 ? state[state.length - 1].id + 1 : 1,
                  title: action.payload,
               },
            ];
         }
      case todoCompletingToggle:
         return state.map((todo) => {
            if (todo.id === action.payload) {
               return {
                  ...todo,
                  completedStatus: !todo.completedStatus,
               };
            } else return { ...todo };
         });
      case todoSetColor:
         return state.map((todo) => {
            if (todo.id === action.payload.id) {
               return {
                  ...todo,
                  color: action.payload.color,
               };
            } else return { ...todo };
         });
      case todoDelete:
         return state.filter((todo) => todo.id !== action.payload);
      case todoCompleteAll:
         return state.map((todo) => ({ ...todo, completedStatus: true }));
      case todoClearCompleted:
         return state.filter((todo) => !todo.completedStatus);
      default:
         return [...state];
   }
};

export default reducer;
