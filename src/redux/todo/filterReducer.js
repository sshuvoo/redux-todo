import { todoFilterByColor, todoFilterByCompletion } from './actionTypes';

const initialState = {
   filterBy: 'All',
   colors: ['green', 'red', 'yellow'],
};

const filterReducer = (state = initialState, action) => {
   switch (action.type) {
      case todoFilterByCompletion:
         return {
            ...state,
            filterBy: action.payload,
         };
      case todoFilterByColor:
         if (state.colors.includes(action.payload.color)) {
            return {
               ...state,
               colors: state.colors.filter(
                  (color) => color !== action.payload.color
               ),
            };
         } else {
            return {
               ...state,
               colors: [...state.colors, action.payload.color],
            };
         }
      default:
         return { ...state };
   }
};

export default filterReducer;
