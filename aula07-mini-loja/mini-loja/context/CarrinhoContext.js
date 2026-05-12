import { createContext, useContext, useState } from 'react';
const CarrinhoContext = createContext();
export function CarrinhoProvider({ children }) {
  const [carrinho, setCarrinho] = useState([]);
  const remover = (id) => {
  setCarrinho(carrinho.filter(item => item.id !== id));
  };
  function adicionar(produto) {
    setCarrinho(prev => [...prev, produto]);
  }
  return (
    <CarrinhoContext.Provider value={{ carrinho, adicionar, remover }}>
      {children}
    </CarrinhoContext.Provider>
  );
}
export const useCarrinho = () => useContext(CarrinhoContext);