import {
  ApolloClient,
  createNetworkInterface,
} from 'react-apollo';

const {
  NODE_ENV,
  AWS_GRAPHQL_PROD,
} = process.env;

const uri = NODE_ENV === 'production' ? AWS_GRAPHQL_PROD : 'http://localhost:3002/graphql';

if (!uri) throw new Error('Apollo Client network interface is not defined.');

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri,
  }),
});
export default client;
