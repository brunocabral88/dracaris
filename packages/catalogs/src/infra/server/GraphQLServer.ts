import { ApolloServer, gql } from 'apollo-server-express';
import GetAllProducts from '../../useCases/products/GetAll';

const typeDefs = gql`
    type Product {
        title: String
        price: Float
    }

    type Query {
        products: [Product]
    }
`;

const getAllProductsUseCase = GetAllProducts;

const resolvers = {
    Query: {
        products: () => getAllProductsUseCase(),
    }
};

export default class GraphQLServer {

    server: ApolloServer = new ApolloServer({
        typeDefs,
        resolvers,
        introspection: true
    });

}