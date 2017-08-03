import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo';
// import { networkInterface } from './graphql/networkInterface';
import App from './App';

// const client = new ApolloClient({ networkInterface });

const networkInterface = createNetworkInterface({
    uri: 'https://api.act.today/graphql'
});

const client = new ApolloClient({ networkInterface });

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
);
