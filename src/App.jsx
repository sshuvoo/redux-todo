import { useSelector } from 'react-redux';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Todo from './components/Todo';

export default function App() {
   const todos = useSelector((state) => state.todoState);
   const { filterBy, colors } = useSelector((state) => state.todoFilter);
   return (
      <div className="grid place-items-center bg-blue-100 h-screen px-6 font-sans">
         <Navbar />
         <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
            <Header />

            <hr className="mt-4" />

            <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
               {todos
                  .filter((todo) => {
                     if (filterBy === 'Incomplete')
                        return !todo.completedStatus;
                     else if (filterBy === 'Complete')
                        return todo.completedStatus;
                     else return true;
                  })
                  .filter((todo) => {
                     if (todo.color) return colors.includes(todo.color);
                     else return true;
                  })
                  .map((todo) => (
                     <Todo key={todo.id} todo={todo} />
                  ))}
            </div>

            <hr className="mt-4" />

            <Footer />
         </div>
      </div>
   );
}
