import CustomHead from "./components/CustomHead";
import styles from "../styles/Home.module.css";
import { useEffect, useState, useContext } from "react";

import { AuthContext } from "../context/auth";

import NavTop from "./components/TopNav";
import TopBar from "./components/TopBar";
import Banner from './components/Banner'

export default function Home() {

    //const [login,logout, user, loggedIn] = useContext(AuthContext);

    return (
        <div>
            
            <CustomHead
                title="Forex Training Lamp"
                description="Learn how to be profitable trading safely and successfully"
                ogDescription="We show you the way to become a profitable forex trader"
                ogImage=""
                ogSiteName="Forex Trading Lamp"
                ogType="Website"
                ogTitle="Forex trading lamp"
                ogUrl="https://forextradinglamp.com"
            />
            <main>
                <TopBar />
                <NavTop />

                <Banner />
                
            </main>

            <footer></footer>
        </div>
    );
}
