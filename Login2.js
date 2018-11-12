import React, {Component} from 'react';
import {StyleSheet , View , Image , Text , KeyboardAvoidingView, StatusBar, TextInput, Button} from 'react-native';
import LoginForm from './Loginform';

class Login2 extends Component{
    static navigationOption = {
        header : null
    }
    render() {
        return(
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
             <View style={styles.logoContainer}>
             <Image
             style={styles.logo}
             source={require('./kencoters.png')}
             />
             <Text style={styles.title}>Welcome To My App</Text>
             </View>
             <View style={styles.formContainer}>
             <StatusBar
            barStyle = "light-content"
            />
            <TextInput 
             placeholder="Username or Email"
             placeholderTextColor= "rgba(255,255,255,0.2)"
             returnKeyType="next"
             onSubmitEditing = {() => this.passwordInput.focus()}
             keyboardType = "email-address"
             autoCapitalize = "none"
             autoCorrect = {false}
             style={styles.input}
            />

            <TextInput 
             placeholder="Password"
             placeholderTextColor= "rgba(255,255,255,0.2)"
             returnKeyType="go"
             secureTextEntry
             style={styles.input}
             ref={(input) => this.passwordInput = input }
            />

            <Button style={styles.buttonContainer} title="Login"
                    onPress={() => this.props.navigation.navigate('Home')}/>
             </View>

            </KeyboardAvoidingView>
        );
    }
}

export default Login2;

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#3498db'
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo : {
        width: 200,
        height: 200
    },
    title: {
        color: '#ffffff',
        marginTop: 10,
        width: 160,
        textAlign: 'center',
        opacity: 0.9
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 10,
        color: '#ffffff',
        paddingHorizontal: 10 
    },
    buttonContainer: {
        backgroundColor: '#2980b9',
        paddingVertical: 15
    }
});