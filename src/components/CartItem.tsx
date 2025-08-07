import type { CartItem as CartItemType } from '../types/cart';
import { useCart } from '../hooks/useCart';

interface CartItemProps {
  item: CartItemType;
}

export function CartItem({ item }: CartItemProps) {
  const { removeItem, updateItemQuantity } = useCart();

  return (
    <div className="cart-item">
      <div className="cart-item-info">
        <img src={item.product.image} alt={item.product.name} className="cart-item-image" />
        <div className="cart-item-details">
          <h4 className="cart-item-title">{item.product.name}</h4>
          <p className="cart-item-price">${item.product.price.toFixed(2)}</p>
        </div>
      </div>
      <div className="cart-item-controls">
        <div className="cart-item-quantity">
          <label htmlFor={`quantity-${item.product.id}`}>Quantity:</label>
          <input 
            id={`quantity-${item.product.id}`}
            type="number" 
            value={item.quantity} 
            onChange={(e) => updateItemQuantity(item.product.id, Number(e.target.value))}
            min="1"
            className="cart-item-input"
          />
        </div>
        <p className="cart-item-subtotal">
          ${(item.quantity * item.product.price).toFixed(2)}
        </p>
        <button 
          className="button button--danger" 
          onClick={() => removeItem(item.product.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
