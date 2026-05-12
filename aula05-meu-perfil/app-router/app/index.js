import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
export default function Home() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.foto}>
        <Text style={styles.inicial}>G</Text>
      </View>
      <Text style={styles.titulo}>Gabriel Hiro Nakamura</Text>
      <TouchableOpacity style={styles.botao} onPress={() => router.push('/perfil')}>
        <Text style={styles.botaoTexto}>Ver meu perfil</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#0F172A' },
  foto: {marginBottom: 24, borderRadius: 80, backgroundColor: '#22C55E', height: 120, width: 120, alignItems: 'center', justifyContent: 'center'},
  inicial: {fontSize: 60,fontWeight: 'bold', color: '#fff'},
  titulo:    { fontSize: 32, fontWeight: 'bold', marginBottom: 24, color: '#fff', textAlign: 'center' },
  botao:     { fontSize: 18, backgroundColor: '#008B8B', fontWeight: '600', padding: 16, borderRadius: 22,  width: 140, alignItems: 'center', textAlign:'center'},
  botaoTexto:{ color: '#fff', fontSize: 16, fontWeight: '600' },
});