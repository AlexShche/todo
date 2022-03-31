import { ChangeEvent, FC, useState } from 'react';
import { nanoid } from 'nanoid';
import styled from 'styled-components';

import CreationForm from './components/CreationForm/CreationForm';
import { ITodo } from './interfaces/todo.interface';

const Title = styled.h1`
   text-align: center;
   margin-bottom: 50px;
`;

const Wrapper = styled.div`
   max-width: 800px;
   margin: 60px auto 0;
`;

const TodoItem = styled.div<{ done: boolean }>`
   background-color: ${(props) => (props.done ? 'gray' : '#ffdba0')};
   padding: 14px 20px;
   border-radius: 6px;
   margin-bottom: 10px;
   display: flex;
   align-items: center;
`;

const TodoItemTitle = styled.span`
   margin-left: 10px;
`;

const TodoItemDeleteBtn = styled.button`
   margin-left: auto;
   color: #fff;
   background: #e85252;
   border: none;
   border-radius: 4px;
   cursor: pointer;
   padding: 10px 18px;
`;

const Todos = styled.div`
   margin-top: 50px;
`;

const todosDefault: ITodo[] = [
   {
      id: nanoid(),
      title: 'Помыть пол',
      done: false,
   },
   {
      id: nanoid(),
      title: 'Посмотреть Джентельменов',
      done: false,
   },
   {
      id: nanoid(),
      title: 'Вынести мусор',
      done: false,
   },
];

const App: FC = (): JSX.Element => {
   const [todos, setTodos] = useState<ITodo[]>(todosDefault);

   const handleChange = (e: ChangeEvent<HTMLInputElement>, id: string, todos: ITodo[]) => {
      setTodos(todos.map((todo) => (todo.id === id ? { ...todo, done: e.target.checked } : todo)));
   };

   const handleDelete = (id: string, todos: ITodo[]) => {
      setTodos(todos.filter((todo) => todo.id !== id));
   };

   return (
      <Wrapper>
         <Title>Список задач</Title>
         <CreationForm todos={todos} setTodos={setTodos} />
         <Todos>
            {todos.map((todo) => (
               <TodoItem key={todo.id} done={todo.done}>
                  <label>
                     <input type="checkbox" onChange={(e) => handleChange(e, todo.id, todos)} />
                     <TodoItemTitle>{todo.title}</TodoItemTitle>
                  </label>
                  <TodoItemDeleteBtn onClick={() => handleDelete(todo.id, todos)}>Удалить</TodoItemDeleteBtn>
               </TodoItem>
            ))}
         </Todos>
      </Wrapper>
   );
};

export default App;
