import {Route, Routes } from 'react-router-dom';
import ShowGitHubUser from './ShowGithubUser';

function App() {

  return (
    <div>
        <Routes>
          <Route path='/' element={<p>Write the Github username before /users/ IE: http://localhost:5173/users/Username</p>} />
          <Route path='/users/:username' element={<ShowGitHubUser/>} />
        </Routes>
    </div>
  )
}

export default App
