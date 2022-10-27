import "../styles/globals.css";
import type {AppProps} from "next/app";
import Navbar from "../components/Navigation/Navbar/navbar.component";
import {useApollo} from "../lib/apolloClient";
import {ApolloProvider} from "@apollo/client";

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps);

    console.log("ENV", process.env.NEXT_PUBLIC_API_URL);

  return (
    <ApolloProvider client={apolloClient}>
      {/*<Navbar>*/}
        <Component {...pageProps} />
      {/*</Navbar>*/}
    </ApolloProvider>
  );
}

export default MyApp;
