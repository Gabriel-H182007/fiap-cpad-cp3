import { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  Alert, StyleSheet, KeyboardAvoidingView, Platform
} from 'react-native';
 
export default function App() {
  const [usuario, setUsuario] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [senhaVisivel, setSenhaVisivel] = useState(false);
  const [confirmarSenhaVisivel, setConfirmarSenhaVisivel] = useState(false);
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [erros, setErros] = useState({});
  const validar = () => {
    const novosErros = {};
    if (!usuario.trim()) novosErros.usuario = 'Usuário obrigatório';
    if (!email.includes('@')) novosErros.email = 'E-mail inválido';
    if (senha.length < 6) novosErros.senha = 'Senha deve ter mínimo 6 caracteres';
    if (senha != confirmarSenha) novosErros.confirmarSenha = "Senha diferente da informada acima";
    setErros(novosErros);
    return Object.keys(novosErros).length === 0;
  };
 
  const formularioValido =
    usuario.trim() &&
    email.includes('@') &&
    senha.length >= 6 &&
    senha === confirmarSenha;
 
  const handleLogin = () => {
    if (validar()) {
      Alert.alert('Login realizado!', `Bem-vindo, ${email}! 🎉`);
    }
  };
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Text style={styles.titulo}>🔐 Login</Text>
       <TextInput
        placeholder="Nome de usuário"
        value={usuario}
        onChangeText={setUsuario}
        style={styles.input}
      />
      {erros.usuario && <Text style={styles.erro}>{erros.usuario}</Text>}
      <TextInput
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.input}
      />
      {erros.email && <Text style={styles.erro}>{erros.email}</Text>}
      <View style={styles.senhaContainer}>
        <TextInput
          placeholder="Senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry={!senhaVisivel}
          style={[styles.input, { flex: 1, marginBottom: 0 }]}
        />
        <Text
          onPress={() => setSenhaVisivel(!senhaVisivel)}
          style={styles.olho}
        >
          {senhaVisivel ? '🙈' : '👁️'}
        </Text>
      </View>
      {erros.senha && <Text style={styles.erro}>{erros.senha}</Text>}
      <View style={styles.confirmarSenhaContainer}>
        <TextInput
          placeholder="Confirmar Senha"
          value={confirmarSenha}
          onChangeText={setConfirmarSenha}
          secureTextEntry={!confirmarSenhaVisivel}
          style={[styles.input, { flex: 1, marginBottom: 0 }]}
        />
        <Text
          onPress={() => setConfirmarSenhaVisivel(!confirmarSenhaVisivel)}
          style={styles.olho}
        >
          {confirmarSenhaVisivel ? '🙈' : '👁️'}
        </Text>
      </View>
      {erros.confirmarSenha && <Text style={styles.erro}>{erros.confirmarSenha}</Text>}
     
     
    <TouchableOpacity
        style={[
          styles.botao,
          { backgroundColor: formularioValido ? '#3CB371' : '#6c47ff' }
        ]}
        onPress={handleLogin}
    >
        <Text style={styles.botaoTexto}>Entrar</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center',
    padding: 24, backgroundColor: '#696969',
  },
  titulo: {
    fontSize: 32, fontWeight: 'bold',
    textAlign: 'center', marginBottom: 32, color: '#fff',
  },
  input: {
    backgroundColor: '#fff', borderWidth: 1, borderColor: '#ddd',
    borderRadius: 10, padding: 14, marginBottom: 8, fontSize: 16,
  },
  senhaContainer: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: '#fff', borderWidth: 1, borderColor: '#ddd',
    borderRadius: 10, marginBottom: 8,
  },
   confirmarSenhaContainer: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: '#fff', borderWidth: 1, borderColor: '#ddd',
    borderRadius: 10, marginBottom: 8,
  },
  olho: { padding: 14, fontSize: 20 },
  erro: { color: 'red', marginBottom: 8, marginLeft: 4 },
  botao: {
    backgroundColor: '#0000FF', borderRadius: 10,
    padding: 16, marginTop: 16, alignItems: 'center',
  },
  botaoTexto: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});
 