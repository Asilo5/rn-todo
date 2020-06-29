import TodoEntry from './TodoEntry';
import { Action, Thunk, Computed } from 'easy-peasy';


export default interface TodosModel {
  Todos: TodoEntry[];
  addTodos: Action<TodosModel, TodoEntry>;
};