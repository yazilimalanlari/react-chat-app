import React from 'react';
import { Text, TouchableHighlight } from 'react-native';

import Style from '@styles/Theme';

function Button({ title, onPress }) {
    return (
        <TouchableHighlight onPress={onPress}>
            <Text style={Style.button}>{title}</Text>
        </TouchableHighlight>
    )
}


export default Button;