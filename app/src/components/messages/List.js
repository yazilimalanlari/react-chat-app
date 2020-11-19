import React from 'react';
import { ScrollView, View, Text } from 'react-native';

import Style from '@styles/Messages';

function Item({ 
    title,
    messageOwner 
}) {
    return (
        <View style={[Style.item, messageOwner && Style.messageOwner]}>
            <View style={Style.messageTitleWrapper}>
                <Text style={Style.messageTitle}>{messageOwner ? 'Ben' : (title ?? 'Bilinmeyen')}</Text>
                <Text style={Style.messageTime}>20:05</Text>
            </View>
            <Text style={[Style.messageContent]}>
                Merhaba nasılsın?
            </Text>
        </View>
    )
}

function List() {
    return (
        <ScrollView>
            <Item />
            <Item />
            <Item />
            <Item
                title={"Abdulbaki"}
                messageOwner={true}
            />
            <Item />
            {/* <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item /> */}
        </ScrollView>
    )
}

export default List;