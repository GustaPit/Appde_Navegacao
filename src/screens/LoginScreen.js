import React from "react";
import { Button, Dimensions, StyleSheet, Text, View } from "react-native";

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