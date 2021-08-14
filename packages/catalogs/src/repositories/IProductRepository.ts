import Product from '../models/Product';

export default interface IProductRepository {

    getAll(): Product[];

};

