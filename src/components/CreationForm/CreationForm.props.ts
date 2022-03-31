import { ITodo } from '../../interfaces/todo.interface';

export interface CreationFormProps {
   todos: ITodo[];
   setTodos: (todo: ITodo[]) => void;
}
