import { useDispatch, useSelector } from 'react-redux';
import remainingTask from '../utility/remainingTask';
import {
   acTodoFilterByColor,
   acTodoFilterByCompletion,
} from '../redux/todo/actions';

export default function Footer() {
   const dispatch = useDispatch();
   const todos = useSelector((state) => state.todoState);
   const { filterBy, colors } = useSelector((state) => state.todoFilter);
   return (
      <div className="mt-4 flex justify-between text-xs text-gray-500">
         <p>{remainingTask(todos)}</p>
         <ul className="flex space-x-1 items-center text-xs">
            <li
               onClick={() => dispatch(acTodoFilterByCompletion('All'))}
               className={`cursor-pointer transition-all ${
                  filterBy === 'All' && 'font-bold'
               }`}
            >
               All
            </li>
            <li>|</li>
            <li
               onClick={() => dispatch(acTodoFilterByCompletion('Incomplete'))}
               className={`cursor-pointer transition-all ${
                  filterBy === 'Incomplete' && 'font-bold'
               }`}
            >
               Incomplete
            </li>
            <li>|</li>
            <li
               onClick={() => dispatch(acTodoFilterByCompletion('Complete'))}
               className={`cursor-pointer transition-all ${
                  filterBy === 'Complete' && 'font-bold'
               }`}
            >
               Complete
            </li>
            <li></li>
            <li></li>
            <li
               onClick={() => dispatch(acTodoFilterByColor('green'))}
               className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${
                  colors.includes('green') && 'bg-green-500'
               }`}
            ></li>
            <li
               onClick={() => dispatch(acTodoFilterByColor('red'))}
               className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${
                  colors.includes('red') && 'bg-red-500'
               }`}
            ></li>
            <li
               onClick={() => dispatch(acTodoFilterByColor('yellow'))}
               className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${
                  colors.includes('yellow') && 'bg-yellow-500'
               }`}
            ></li>
         </ul>
      </div>
   );
}
