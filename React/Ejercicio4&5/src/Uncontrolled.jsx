

function Uncontrolled() {
  function handleUncontrolled(event) {
    event.preventDefault()
    const username=event.target.elements.nameItem('username').value
    const password=event.target.elements.nameItem('password').value
    const session=event.target.elements.nameItem('session').checked

    const data={
        username,
        password,
        session
    }
    console.log(data);

    // const formData=new FormData(event.target)
    // const data={
    //     username : formData.get('username'),
    //     password : formData.get('password'),
    //     session : formData.get('session') =='on' ? true : false
    // }

  }

  return (
    <form onSubmit={handleUncontrolled} >
        <h1>Uncontrolled</h1>
        <input name="username" />
        <input name="password" type="password" />
        <input name="session" type="checkbox" />
        <button>Login</button>
        <button type="reset" >Reset</button>
    </form>
  )
}

export default Uncontrolled