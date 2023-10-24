import {
   todoAdd,
   todoClearCompleted,
   todoCompleteAll,
   todoCompletingToggle,
   todoDelete,
   todoFilterByColor,
   todoFilterByCompletion,
   todoSetColor,
} from './actionTypes';

// acTodo is the prefix for all todo action creator
export const acTodoAdd = (text) => {
   return {
      type: todoAdd,
      payload: text,
   };
};

export const acTodoCompletingToogle = (id) => {
   return {
      type: todoCompletingToggle,
      payload: id,
   };
};

export const acTodoSetColor = (id, color) => {
   return {
      type: todoSetColor,
      payload: { id, color },
   };
};

export const acTodoDelete = (id) => {
   return {
      type: todoDelete,
      payload: id,
   };
};

export const acTodoCompleteAll = () => {
   return {
      type: todoCompleteAll,
   };
};

export const acTodoClearCompleted = () => {
   return {
      type: todoClearCompleted,
   };
};

export const acTodoFilterByCompletion = (completionType) => {
   return {
      type: todoFilterByCompletion,
      payload: completionType,
   };
};

export const acTodoFilterByColor = (color) => {
   return {
      type: todoFilterByColor,
      payload: { color },
   };
};
