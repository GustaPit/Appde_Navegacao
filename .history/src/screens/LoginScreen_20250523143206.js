import React,{useState} from "react";
import { Dimensions, StyleSheet, Text, View, Alert, TextInput,TouchableOpacity } from "react-native";

const windowWidth = Dimensions.get('window').width;
const usuario = 'usuario';
const senha = '1234';

export default function LoginScreen({ navigation }) {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const verificarCampos = () => {

    if (!usuario || !senha) {
      Alert.alert('Erro', 'Preencha todos os campos.');
    } else if (usuario == user && senha != password) {
      Alert.alert('Erro', 'Senha incorreta.');
      setSenha('');
    } else if (usuario != user && senha == password) {
      Alert.alert('Erro', 'Usuário incorreto.');
      setUsuario('');
      setSenha('');
    } else if (usuario != user && senha != password) {
      Alert.alert('Erro', 'Usuário e senha incorretos.');
      setUsuario('');
      setSenha('');
    } else {
      Alert.alert('Sucesso', 'Login realizado com sucesso!');
      navigation.navigate('Home');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>LOGIN</Text>
      <TextInput
        style={styles.input}
        placeholder='Digite o seu usuário'
        keyboardType='default'
        value={usuario}
        onChangeText={setUsuario}
      />
      <TextInput
        style={styles.input}
        placeholder='Digite a sua senha'
        keyboardType='password'
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />
      <TouchableOpacity style={{ 
        backgroundColor: 'blue',
         padding: 10,
         paddingHorizontal: 70,
          borderRadius: 5,
           margin: 10,
           marginBottom: 30,
            
                  }} onPress={verificarCampos}>

        <Text style={{ 
            color: 'white',
              textAlign: 'center',
              fontWeight:20,
               }}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
    padding: 20,
  },
  input: {
    width: '80%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    backgroundColor: '#e0f7fa',
  },
  titulo: {
    fontSize: 24,
    marginBottom: 20,
    color: 'black',
  },
});