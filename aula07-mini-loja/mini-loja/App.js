import { View, Button, StyleSheet } from 'react-native';
import { useState } from 'react';
import { CarrinhoProvider } from './context/CarrinhoContext';
import ProdutosScreen from './screens/ProdutosScreen';
import CarrinhoScreen from './screens/CarrinhoScreen';
export default function App() {
  const [tela, setTela] = useState('produtos');
  return (
    <CarrinhoProvider>
     
<View style={styles.menu}>
        <Button title="🛍️ Produtos" onPress={() => setTela('produtos')} />
        <Button title="🛒 Carrinho" onPress={() => setTela('carrinho')} />
      </View>

      {tela === 'produtos' ? (
        <ProdutosScreen />
      ) : (
        
        <CarrinhoScreen />
      )}

    </CarrinhoProvider>
  );
}

const styles = StyleSheet.create({
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 15,
    backgroundColor: '#B0C4DE',
    borderBottomColor: '#374151',
  },
});
