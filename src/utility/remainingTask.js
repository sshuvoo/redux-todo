export default function remainingTask(todos) {
   const remaining = todos?.filter((todo) => !todo.completedStatus).length;
   if (remaining === 0) return 'No task left';
   else if (remaining === 1) return '1 task left';
   else return `${remaining} tasks left`;
}
