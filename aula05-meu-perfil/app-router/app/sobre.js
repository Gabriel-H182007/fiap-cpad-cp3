import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
export default function Sobre() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>ℹ️ Sobre</Text>
      <Text style={styles.descricao}>Esse app foi feito na FIAP! 🚀</Text>
      <TouchableOpacity style={styles.botao} onPress={() => router.back()}>
        <Text style={styles.botaoTexto}>← Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container:  { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#111827' },
  titulo:     { fontSize: 28, fontWeight: 'bold', marginBottom: 12, color: '#fff', textAlign: 'center'},
  descricao:  { fontSize: 16, fontWeight: 'bold', color: '#fff', marginBottom: 24, textAlign: 'center' },
  botao:     { fontSize: 16, backgroundColor: '#008B8B', fontWeight: '600', borderRadius: 20, padding: 16, alignItems: 'center',  width: 120},
  botaoTexto: { color: '#fff', fontSize: 18, fontWeight: 'bold'},
});