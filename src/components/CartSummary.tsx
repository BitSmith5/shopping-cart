import { useCart } from '../hooks/useCart';

export function CartSummary() {
    const { items, getTotalItems, getTotalPrice, clearCart } = useCart();

    return (
        <div className="cart-summary">
            <h2 className="cart-summary-header">Cart Summary</h2>
            {items.length > 0 && (
                <>
                    <div className="cart-summary-items">
                        {items.map(item => (
                            <div key={item.product.id} className="cart-summary-item">
                                <span className="cart-summary-item-name">{item.product.name}</span>
                                <span className="cart-summary-item-quantity">{item.quantity} x ${item.product.price.toFixed(2)}</span>
                                <span className="cart-summary-item-total">${(item.quantity * item.product.price).toFixed(2)}</span>
                            </div>
                        ))}
                    </div>
                    <div className="cart-summary-totals">
                        <p className="cart-summary-total-items">Total Items: {getTotalItems()}</p>
                        <p className="cart-summary-total-price">Total Price: ${getTotalPrice().toFixed(2)}</p>
                    </div>
                    <button className="button button--accent" onClick={clearCart}>Clear Cart</button>
                </>
            )}
            {items.length === 0 && (
                <p className="cart-summary-empty">No items in cart</p>
            )}
        </div>
    );
}