import React, { useState, useContext } from 'react';
import styled from 'styled-components';

import { Button } from 'components/button';
import { Input } from 'components/input';

import { ToDoListContext } from 'contexts';

const Container = styled.div`
  display: flex;
`;

export const InputContainer = () => {
  const [toDo, setToDo] = useState('');
  const { addToDo, handleKeyPress } = useContext(ToDoListContext);

  return (
    <Container>
      <Input
        placeholder="할 일을 입력해 주세요"
        value={toDo}
        onChange={setToDo}
        onKeyPress={(event) => {
          handleKeyPress(event, toDo);
          setToDo('');
        }}
      />
      <Button
        label="추가"
        onClick={() => {
          addToDo(toDo);
          setToDo('');
        }}
      />
    </Container>
  );
};
