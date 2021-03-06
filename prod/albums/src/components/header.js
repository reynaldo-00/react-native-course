// Import Libraries for making component
import React from 'react';
import { Text, View } from 'react-native';

//Creat component
const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>;
        </View>
    );
};

//Styling
const styles = {
    viewStyle: {
        backgroundColor: '#FAFAFA',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
};

//Make component available to other parts of the app ... Export component
export default Header;
