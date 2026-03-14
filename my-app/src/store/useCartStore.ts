import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem {
    id: string;          // A unique ID for the cart line item, usually productId + variant size + isPremium
    productId: string;   // The underlying DB product ID
    name: string;        // Product Name (title)
    image: string;       // Display image
    price: number;       // The unit price evaluated at the time of adding
    quantity: number;    // How many of this item
    packSize: string;    // Pack definition, e.g., "Pack of 25"
    size: string;        // The variant size, e.g., "Standard"
    isPremium: boolean;  // Whether they selected the premium variant
}

interface CartState {
    items: CartItem[];
    addItem: (item: CartItem) => void;
    removeItem: (id: string) => void;
    updateQuantity: (id: string, quantity: number) => void;
    clearCart: () => void;
    getTotalItems: () => number;
    getSubtotal: () => number;
}

export const useCartStore = create<CartState>()(
    persist(
        (set, get) => ({
            items: [],

            addItem: (newItem) => set((state) => {
                const existingItem = state.items.find(item => item.id === newItem.id);
                if (existingItem) {
                    return {
                        items: state.items.map(item =>
                            item.id === newItem.id
                                ? { ...item, quantity: item.quantity + newItem.quantity }
                                : item
                        )
                    };
                } else {
                    return { items: [...state.items, newItem] };
                }
            }),

            removeItem: (id) => set((state) => ({
                items: state.items.filter(item => item.id !== id)
            })),

            updateQuantity: (id, quantity) => set((state) => {
                if (quantity <= 0) {
                    return { items: state.items.filter(item => item.id !== id) };
                }
                return {
                    items: state.items.map(item =>
                        item.id === id ? { ...item, quantity } : item
                    )
                };
            }),

            clearCart: () => set({ items: [] }),

            getTotalItems: () => {
                return get().items.reduce((total, item) => total + item.quantity, 0);
            },

            getSubtotal: () => {
                return get().items.reduce((total, item) => total + (item.price * item.quantity), 0);
            }
        }),
        {
            name: 'ecodosth-cart-storage', // The key used in localStorage
        }
    )
);
