import "../styles/globals.css";
import type { AppProps } from 'next/app'
import { AuthContextProvider } from "../context/auth";
import React from "react";

function MyApp({ Component, pageProps }: any) {
    const Layout = Component.Layout ? Component.Layout : React.Fragment;

    return (
        <AuthContextProvider>
            <Component {...pageProps} />
        </AuthContextProvider>
    );
}

export default MyApp;
