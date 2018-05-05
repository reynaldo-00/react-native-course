import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { CardSection } from '.';



const Button = ( {onPress, children} ) => {
	const {buttonStyle, textStyle} = styles;

	return (
		<CardSection>
			<TouchableOpacity style={buttonStyle} onPress={ onPress }>
				<Text style={textStyle}>{children}</Text>
			</TouchableOpacity>
		</CardSection>
		);
};



const styles = {
	textStyle: {
		alignSelf: 'center',
		color: '#007aff',
		fontSize: 16,
		fontWeight: '600',
		paddingTop: 10,
		paddingBottom: 10

	},
	buttonStyle: {
		flex: 1,
		alignSelf: 'stretch',
		backgroundColor: '#fff',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: '#007aff',
		marginLeft: 5,
		marginRight: 5
	}
}
export { Button };