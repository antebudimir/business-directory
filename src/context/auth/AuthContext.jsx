import { createContext, useEffect, useState } from 'react';
import { auth } from '../../firebase/config';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const [loading, setLoading] = useState(true),
		[authUser, setAuthUser] = useState();

	const signup = (email, password) =>
		auth.createUserWithEmailAndPassword(email, password);

	const login = (email, password) =>
		auth.signInWithEmailAndPassword(email, password);

	const logout = () => auth.signOut();

	// Set authenticated user and cancel subscription
	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			setAuthUser(user);
			setLoading(false);
		});

		return unsubscribe;
	}, []);

	const value = {
		signup,
		login,
		logout,
		authUser,
	};

	return (
		<AuthContext.Provider value={value}>
			{!loading && children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
