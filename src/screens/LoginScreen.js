import{useState} from "react";
import { Dimensions, StyleSheet, Text, View, Alert, TextInput,TouchableOpacity } from "react-native";

const windowWidth = Dimensions.get('window').width;

export default function LoginScreen({ navigation }) {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const usuarioValido = 'usuario';
  const senhaValida = 'senha';

  const verificarCampos = () => {

     if (usuario !== usuarioValido || senha != senhaValida) {
      Alert.alert('Erro', 'Usuário ou senha incorretos.'); 
      setUsuario('');
      setSenha(''); 
    } else{
      Alert.alert('Login feito com sucesso!');
      navigation.navigate('Home');
    } 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>LOGIN</Text>
      <TextInput
        style={styles.input}
        placeholder='email:'
        value={usuario}
        onChangeText={setUsuario}
      />
      <TextInput
        style={styles.input}
        placeholder='senha:'
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />
      <TouchableOpacity style={{ 
        backgroundColor: '#201F33',
         padding: 10,
         paddingHorizontal: 90,
          borderRadius: 5,
           margin: 10,
           marginBottom: 20,
            
                  }} onPress={verificarCampos}>

        <Text style={{ 
               fontFamily: 'times' ,
               color: 'white',
              textAlign:'center',
              fontSize: 17,
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
  title: {
    fontSize: 25,
    marginBottom: 16,
  },

});