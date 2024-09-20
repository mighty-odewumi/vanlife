import { useState, useContext, createContext } from "react";
import { signIn, signOutUser } from "./api";

const AuthContext = createContext();

export function AuthProvider({children}) {
	const [user, setUser] = useState(null);

	const login = async (email, password) => {
		try {
			const loggedInUser = await signIn(email, password);
			setUser(loggedInUser); // Store user in context
			return loggedInUser;
		} catch (error) {
			throw new Error(error.message);
		}
	}

	// Sign-out function
	const logout = async () => {
		try {
		  await signOutUser(); // logging out function from api.js
		  setUser(null); // Clear the user state after logging out
		} catch (error) {
		  console.error("Error logging out:", error);
			return error;
		}
	};

	// console.log("Logged out! outside func", user);

	return (
		<AuthContext.Provider value={{user, login, logout}}>
			{children}
		</AuthContext.Provider>
	)
}

export function useAuth() {
	return useContext(AuthContext);
}

export { AuthContext };
