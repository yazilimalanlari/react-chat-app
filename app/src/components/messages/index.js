import React from 'react';
import { View, Text } from 'react-native';

import Style from '@styles/Messages';

import List from './List';
import SendMessage from './SendMessage';

function Messages() {
    return (
        <View style={Style.index}>
            <List />
            <SendMessage />
        </View>
    )
}

export default Messages;