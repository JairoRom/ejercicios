import { useState } from "react";
import GitHubUser from "./GitHubUser";

function GitHubUsers() {
    const[usernames,setUsernames]=useState([]);
    const[userInput,setUserInput]= useState("");

    function handleUserInputChange(event) {
        setUserInput(event.target.value);
        
    }
    function handleSubmit(event) {
        event.preventDefault();
        setUsernames([...usernames,userInput]);
        setUserInput("")
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleUserInputChange} value={userInput} name="userInput" />
            <button type="submit">Submit</button>
        </form>
        <ul>
            {usernames.map((username,i)=>(
                <li key={i} >
                    <GitHubUser username={username} />
                </li>
            ))}
        </ul>
    </div>
  )
}

export default GitHubUsers