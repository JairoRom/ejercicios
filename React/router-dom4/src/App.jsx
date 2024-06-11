import {Link, Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import ShowGitHubUser from './ShowGithubUser';
import {Welcome} from './Welcome'
import { Counter } from './Counter';

function App() {

  return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/Welcome">Welcome</Link>
            </li>
            <li>
              <Link to="/counter">Counter</Link>
            </li>
            <li>
            <Link to="/users">Show GitHub User</Link>
          </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/welcome' element={<Welcome name="Usuario" age={666} /> }/>
          <Route path='/counter' element={<Counter/>} />
          <Route path="/users" element={<p>Write the GitHub username before /users/ IE: http://localhost:5173/users/Username</p>} />
          <Route path='/users/:username' element={<ShowGitHubUser/>} />
        </Routes>
      </div>
  )
}

export default App
