
import './App.css';

import { useState, useCallback, useEffect, useMemo } from "react";
import { useUsers } from './hooks/useUsers';


const UserList = (props) => {
  const [users, { addUser, removeUser }] = useUsers();

  useEffect(() => {
    console.log('updated users', users);
    props.onChange(users)
  }, [users])

  useEffect(() => {
    if (users.length === 0) {
      return;
    }
    const timerId = setTimeout(() => {
      console.log('removed ->', users[0].name)
      removeUser(users[0].name)()
    }, 2000);
    return () => {
      clearTimeout(timerId);
    }
  }, [users])
  return <div>
    <button onClick={addUser}>Add</button>
    <div>
      {users.map((item) => <div>{item.name}<button onClick={removeUser(item.name)}>Remove</button></div>)
      }
    </div >
  </div>
}

const NumbersList = () => {
  const [numbers, setNumbers] = useState([])
  const [value, setValue] = useState(0);
  const sum = useMemo(() => numbers.reduce((acc, number) => acc + number, 0), [numbers])

  const onChange = (event) => {
    setValue(event.target.value)
  }
  const onSubmit = (event) => {
    event.preventDefault();
    const copyNumbers = [...numbers];
    copyNumbers.push(parseInt(value));
    setNumbers(copyNumbers);
    setValue(0);
  }
  return <form onSubmit={onSubmit} action=''>
    <h1>sum:{sum}</h1>
    <input type="number" onChange={onChange} value={value} />
    <button type="submit">save</button>
  </form>
}

function App(props) {
  const [state, setState] = useState([])

  useEffect(() => {
    console.log('updated');
  })
  useEffect(() => {
    console.log('mounted');
  }, [])
  useEffect(() => {
    console.log('update State', state);
  }, [state])

  return (
    <div className="App">
      <NumbersList />
      <UserList onChange={(users) => {
        console.log('', users)
      }} />
    </div>
  );
}
export default App;