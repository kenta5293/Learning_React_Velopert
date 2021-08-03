import React, { useRef, useState, useMemo } from 'react';
import UserList from './components/UserList';
import CreateUser from './components/CreateUser';
import './App.css';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는 중...');
  return users.filter(user => user.active).length;
}

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });

  const { username, email } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true,
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false,
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false,
    }
  ]);

  const nextId = useRef(4);

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email
    };
    setUsers([...users, user]);
    // 다른 방법으로는 concat을 이용하는 방법이 있다
    // concat 함수는 기존의 배열을 수정하지 않고, 새로운 원소가 추가된 새로운 배열을 만들어 준다
    // setUsers(users.concat(user));

    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
  };

  const onRemove = (id) => {
    // user.id가 파라미터로 일치하지 않는 원소만 추출하여 새로운 배열을 만든다
    // = user.id가 id 인 것을 제거함
    setUsers(users.filter(user => user.id !== id));
  };

  const onToggle = (id) => {
    setUsers(
      users.map(user =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };

  const count = useMemo(() => countActiveUsers(users), [users]);

  /*
    useMemo의 첫번째 파라미터에는 어떻게 연산할 지 정의하는 함수가 들어간다.
    두번째 파라미터에는 deps 배열을 넣어주는데 해당 배열 안의 값이 바뀐다면,
    첫번째 파라미터 속 함수를 호출하여 값을 갱신하고,
    바뀌지 않았다면 이전에 연산했던 값을 재사용하게 된다.
  */

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성사용자 수 : {count}</div>
    </>
  );
}

export default App;
