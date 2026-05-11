import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
 
export default function HidratacaoApp() {
  const [copos, setCopos] = useState(0);
  const [meta, setMeta] = useState(false);
  useEffect(() => {
      if(copos >= 8){
        setMeta('🏆 Meta do dia atingida!')
      }else {
        setMeta('');
      }
  }, [copos]);
  return (
    <View style={[styles.container, copos >= 8 && { backgroundColor: '#166534' }]}>
       <Text style={styles.titulo}>Contador de Hidratação</Text>
      <Text style={styles.meta}>{meta}</Text>
      <Text style={styles.counter}>🥤 {copos}</Text>
      <TouchableOpacity style={styles.btn} onPress={() => setCopos(copos + 1)}>
        <Text style={styles.btnText}>➕ Adicionar copo de água</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnZerar} onPress={() => setCopos(0)}>
        <Text style={styles.btnText}>🔄 Zerar o dia</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#000080', padding: 20},
  titulo: { alignItems: 'center', fontSize: 34, justifyContent: 'center', fontWeight: 'bold', color: '#fff', marginBottom: 20},
  meta:       { color: '#4ADE80', fontSize: 25, marginBottom: 12 },
  counter:   { color: '#fff', fontSize: 80, fontWeight: 'bold', marginBottom: 16 },
  btn:       { marginTop: 24, backgroundColor: '#38BDF8', paddingHorizontal: 40, paddingVertical: 16, borderRadius: 50, width: '100%', alignItems: 'center' },
  btnZerar:  { marginTop: 24, backgroundColor: '#EF4444', paddingHorizontal: 40, paddingVertical: 16, borderRadius: 50, width: '100%', alignItems: 'center'},
  btnText:   { color: '#fff', fontSize: 22, fontWeight: 'bold' },
});