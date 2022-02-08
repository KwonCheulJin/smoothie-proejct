import React, { createContext, useState, useEffect } from 'react';

interface Context {
  readonly toDoList: string[];
  readonly addToDo: (toDo: string) => void;
  readonly deleteToDo: (index: number) => void;
  readonly handleKeyPress: (event: any, toDo: string) => void;
}

const ToDoListContext = createContext<Context>({
  toDoList: [],
  addToDo: (): void => {},
  deleteToDo: (): void => {},
  handleKeyPress: (): void => {},
});

interface Props {
  children: JSX.Element | JSX.Element[];
}

const ToDoListProvider = ({ children }: Props): JSX.Element => {
  const [toDoList, setToDoList] = useState<string[]>([]);

  const addToDo = (toDo: string): void => {
    if (toDo) {
      const newList = [...toDoList, toDo];
      localStorage.setItem('ToDoList', JSON.stringify(newList));
      setToDoList([...toDoList, toDo]);
    }
  };

  const deleteToDo = (index: number): void => {
    let list = [...toDoList];
    list.splice(index, 1);
    localStorage.setItem('ToDoList', JSON.stringify(list));
    setToDoList(list);
  };

  const handleKeyPress = (event: React.KeyboardEvent, toDo: string): void => {
    if (event.key === 'Enter') {
      addToDo(toDo);
    }
  };

  useEffect(() => {
    const list = localStorage.getItem('ToDoList');
    if (list) {
      setToDoList(JSON.parse(list));
    }
  }, []);

  return (
    <ToDoListContext.Provider
      value={{
        toDoList,
        addToDo,
        deleteToDo,
        handleKeyPress,
      }}>
      {children}
    </ToDoListContext.Provider>
  );
};

export { ToDoListContext, ToDoListProvider };
