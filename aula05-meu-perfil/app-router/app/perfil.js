import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
export default function perfil() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.curso}>💻 Ciência da Computação</Text>
      <Text style={styles.turma}>🎓 2CCPG - 2026</Text>
      <Text style={styles.descricao}>🚀 Tecnologias Favoritas</Text>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 16 }}>

  <View style={{ flex: 1, height: 100, backgroundColor: '#1DB954', margin: 4, borderRadius: 8, justifyContent:'center', alignItems:'center' }}>
    <Text style={{ color: '#fff', fontWeight: 'bold' }}>Python</Text>
  </View>

  <View style={{ flex: 1, height: 100, backgroundColor: '#1DB954', margin: 4, borderRadius: 8, justifyContent:'center', alignItems:'center' }}>
    <Text style={{ color: '#fff', fontWeight: 'bold' }}>JavaScript</Text>
  </View>

  <View style={{ flex: 1, height: 100, backgroundColor: '#1DB954', margin: 4, borderRadius: 8, justifyContent:'center', alignItems:'center' }}>
    <Text style={{ color: '#fff', fontWeight: 'bold' }}>HTML</Text>
  </View>

</View>

      <TouchableOpacity style={styles.botao} onPress={() => router.back()}>
        <Text style={styles.botaoTexto}>← Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container:  { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#111827' },
  curso:     {color: '#fff', fontSize: 28, fontWeight: 'bold', marginBottom: 12},
  turma: {color: '#fff', fontSize: 28, fontWeight: 'bold', marginBottom: 12},
  descricao:  {fontSize: 22, fontWeight: 'bold', color:'#fff', marginBottom: 24 },
  botao:     { fontSize: 16,  backgroundColor: '#008B8B', fontWeight: '600', borderRadius: 20, padding: 16, alignItems: 'center', width: 120},
  botaoTexto: { color: '#fff', fontSize: 18, fontWeight: 'bold'},
});