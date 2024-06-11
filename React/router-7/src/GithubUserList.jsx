import React, { useEffect, useState } from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import ShowGithubUser from './ShowGithubUser';

function GithubUserList() {
    const [users,setUsers]=useState([])

    useEffect(()=>{
        fetch('https://api.github.com/users')
        .then(res=>res.json())
        .then(data=>setUsers(data))
        .catch(error=>console.error('Error fetching',error))
    },[]);

  return (
    <div>
        <h2>List of github users:</h2>
        <ul>
            {users.map(user=>(
                <li key={user.id}>
                    <Link to={`/users/${user.login}`}>{user.login}</Link>
                </li>
            ))}
        </ul>
        <Routes>
            <Route path='/:username' element={<ShowGithubUser />} />
        </Routes>
    </div>
  );
}

export default GithubUserList