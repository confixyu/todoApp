import React from 'react';
import Container from 'react-bootstrap/Container';
import Todo from './components/Todo';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container>
      <div className="App">
        <h1>Todo App</h1>
        <Todo />
      </div>
    </Container>
  );
}

export default App;
