import React from 'react';
import Hello from './components/Hello';
import Wrapper from './components/Wrapper';
import './App.css';

function App() {

  return (
    <>
      <Wrapper>
        {/* props의 이름만 작성하고 값 설정을 생략하면 true로 설정한 것으로 간주된다 */}
        <Hello name="react" color="#B64A3D" isSpecial />
        <Hello color="#DD8F5F" />
      </Wrapper>
    </>
  );
}

export default App;
