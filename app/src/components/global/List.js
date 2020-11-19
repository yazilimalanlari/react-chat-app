import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableHighlight } from 'react-native';
import Style from 'styles/List';

function List({ children }) {
    return (
        <ScrollView>
            {children}
        </ScrollView>
    )
}

List.Item = ({ 
    title,
    time,
    lastMessage,
    message,
    onPress 
}) => {
    return (
        <TouchableHighlight onPress={onPress}>
            <View style={Style.item}>
                <View style={Style.itemTitleWrapper}>
                    <Text style={Style.itemTitle}>{title}</Text>
                    <Text style={Style.itemTime}>{time}</Text>
                </View>
                <Text style={Style.itemContent}>{message}</Text>
            </View>
        </TouchableHighlight>
    )
}

export default List;