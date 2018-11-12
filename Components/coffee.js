import React, {Component} from 'react';
import {View,Text} from 'react-native';
import PropTypes from 'prop-types';        

 class coffee extends Component{
 	static propTypes = {
type: PropTypes.string.isRequired,
bean: PropTypes.string.isRequired,
volume: PropTypes.number,
info: PropTypes.object
}

	render(){
		const{type, bean, volume, info}= this.props;

		return(
			<View>
			<Text>coffee: {type}. and this is from {bean} bean, and its volume is {volume} liters</Text>
			<Text>Info: color({info.color}), taste({info.taste})</Text>
			</View>
			)
	}
}


export default coffee;