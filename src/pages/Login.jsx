import { 
  useLoaderData, 
  Form, 
  redirect, 
  useActionData, 
  useNavigation,
  useNavigate
} from "react-router-dom";
// import { loginUser } from "../api";
import { useAuth } from "../AuthContext.jsx";
import React, { useState } from "react";
 

// eslint-disable-next-line react-refresh/only-export-components
/* export async function action({ request, login }) {
  const formData = await request.formData();
  console.log(formData);

  const email = formData.get("email");
  const password = formData.get("password");

  const pathname = new URL(request.url)
    .searchParams.get("redirectTo") || "/host";
  console.log(pathname);

  if (!authContext) {
    console.log("No auth context available!");
  }

  try {
    const data = await login({ email, password });
    console.log(data);
  
    const response = redirect(pathname);
    response.body = true;
  
    return response;
  }
  catch(error) {
    console.log("Error logging in", error);
    return error;
  }
  
} */

// eslint-disable-next-line react-refresh/only-export-components
export function loader({ request }) {
  return new URL(request.url).searchParams.get("message");
}


export default function Login() {

  // const error = useActionData();
  const [error, setError] = useState(null);

  const message = useLoaderData();

  const navigation = useNavigation(); // Checks for navigation state
  const navigate = useNavigate(); // Used to move to a new route

  const { login } = useAuth();

  // Moved submission function back to component to be able to use custom hook, useAuth()
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const data = await login(email, password); 
      console.log(data);
      return navigate("/host");
    } catch (error) {
      console.log("Error logging in:", error);
      setError(error);
      return error;
    }
  };
 
  return (
    <div className="login-page">
      <h1>Sign in to your account</h1>

      {error && <h3 className="login-red" >{error.message}</h3>}

      {message && <h3 className="login-red">{message}</h3>}

      <Form method="post" replace onSubmit={handleSubmit}>
        <input 
          type="email" 
          
          name="email"
          placeholder="Enter your email e.g. joeschmidt@jolie.com"
        />

        <input 
          type="password" 
          
          name="password"
          placeholder="Enter your password"
        />

        <button
          disabled={navigation.state === "submitting"}
        >
          {navigation.state === "submitting" 
            ? "Logging in..." 
            : "Log in"
          }
        </button>
      </Form>

      <p>Don&apos;t have an account? <span>Create one now</span></p>
    </div>
  )
}
