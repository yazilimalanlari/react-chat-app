import React from 'react';
import { View } from 'react-native';

import Style from '@styles/Messages';

import List from './List';
import SendMessage from './SendMessage';

import { useSelector } from 'react-redux';

function Messages() {
    return (
        <View style={Style.index}>
            <List />
            <SendMessage />
        </View>
    )
}

export default Messages;