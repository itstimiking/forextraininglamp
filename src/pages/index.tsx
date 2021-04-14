import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useEffect, useState, useContext } from "react";

import { AuthContext } from "../context/auth";

export default function Home() {

    const [login,logout, user, loggedIn] = useContext(AuthContext);

    return (
        <div>
            <Head>
                <title>Forex Trading Lamp</title>
            </Head>

            <main>
                
                {user && console.log(user)}

                {loggedIn ? (
                    <p>Logged in already </p>
                ) : (
                    <p>Not logged in yet</p>
                )}

                {user && <p>Welcome {user?.user_metadata.full_name} !</p>}

                {!user ? (
                    <button onClick={login}>
                        Login
                    </button>
                ) : (
                    <button onClick={logout}>Logout</button>
                )}

            </main>

            <footer></footer>
        </div>
    );
}
