import React from 'react';
import styled from 'styled-components';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import { ToDoListProvider } from 'contexts';
import { List, Add, Detail, NotFound } from 'pages';
import { PageHeader } from 'components';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <Router>
      <ToDoListProvider>
        <Container>
          <PageHeader />
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<List />} />
            <Route path="/add" element={<Add />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Routes>
        </Container>
      </ToDoListProvider>
    </Router>
  );
}

export default App;
