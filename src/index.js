import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

// apollo
// fix for method2 implementation of mutation events
const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        allClients: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        allProjects: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: "https://simple-graphql-fe7r.onrender.com/api/",
  cache,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
);
