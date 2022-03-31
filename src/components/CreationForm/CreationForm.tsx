import { FC, useState } from 'react';
import styled from 'styled-components';
import { nanoid } from 'nanoid';

import { CreationFormProps } from './CreationForm.props';
import { ITodo } from '../../interfaces/todo.interface';

const AddingTodo = styled.div`
   max-width: 400px;
   margin: 0 auto;
`;

const Input = styled.input`
   width: 100%;
   height: 40px;
`;

const AddBtn = styled.button`
   display: block;
   margin: 20px auto 0;
   background: #fff;
   border-radius: 4px;
   cursor: pointer;
   padding: 10px 18px;
   border: 1px solid #000;
`;

const CreationForm: FC<CreationFormProps> = ({ todos, setTodos }): JSX.Element => {
   const [todoTitle, setTodoTitle] = useState<string>('');

   const createNewTodo = (todoTitle: string): ITodo => {
      return {
         id: nanoid(),
         title: todoTitle,
         done: false,
      };
   };

   const handleAdd = (newTodo: string, todos: ITodo[]) => {
      if (newTodo) {
         setTodos([...todos, createNewTodo(newTodo)]);
         setTodoTitle('');
      }
   };

   return (
      <AddingTodo>
         <Input type="text" value={todoTitle} onChange={(e) => setTodoTitle(e.target.value)} />
         <AddBtn onClick={() => handleAdd(todoTitle, todos)}>Добавить</AddBtn>
      </AddingTodo>
   );
};

export default CreationForm;
