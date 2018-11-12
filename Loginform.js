import React, {Component} from 'react';
import { StyleSheet , View , TextInput , Button , Text , StatusBar} from 'react-native';

 class Loginform extends Component{
    render() {
        return(
            <View style={styles.container}>
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
        );
    }
}

export default Loginform;

const styles = StyleSheet.create({
    container: {
        padding: 20
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
    },
    buttonText: {
        textAlign: 'center',
        color: '#ffffff',
        fontWeight: '700'
    }
});