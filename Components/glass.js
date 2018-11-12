import React, {Component} from 'react';
import {View,Text} from 'react-native';
import Coffee from './coffee';        

export default class glass extends Component{
	render(){
		const info={
			color:"Light Brown",
			taste:"Really good Bro"
		};
		return(
			<View>
			<Text>glass</Text>
			<Coffee type="Capucino" bean="Arabica" volume={1} info={info}/>
			</View>
			)
	}
}