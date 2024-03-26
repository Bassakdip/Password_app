import './App.css';
import React, { useState } from 'react'
import AddUser from './Components/Users/AddUser';
import UserList from './Components/Users/UserList';

function App() {
  const obj = localStorage.getItem("user")|| {};
  console.log(obj);
  const [usersList, setUsersList] = useState([obj]);
  

  const addUserHandler = (uTitle, uPassword,) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { title: uTitle, pass: uPassword, id: generateID() }
        
      ];
    });
  }

  function generateID() {
    const timestamp = Date.now().toString(36);
    const randomStr = Math.random().toString(36).substr(2, 5);
    return timestamp + randomStr;
  }

  return (
    <div>
      <h1 className='title'>Password Keeper</h1>
      <form className='search'>
        <input type="text" placeholder="Search.." name="search"></input>
      </form>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </div>

  );
}
export default App;
