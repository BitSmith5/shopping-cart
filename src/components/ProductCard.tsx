import type { Product } from '../types/cart';
import { useCart } from '../hooks/useCart';

interface ProductCardProps {
  product: Product;
}

export function ProductCard ({ product } : ProductCardProps) {
    const { addItem } = useCart();

    return (
        <div className="card">
            <img src={product.image} alt={product.name} className="card-image" />
            <h3 className="card-title">{product.name}</h3>
            <p className="card-description">{product.description}</p>
            <p className="card-price">${product.price.toFixed(2)}</p>
            <button className="button" onClick={() => addItem(product)}>Add to Cart</button>
        </div>
    );
}