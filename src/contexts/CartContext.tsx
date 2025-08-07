import { useReducer, useCallback, useMemo } from "react";
import type { CartItem, Product } from "../types/cart";
import type { ReactNode } from "react";
import { CartContext } from "./CartContextDef";

interface State {
    items: CartItem[];
}

type Action = 
  | { type: "ADD_ITEM"; payload: { product: Product; quantity: number } }
  | { type: "REMOVE_ITEM"; payload: { productId: string } }
  | { type: "UPDATE_ITEM_QUANTITY"; payload: { productId: string; quantity: number } }
  | { type: "CLEAR_CART" };

const initialState: State = { items: [] };

function cartReducer(state: State, action: Action): State {
    switch (action.type) {
        case "ADD_ITEM":
            return {
                ...state,
                items: [...state.items, { product: action.payload.product, quantity: action.payload.quantity }]
            };
        case "REMOVE_ITEM":
            return {
                ...state,
                items: state.items.filter(item => item.product.id !== action.payload.productId)
            };
        case "UPDATE_ITEM_QUANTITY":
            return {
                ...state,
                items: state.items.map(item =>
                    item.product.id === action.payload.productId
                        ? { ...item, quantity: action.payload.quantity }
                        : item
                )
            };
        case "CLEAR_CART":
            return { items: [] };
        default:
            return state;
    }
}

export function CartProvider({ children }: { children: ReactNode }) {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    const addItem = useCallback((product: Product, quantity = 1) => {
        const existingItem = state.items.find(item => item.product.id === product.id);
        if (existingItem) {
            dispatch({ type: "UPDATE_ITEM_QUANTITY", payload: { productId: product.id, quantity: existingItem.quantity + quantity } });
            return;
        }
        dispatch({ type: "ADD_ITEM", payload: { product, quantity } });
    }, [state.items]);

    const removeItem = useCallback((productId: string) => {
        dispatch({ type: "REMOVE_ITEM", payload: { productId } });
    }, []);

    const updateItemQuantity = useCallback((productId: string, quantity: number) => {
        dispatch({ type: "UPDATE_ITEM_QUANTITY", payload: { productId, quantity } });
    }, []);

    const clearCart = useCallback(() => {
        dispatch({ type: "CLEAR_CART" });
    }, []);

    const getTotalItems = useCallback(() => {
        return state.items.reduce((total, item) => total + item.quantity, 0);
    }, [state.items]);

    const getTotalPrice = useCallback(() => {
        return state.items.reduce((total, item) => total + item.product.price * item.quantity, 0);
    }, [state.items]);

    const value = useMemo(() => ({
        items: state.items,
        addItem,
        removeItem,
        updateItemQuantity,
        clearCart,
        getTotalItems,
        getTotalPrice
    }), [state.items, addItem, removeItem, updateItemQuantity, clearCart, getTotalItems, getTotalPrice]);

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}