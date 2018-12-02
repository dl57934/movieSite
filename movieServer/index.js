import { GraphQLServer } from "graphql-yoga";
import resolvers from "./javascript/Resolver";
import connectDB from ".//mongoConnect";
import express from "express";
import passport from "passport";

const app = express();

const server = new GraphQLServer({
  typeDefs: "./graphql/schema.graphql",
  resolvers
});

server.start(() => {
  console.log("graphQl Start");
  connectDB();
  app.use(passport.initialize());
});
