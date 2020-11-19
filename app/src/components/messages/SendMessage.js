import React, { useState } from 'react';
import { View, TextInput } from 'react-native';

import { colorSecondary } from '@styles/Constants';
import Style from '@styles/Messages';

// Redux
import { useDispatch } from 'react-redux';
import { sendMessage } from '@app/actions/messages';

function SendMessage() {
    const [value, setValue] = useState("");
    const dispatch = useDispatch();

    const send = () => {
        dispatch(sendMessage(value));
        setValue("");
    }

    return (
        <View style={Style.sendMessage}>
            <TextInput 
                style={Style.sendMessageInput}
                placeholder="Bir mesaj yazın..."
                placeholderTextColor={colorSecondary}
                value={value}
                onChangeText={v => setValue(v)}
                onEndEditing={send}
            />
        </View>
    )
}

export default SendMessage;