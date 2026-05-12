import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { produtos } from '../data/produtos';
import { useCarrinho } from '../context/CarrinhoContext';
export default function ProdutosScreen() {
  const { adicionar, carrinho } = useCarrinho();
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>🛍️ Produtos</Text>
      <Text style={styles.texto}>🛒 Itens no carrinho: {carrinho.length}</Text>

      <FlatList
        data={produtos}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text>R$ {item.preco.toFixed(2)}</Text>
            <Button title="Adicionar ao Carrinho" onPress={() => adicionar(item)} />
          </View>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 20, backgroundColor:'#708090'},
  titulo: { fontSize: 30, fontWeight: 'bold', marginBottom: 10, color: '#fff' },
  texto: {fontSize: 20, fontWeight: 'bold', marginBottom: 20, color: '#fff'},
  card: { backgroundColor: '#F3F4F6', padding: 15, marginVertical: 8, borderRadius: 10 },
  nome: { fontSize: 16, fontWeight: '600' },
});