// 8. completed 프로퍼티의 값이 true인 요소의 갯수 구하기

const todos = [
  { id: 3, content: "HTML", completed: false },
  { id: 2, content: "CSS", completed: true },
  { id: 1, content: "Javascript", completed: false },
];

// const countCompletedTodos = (todos) => {
//   const result = todos.filter((todo) => todo.completed == true);
//   return result.length;
// };

const countCompletedTodos = (todos) =>
  todos.filter((todo) => todo.completed == true).length;

console.log(countCompletedTodos(todos)); // 1
