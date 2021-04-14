import { useEffect, useState, createContext} from "react";
import netlifyIdentity from "netlify-identity-widget";

import netlifyAuth from "../lib/netlifyAuth.js";


interface user{
    id: string,
    email: string,
    token: object,
    user_metadata: {full_name: string}
}

interface authContext{
    auth:[()=>{}, ()=>{}, user, boolean]
}

export const AuthContext = createContext(null);

export const AuthContextProvider = ({children}) => {

    const [user, setUser] = useState<user>(null);
    let [loggedIn, setLoggedIn] = useState(netlifyAuth.isAuthenticated);

    const login = () => {
        netlifyAuth.authenticate((user) => {
            setLoggedIn(!!user);
            setUser(user);
            netlifyAuth.closeModal();
        });
    };

    const logout = () => {
        netlifyAuth.signout(() => {
            setLoggedIn(false);
            setUser(null);
        });
    };


    useEffect(() => {
        netlifyAuth.initialize((user) => {
            setLoggedIn(!!user);
            setUser(user);
        });
    }, [loggedIn]);

    return (
        <AuthContext.Provider value={[login, logout, user, loggedIn]}>
            {children}
        </AuthContext.Provider>
    );
};

