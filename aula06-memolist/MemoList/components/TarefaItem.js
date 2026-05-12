// components/TarefaItem.js

import { View, Text, TouchableOpacity, StyleSheet, Switch  } from 'react-native';

export default function TarefaItem({ tarefa, onRemover, onConcluir  }) {
  return (
    <View style={styles.container}>
      <Text style={[ styles.texto,tarefa.concluida && styles.concluida]}>{tarefa.texto}</Text>
      <Switch value={tarefa.concluida}onValueChange={() => onConcluir(tarefa.id)}/>
      <TouchableOpacity onPress={() => onRemover(tarefa.id)}>
        <Text style={styles.remover}>❌</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    padding: 12,
    marginVertical: 6,
    marginBottom: 12,
    backgroundColor: '#DCDCDC',
    borderRadius: 20
  },
  texto: { fontSize: 16, color:'#111827', flex: 1,  marginRight: 20, fontWeight: 'bold'},
  remover: { fontSize: 18 },
  concluida: {color: '#006400', textDecorationLine: 'line-through',},
});