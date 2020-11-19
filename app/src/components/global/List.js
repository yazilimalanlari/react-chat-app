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

List.Item = ({ title, onPress }) => {
    return (
        <TouchableHighlight onPress={onPress}>
            <View style={Style.item}>
                <View style={Style.itemTitleWrapper}>
                    <Text style={Style.itemTitle}>{title}</Text>
                    <Text style={Style.itemTime}>20:05</Text>
                </View>
                <Text style={Style.itemContent}>Burası yazılan mesajın kendisi.</Text>
            </View>
        </TouchableHighlight>
    )
}

export default List;