import { redirect } from "react-router-dom";
import { auth } from "./api";
import { onAuthStateChanged } from "firebase/auth";

export async function requireAuth(request) {
  const url = new URL(request.url).pathname;

  // Create a Promise to check the user's authentication state
  const userPromise = new Promise((resolve, reject) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        resolve(user);  // User is signed in
      } else {
        reject();  // User is not signed in
      }
    });
  });

  try {
    await userPromise; // Wait for the user to be determined
    return null; // User is authenticated, continue as normal
  } catch {
    return redirect(`/login?message=You have to log in&redirectTo=${url}`); // Redirect if not authenticated
  }
}
