import logo from './logo.svg';
import './App.css';
import React,{useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {getUsers} from "./features/users/usersSlice"

function App() {
  const dispatch = useDispatch()
  const {users} = useSelector(state=> state.users)

  useEffect(()=>{
    dispatch(getUsers());//slice ထဲက action function ကိုခေါ်လိုက်တာ 
  },[])

  return (
    <div className="App">
      <h1>Welcome to App of Async Thunk</h1>
      {users && users.map((user, i) => <h5 key={i}>{user.name}</h5> )}
    </div>
  );
}

export default App;
