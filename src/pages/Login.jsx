import { 
  useLoaderData, 
  Form, 
  redirect, 
  useActionData, 
  useNavigation
} from "react-router-dom";
import { loginUser } from "../api";

// eslint-disable-next-line react-refresh/only-export-components
export async function action({ request}) {
  const formData = await request.formData();
  console.log(formData);

  const email = formData.get("email");
  const password = formData.get("password");

  const pathname = new URL(request.url)
    .searchParams.get("redirectTo") || "/host";
  console.log(pathname);

  try {
    const data = await loginUser({ email, password });
    console.log(data);
  
    // eslint-disable-next-line no-unused-vars
    const saveLogin = localStorage.setItem("loggedIn", true);
    console.log(localStorage);
  
    const response = redirect(pathname);
    response.body = true;
  
    return response;
  }
  catch(error) {
    return error;
  }
  
}

// eslint-disable-next-line react-refresh/only-export-components
export function loader({ request }) {
  return new URL(request.url).searchParams.get("message");
}


export default function Login() {

  const error = useActionData();

  const message = useLoaderData();

  const navigation = useNavigation();

  console.log(navigation);

  // localStorage.clear();
 
  return (
    <div className="login-page">
      <h1>Sign in to your account</h1>

      {error && <h3 className="login-red" >{error.message}</h3>}

      {message && <h3 className="login-red">{message}</h3>}

      <Form method="post" replace>
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
