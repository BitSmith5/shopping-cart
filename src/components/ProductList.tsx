import { ProductCard } from './ProductCard';
import type { Product } from '../types/cart';

interface ProductListProps {
  products: Product[];
}

export function ProductList({ products }: ProductListProps) {
  return (
    <div className="product-list">
      <h2 className="product-list-header">Available Products</h2>
      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
