import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { completedAll } from 'reducer/todos';

import s from './ToggleTodo.module.scss';

const ToggleTodo = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const hasEventEvery = todos.every((task) => task.completed);
  const [isCheck, setIsCheck] = useState(false);
  const handleToggleAll = () => {
    dispatch(completedAll());
    setIsCheck(!isCheck);
  };

  useEffect(() => {
    setIsCheck(isCheck);
  }, [isCheck]);

  return (
    <>
      {todos.length > 0 && (
        <>
          <input
            type="checkbox"
            className={s.input}
            onChange={handleToggleAll}
            checked={hasEventEvery}
            id="toggleAll"
          />
          <label htmlFor="toggleAll" />
        </>
      )}
    </>
  );
};

export default ToggleTodo;
