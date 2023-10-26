import notesIcon from './../assets/images/notes.png';
import plusIcon from './../assets/images/plus.png';
import tickIcon from './../assets/images/double-tick.png';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { acTodoClearCompleted, acTodoCompleteAll } from '../redux/todo/actions';
import postTodo from '../redux/todo/thunks/postTodo';

export default function Header() {
   const [todoTitle, setTodoTitle] = useState('');
   const dispatch = useDispatch();

   const submitHandler = (e) => {
      e.preventDefault();
      dispatch(postTodo(todoTitle));
      setTodoTitle('');
   };

   return (
      <div>
         <form
            onSubmit={submitHandler}
            className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
         >
            <img src={notesIcon} className="w-6 h-6" alt="Add todo" />
            <input
               onChange={(e) => setTodoTitle(e.target.value)}
               value={todoTitle}
               type="text"
               placeholder="Type your todo"
               className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
            />
            <button
               type="submit"
               className={`appearance-none w-8 h-8 bg-[url('${plusIcon}')] bg-no-repeat bg-contain`}
            ></button>
         </form>

         <ul className="flex justify-between my-4 text-xs text-gray-500">
            <li
               onClick={() => dispatch(acTodoCompleteAll())}
               className="flex space-x-1 cursor-pointer"
            >
               <img className="w-4 h-4" src={tickIcon} alt="Complete" />
               <span>Complete All Tasks</span>
            </li>
            <li
               onClick={() => dispatch(acTodoClearCompleted())}
               className="cursor-pointer"
            >
               Clear completed
            </li>
         </ul>
      </div>
   );
}
