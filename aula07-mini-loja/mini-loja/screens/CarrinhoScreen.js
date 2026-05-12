import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useCarrinho } from '../context/CarrinhoContext';

export default function CarrinhoScreen() {
  const { carrinho, remover  } = useCarrinho();

  const total = carrinho.reduce(
    (soma, item) => soma + item.preco,
    0
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>🛒 Produtos no Carrinho</Text>

      {carrinho.length === 0 ? (
        <Text style={styles.vazio}>Carrinho vazio </Text>
      ) : (
        <>
          <FlatList
            data={carrinho}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <View>
                    <Text style={styles.nome}>{item.nome}</Text>
                    <Text>R$ {item.preco.toFixed(2)}</Text>
                </View>
                    <TouchableOpacity onPress={() => remover(item.id)}>
                        <Text style={styles.remover}>❌</Text>
                    </TouchableOpacity>
               </View>
            )}
          />

          <Text style={styles.total}>
            Total: R$ {total.toFixed(2)}
          </Text>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 60, backgroundColor: '#708090'},
  titulo: { fontSize: 28, fontWeight: 'bold', marginBottom: 10, color: '#fff'},
  vazio: { marginTop: 20, fontSize: 16, color: '#fff'},
  total: { marginTop: 15, fontSize: 18, fontWeight: 'bold', backgroundColor: '#10B981',color: '#fff',padding: 12,borderRadius: 10,textAlign: 'center',},
  card: {
    backgroundColor: '#F3F4F6',
    padding: 15,
    marginVertical: 6,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nome: { fontSize: 16, fontWeight: '600'},
  remover: {fontSize: 20},
});
``