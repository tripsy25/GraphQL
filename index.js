import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./typeDefs.js";
import { resolvers} from './resolvers.js';

//We need apolloServer to bridge the gap between the express server and apollor server working together 
// and working on the 4000 port
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// ApolloServer needs two things -> typeDefs and resolvers
//typeDefs (typeDefinition) is your schema -> it contains Query and Mutation for getting the data and updating the data
//reolvers -> function implementation will go into resolvers

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
  listen: { port: 4001 },
});

console.log(`🚀  Server ready at: ${url}`);
