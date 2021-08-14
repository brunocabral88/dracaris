import IProductRepository from './IProductRepository';
import ProductRepository from './ProductRepository';

const repositories = {
    productRepository: new ProductRepository() as IProductRepository,
};

export default repositories;