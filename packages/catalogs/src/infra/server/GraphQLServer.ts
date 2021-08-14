import { ApolloServer, gql } from 'apollo-server-express';

const typeDefs = gql`
    type Book {
        title: String
        author: String
    }

    type Query {
        books: [Book]
    }
`;

const resolvers = {
    Query: {
        books: () => [{ title: 'Domain Driven Design', author: 'Foo Bar' }]
    }
};

export default class GraphQLServer {

    server: ApolloServer = new ApolloServer({
        typeDefs,
        resolvers,
        introspection: true
    });

}