import React,{useState} from "react";
import { Button, Dimensions, StyleSheet, Text, View, Alert, TextInput } from "react-native";

const windowWidth = Dimensions.get('window').width;
const usuario = 'usuario';
const senha = '1234';

export default function LoginScreen({ navigation }) {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const verificarCampos = () => {
    if (!usuario || !senha) {
      Alert.alert('Erro', 'Preencha todos os campos.');
    } else if (usuario == usuario && senha != senha) {
      Alert.alert('Erro', 'Senha incorreta.');
      setSenha('');
    } else if (usuario != usuario && senha == senha) {
      Alert.alert('Erro', 'Usuário incorreto.');
      setUsuario('');
      setSenha('');
    } else if (usuario != usuario && senha != senha) {
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
        keyboardType='senha'
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />
      <T style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5, margin: 10, width: windowWidth * 0.5 }} onPress={verificarCampos}>
        <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>LOGIN</Text>
     
    </View>
  );
}




/* 

const windowWidth = Dimensions.get('window').width;

export default function LoginScreen({navigation}) {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Login Screen</Text>
            <View style={styles.buttonContainer}>
                <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
                />
           </View>
           <View style={styles.buttonContainer}>
            <Button
                title="Go to Profile"
                onPress={() => navigation.navigate('Profile')}
                />
                </View>
             </View>
    );
}
*/

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems:  'center',
        backgroundColor: '#e6e6fa', // Cor de fundo da tela
    },
    title:{
        fontSize: 24,
        marginBottom: 20,
    },
     buttonContainer:{
        backgroundColor: '#dda0dd', //cor de fundo do container do botão
        margin: 10,
        width: windowWidth * 0.5, // 50% da largura da tela
        borderRadius: 5,
     },
 }); 