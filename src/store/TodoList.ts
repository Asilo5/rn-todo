import TodosModel from '../Interfaces/TodosModel';
import {action} from 'easy-peasy';

const TodoList: TodosModel = {
   Todos: [],
   addTodos: action((state, todo) => {
       state.Todos.push(todo)
   }),
};

export default TodoList;