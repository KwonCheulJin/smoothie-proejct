import React from 'react';
import styled from 'styled-components';

import { InputContainer, ToDoList } from 'components';
import { ToDoListProvider } from 'contexts';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Contents = styled.div`
  display: flex;
  background-color: #ffffff;
  flex-direction: column;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
`;

function App() {
  return (
    <ToDoListProvider>
      <Container>
        <Contents>
          <ToDoList />
          <InputContainer />
        </Contents>
      </Container>
    </ToDoListProvider>
  );
}

export default App;
