import React,{Component} from 'react';
import {Text} from 'react-native';

export default class Judul extends Component {
	render(){
		return (
               <Text style={tebel.judul}>BIODATA</Text>
			)
	}
}
const tebel ={
	judul: {
		color: '#ff0000',
		fontSize: 50,
		fontWeight: 'bold',
		backgroundColor: '#00ff00',
	}
}
