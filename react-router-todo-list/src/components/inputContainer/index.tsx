import React, { useState, useContext } from 'react';
import styled from 'styled-components';

import { Button } from 'components/button';
import { Input } from 'components/input';

import { ToDoListContext } from 'contexts';

const Container = styled.div`
  display: flex;
`;

interface Props {
  readonly onAdd?: () => void;
}

export const InputContainer = ({ onAdd }: Props) => {
  const [toDo, setToDo] = useState('');
  const { addToDo } = useContext(ToDoListContext);

  return (
    <Container>
      <Input placeholder="할 일을 입력해 주세요" value={toDo} onChange={setToDo} />
      <Button
        label="추가"
        onClick={() => {
          addToDo(toDo);
          setToDo('');
          if (toDo && typeof onAdd === 'function') {
            onAdd();
          }
        }}
      />
    </Container>
  );
};
