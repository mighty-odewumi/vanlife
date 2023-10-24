import { useState } from "react";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  console.log(formData);

  function handleChange(e) {
    const {name, value} = e.target;
    console.log("Name", name, "Value", value);
    setFormData(prevValue => ({
      ...prevValue,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Submitted!");
  }

  return (
    <div className="login-page">
      <h1>Sign in to your account</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          required
          onChange={handleChange}        
          value={formData.email}
          name="email"
          placeholder="Enter your email e.g. joeschmidt@jolie.com"
        />

        <input 
          type="password" 
          required
          onChange={handleChange}
          value={formData.password}
          name="password"
          placeholder="Enter your password"
        />

        <button>Log in</button>
      </form>

      <p>Don&apos;t have an account? <span>Create one now</span></p>
    </div>
  )
}
