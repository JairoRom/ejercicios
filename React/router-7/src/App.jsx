import React from 'react';
import {Route, Routes } from 'react-router-dom';
import GithubUserList from './GithubUserList';

function App() {

  return (
  
      <div>
          <Routes>
            <Route path='/' element={<GithubUserList/>} />
            {/* <Route path='/users/:username' element={<ShowGitHubUser/>} /> */}
          </Routes>
      </div>
    
  )
}

export default App
