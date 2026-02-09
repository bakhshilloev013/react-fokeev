import { v4 as uuidv4 } from 'uuid';
import Product from './Product';
import productData from '../data/productData';

function Catalog() {
    const products = [...productData];
    return (
        <main className="catalog">
            <ul className="products">
                {products.map((item) => (
                    <Product {...item} key={uuidv4()} />
                ))}
            </ul>
        </main>
    );
}

export default Catalog;
