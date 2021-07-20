import React from 'react';

function Hello({ color, name, isSpecial }) {
  return (
    <div style={{ color: color }}>
      {isSpecial && <b>*</b>}
      {name}님, 안녕하세요
    </div>
  );
}

// 기본값 설정하기
Hello.defaultProps = {
  name: '이름없음'
}

export default Hello;