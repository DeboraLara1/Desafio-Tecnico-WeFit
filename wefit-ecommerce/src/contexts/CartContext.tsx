import React, { createContext, useContext, useState, ReactNode, useEffect, useMemo } from 'react';
import { Movie } from '../types';

interface CartItem {
  movie: Movie;
  quantity: number;
}

interface CartContextData {
  items: CartItem[];
  addToCart: (movie: Movie) => void;
  removeFromCart: (movieId: number) => void;
  clearCart: () => void;
  getItemQuantity: (movieId: number) => number;
  total: number;
  totalItems: number;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

const CART_STORAGE_KEY = 'wefit-cart';

const saveCartToStorage = (items: CartItem[]) => {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  } catch (error) {
    console.error('Erro ao salvar carrinho no localStorage:', error);
  }
};

const loadCartFromStorage = (): CartItem[] => {
  try {
    const stored = localStorage.getItem(CART_STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Erro ao carregar carrinho do localStorage:', error);
    return [];
  }
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => loadCartFromStorage());

  useEffect(() => {
    saveCartToStorage(items);
  }, [items]);

  const addToCart = (movie: Movie) => {
    setItems(prevItems => {
      const existingItem = prevItems.find(item => item.movie.id === movie.id);
      
      if (existingItem) {
        return prevItems.map(item =>
          item.movie.id === movie.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { movie, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (movieId: number) => {
    setItems(prevItems => {
      const existingItem = prevItems.find(item => item.movie.id === movieId);
      
      if (existingItem && existingItem.quantity > 1) {
        return prevItems.map(item =>
          item.movie.id === movieId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      } else {
        return prevItems.filter(item => item.movie.id !== movieId);
      }
    });
  };

  const clearCart = () => {
    setItems([]);
    try {
      localStorage.removeItem(CART_STORAGE_KEY);
    } catch (error) {
      console.error('Erro ao limpar localStorage:', error);
    }
  };

  const getItemQuantity = (movieId: number) => {
    const item = items.find(item => item.movie.id === movieId);
    return item ? item.quantity : 0;
  };

  const total = useMemo(() => 
    items.reduce((sum, item) => sum + (item.movie.price * item.quantity), 0),
    [items]
  );
  
  const totalItems = useMemo(() => 
    items.reduce((sum, item) => sum + item.quantity, 0),
    [items]
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        clearCart,
        getItemQuantity,
        total,
        totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
