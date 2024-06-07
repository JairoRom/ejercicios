import { useState } from 'react';

// Custom hook
const useFormInput = () => {
  const [values, setValues] = useState({
    username: '',
    password: ''
  });

 
  const handleInputChange = (event) => {   // Event handler to update
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const resetForm = () => {
    setValues({
      username: '',
      password: ''
    });
  };

  // Return the inputs
  return {
    values,
    handleInputChange,
    resetForm
  };
};

// Use custom hook
const LoginForm = () => {
  const { values, handleInputChange, resetForm } = useFormInput();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted values:', values);
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Username:
        </label>  
          <input
            type="text"
            name="username"
            value={values.username}
            onChange={handleInputChange}/>
        
      </div>
      <div>
        <label>
          Password:
        </label>  
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleInputChange}/>
        
      </div>
      <button>Login</button>
    </form>
  );
};

export default LoginForm;
