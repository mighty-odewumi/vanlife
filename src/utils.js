import { redirect } from "react-router-dom";

export async function requireAuth(request) {

  const url = new URL(request.url).pathname;
  console.log(url);

  const isLoggedIn = localStorage.getItem("loggedIn");

  if (!isLoggedIn) {
    const response = redirect(`/login?message=You have to log in&redirectTo=${url}`);
    response.body = true;
    return response;
  }
  
  return null;
}
