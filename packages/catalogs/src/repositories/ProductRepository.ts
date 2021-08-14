import IProductRepository from './IProductRepository';
import Product from '../models/Product';

export default class ProductRepository implements IProductRepository {

    getAll(): Product[] {
        return [{ title: 'Product 01', price: 10.99 }];
    }

}