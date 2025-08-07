import { useCart } from '../hooks/useCart';
import { CartItem } from './CartItem';

export function Cart() {
    const { items } = useCart();

    return (
        <div className="cart">
            <h2 className="cart-header">Your Cart</h2>
            {items.length === 0 ? (
                <p className="cart-empty">Your cart is empty.</p>
            ) : (
                <div className="cart-items">
                    {items.map(item => (
                        <CartItem key={item.product.id} item={item} />
                    ))}
                </div>
            )}
        </div>
    );
}