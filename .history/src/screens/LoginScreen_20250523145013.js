import React,{useState} from "react";
import { Dimensions, StyleSheet, Text, View, Alert, TextInput,TouchableOpacity } from "react-native";

const windowWidth = Dimensions.get('window').width;
const usuario = 'usuario';
const senha = '1234';

export default function LoginScreen({ navigation }) {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const verificarCampos = () => {

    
     if (usuario != usuario || senha != senha) {
      Alert.alert('Erro', 'Usuário ou senha incorretos.');
     
    } else if( usuario == usuario && senha==senha) {
      Alert.alert('Sucesso', 'Login realizado com sucesso!');
      navigation.navigate('Home');
    } else{
        Alert.alert('Erro');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>LOGIN</Text>
      <TextInput
        style={styles.input}
        placeholder='email:'
        keyboardType='default'
        value={usuario}
        onChangeText={setUsuario}
      />
      <TextInput
        style={styles.input}
        placeholder='senha:'
        keyboardType='password'
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
              textAlign: 'center'
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
    backgroundColor: '#D1CEAF',
    padding: 20,
  },
  input: {
    width: '75%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    backgroundColor: '#e0f7fa',
  },
  titulo: {
    fontSize: 22,
    marginBottom: 16,
  },

});