import Head from 'next/head';
import styles from '../styles/Home.module.css';
import {useEffect, useState} from 'react';
import netlifyIdentity from 'netlify-identity-widget'

import netlifyAuth from '../lib/netlifyAuth.js'



export default function Home() {

  let [user, setUser] = useState(null);
  let [loggedIn, setLoggedIn] = useState(netlifyAuth.isAuthenticated)
  
  useEffect(()=>{
    netlifyAuth.initialize((user) => {
      setLoggedIn(!!user);
      setUser(user);
    })
  }, [loggedIn])


  let login = () => {
    netlifyAuth.authenticate((user) => {
      setLoggedIn(!!user)
      setUser(user)
      netlifyAuth.closeModal()

      console.log(user);
    })
  }
  
  let logout = () => {
    netlifyAuth.signout(() => {
      setLoggedIn(false)
      setUser(null)
    })
  }


  return (
    <div>
      <Head>
        <title>Forex Trading Lamp</title>
      </Head>

      <main>

        {user && console.log(user)}

        {loggedIn ? <p>Logged in already </p> : <p>Not logged in yet</p>}

        {user && <p>Welcome {user?.user_metadata.full_name} !</p>}
        <br />
        <p>Button</p>
        {
          !user ? <button onClick={()=>netlifyIdentity.open('signup')}>Login</button>
          : <button onClick={logout}>Logout</button>
        }

      </main>

      <footer>
        
      </footer>
    </div>
  )
}
