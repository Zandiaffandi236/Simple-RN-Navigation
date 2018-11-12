import React, {Component} from 'react';
import {View , Text , StyleSheet , Button} from 'react-native';

class HomeScreen extends Component {
    render() {
        return(
            <View style = {styles.container}>
                 <Button title="Go to Login screen"
                    onPress={() => this.props.navigation.goBack()}/>
            </View>
        );
    }

}

export default HomeScreen;

const styles = StyleSheet.create({
    container :{
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center'
    }
});
