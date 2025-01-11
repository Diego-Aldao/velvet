"use client";
import { LocalProductInteraction } from "@/types/localTypes";
import React, { createContext, useContext, useEffect, useState } from "react";

export interface ProductContextType {
  favoritos: LocalProductInteraction[];
  carrito: LocalProductInteraction[];
  updateFavoritos: (producto: LocalProductInteraction) => void;
  updateCarrito: (producto: LocalProductInteraction) => void;
}

// contexto
const ProductContext = createContext<ProductContextType | null>(null);

interface PropsContext {
  children: React.ReactNode;
}

// Proveedor del contexto
export const ProductProvider = ({ children }: PropsContext) => {
  const [favoritos, setFavoritos] = useState<LocalProductInteraction[]>([]);
  const [carrito, setCarrito] = useState<LocalProductInteraction[]>([]);

  useEffect(() => {
    const storedFavoritos = JSON.parse(
      localStorage.getItem("favoritos") || "[]"
    );
    const storedCarrito = JSON.parse(localStorage.getItem("carrito") || "[]");
    setFavoritos(storedFavoritos);
    setCarrito(storedCarrito);
  }, []);

  useEffect(() => {
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }, [favoritos]);

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  const updateFavoritos = (producto: LocalProductInteraction) => {
    const indexExistente = favoritos.findIndex(
      (favorito) => favorito.id === producto.id
    );
    if (indexExistente !== -1) {
      const updatedFavoritos = [...favoritos];
      updatedFavoritos.splice(indexExistente, 1);
      setFavoritos(updatedFavoritos);
    } else {
      setFavoritos([...favoritos, producto]);
    }
  };

  const updateCarrito = (producto: LocalProductInteraction) => {
    const indexExistente = carrito.findIndex(
      (itemCarrito) => itemCarrito.id === producto.id
    );
    if (indexExistente !== -1) {
      const updatedCarrito = [...carrito];
      updatedCarrito.splice(indexExistente, 1);
      setCarrito(updatedCarrito);
    } else {
      setCarrito([...carrito, producto]);
    }
  };

  return (
    <ProductContext.Provider
      value={{ favoritos, carrito, updateCarrito, updateFavoritos }}
    >
      {children}
    </ProductContext.Provider>
  );
};

// Hook para usar el contexto en otros componentes
export const useProductContext = (): ProductContextType => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error(
      "useProductContext debe ser usado dentro de un ProductProvider"
    );
  }
  return context;
};
