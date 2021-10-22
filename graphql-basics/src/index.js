import {GraphQLServer} from "graphql-yoga";
// ... or using `require()`
// const { GraphQLServer } = require('graphql-yoga')

const typeDefs = `
  type Query {
    hello(name: String): String!
    user: User!
    post: Post!
  }
  
  type User {
    id: ID!
    name: String!
    email: String!
    age: Int
  }
  
  type Post {
    id: ID!
    title: String!
    body: String!
    published: Boolean!
  }
`;

const resolvers = {
    Query: {
        hello: (_, {name}) => `Hello ${name}`
    },
};

const server = new GraphQLServer({typeDefs, resolvers});
server.start(() => console.log("Server is running on localhost:4000"));
