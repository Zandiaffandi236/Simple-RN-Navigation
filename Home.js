import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image , Button} from 'react-native';
import Judul from './Components/Judul';


 class Home extends Component {
    render() {
      return (
        <View style={styles.container}>
        <Judul/>
          <Text style={styles.welcome}>Nama  : Marzandi Zahran Affandi Leta</Text>
          <Text style={styles.welcome}>Kelas : X RPL 2</Text>
          <Text style={styles.welcome}>Absen : 25</Text>
          <Image style={{width: 400, height: 400}} 
           source={require('./zandi.jpg')} />
          <Button title="Go to Login screen"
                    onPress={() => this.props.navigation.goBack()}/>
        </View>
      );
    }
  }

  export default Home;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });