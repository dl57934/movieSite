import {GraphQLServer} from 'graphql-yoga';
import resolvers from './javascript/Resolver';

const server = new GraphQLServer({
    typeDefs:'./graphql/schema.graphql',
    resolvers
});

server.start(()=>{
    console.log("graphQl Start");
});