import { useState } from "react"
import GitHubUser from "./GitHubUser"

function GitHubUsers() {
    const [userList, setUserList]=useState([]);
    const [user,setUser]=useState("")

    function handleFormSubmit(event) {
        event.preventDefault();
        console.log("Username:", user);
        if(user.trim() !=="" ){
        setUserList([...userList, user])
        setUser("");
        }

    }
    function handleUserChange(event) {
        setUser(event.target.value)
        
    }
  return (
    
    <div>
        <form onSubmit={handleFormSubmit}>
				<input data-testid="input" name="username" type="text" onChange={handleUserChange} value={user}/>
				<button type="submit">Add</button>
		</form>
        <ul>
            {userList.map((userName,i)=>(
                <li key={i}>
                    <GitHubUser username={userName} />
                </li>
            )
            )}
        </ul>
    </div>
  )
}

export default GitHubUsers