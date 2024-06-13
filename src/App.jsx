import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import UserData from './UserData'

const API = "https://jsonplaceholder.typicode.com/users";
const App = () => {

  const [users, setUser] = useState([]);

  const fetchUsers = async(url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setUser(data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
  fetchUsers(API)
  },[])
  return (
    <>
      <table className="table">
  <thead className="thead-dark">
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Address</th>
    </tr>
  </thead>
  <tbody>
   
 <UserData users={users}/>
  </tbody>
</table>


    </>
  )
}

export default App
