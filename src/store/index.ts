// set up store
import { createStore } from 'easy-peasy';
import Store from '../Interfaces/TodosModel';
import TodoList from './TodoList';

const store: Store = {
  Todos: TodoList,
}; 

export default createStore<Store>(store);