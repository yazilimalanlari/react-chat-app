import React from 'react';
import { View, TextInput } from 'react-native';

import { colorSecondary } from '@styles/Constants';
import Style from '@styles/Messages';

function SendMessage() {
    return (
        <View style={Style.sendMessage}>
            <TextInput 
                style={Style.sendMessageInput}
                placeholder="Bir mesaj yazın..."
                placeholderTextColor={colorSecondary}
            />
        </View>
    )
}

export default SendMessage;