import React from 'react';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';

import { ToDoListProvider } from 'contexts';
import { List, Add } from 'pages';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <ToDoListProvider>
      <Container>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/add" element={<Add />} />
        </Routes>
      </Container>
    </ToDoListProvider>
  );
}

export default App;
