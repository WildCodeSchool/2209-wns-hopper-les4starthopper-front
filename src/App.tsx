import "./App.scss";
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import NavBar from "./components/NavBar/NavBar";
import Main from "./components/Main/Main";

const httpLink = createHttpLink({
  uri: "http://localhost:5070/",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists

  const token = localStorage.getItem("token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="mainBox">
        <NavBar />
        <Main />
      </div>
    </ApolloProvider>
  );
}

export default App;
