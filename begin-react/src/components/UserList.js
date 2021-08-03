import React, { useEffect } from 'react';

function User({ user, onRemove, onToggle }) {

  // useEffect(() => {
  //   console.log(user);
  // });

  /*
    useEffect의 첫번째 파라미터로는 함수, 두번째에는 의존값이 있는 배열(deps)을 넣는다.
    또, 함수를 반환(return) 할 수 있는데, 이를 cleanup 함수라고 한다.
    deps가 비어있는 경우, 컴포넌트가 사라질 때 cleanup 함수가 호출되어 실행된다.
  */

  /*
    만약 useEffect 안에서 사용하는 상태나, props가 있다면 deps를 넣어주는 것이 규칙이다.
    넣지 않는다면 useEffect에 등록한 함수가 실행 될 때 최신 props / 상태를 가르키지 않게 된다.
    deps를 생략하면 컴포넌트가 리렌더링 될 때마다 호출된다.
  */

  return (
    <div>
      <b
        style={{
          cursor: 'pointer',
          color: user.active ? '#5AD4D4' : '#000000'
        }}
        onClick={() => onToggle(user.id)}
      >
        {user.username}
      </b>
      <span>({user.email})</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
}

function UserList({ users, onRemove, onToggle }) {
  return (
    <div>
      {users.map(user => (
        <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle} />
      ))}
    </div>
  );
}

export default UserList;

/*
  <주로 마운트 시 하는 작업들> / [ componentDidmount ]
  · props 로 받은 값을 컴포넌트의 로컬 상태로 설정.
  · 외부 API 요청. (REST API 등...)
  · 라이브러리의 사용. (D3, Video.js 등...)
  · setInterval을 통한 반복작업 혹은 setTimeout을 통한 작업 예약.

  <언마운트 시 하는 작업들>
  · setInterval, setTimeout을 사용하여 등록한 작업들 clear하기. (clearInterval, clearTimeout)
  · 라이브러리 인스턴스 제거.
*/
