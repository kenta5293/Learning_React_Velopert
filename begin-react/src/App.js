import React from 'react';
import Hello from './components/Hello';
import Wrapper from './components/Wrapper';
import './App.css';

function App() {

  return (
    <>
      <Wrapper>
        <Hello name="react" color="#B64A3D" />
        <Hello color="#DD8F5F" />
      </Wrapper>
    </>
  );
}

export default App;
