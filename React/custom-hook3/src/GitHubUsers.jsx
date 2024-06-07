import { useState } from "react"
import GitHubUser from "./GitHubUser"

function GitHubUsers() {
    const [userList, setUserList]=useState([]);
    const [user,setUser]=useState("")
    function handleFormSubmit(event) {
        event.preventDefault()
        setUserList([...userList, user])
        console.log(userList);
    }
    function handleUserChange(event) {
        // console.log(event.target.value);
        setUser(event.target.value)
        
    }
  return (
    
    <div>
        <form onSubmit={handleFormSubmit}>
				<input data-testid="input" name="username" type="text" onChange={handleUserChange} value={user}/>
				<button type="submit">Add</button>
		</form>
        <ul>
            {userList.map((userName)=>{
                return (<GitHubUser username={userName} />)
            })}
        </ul>
    </div>
  )
}

export default GitHubUsers