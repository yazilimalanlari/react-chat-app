import React, { useEffect, useRef } from 'react';
import { ScrollView, View, Text } from 'react-native';

import Style from '@styles/Messages';

// Redux
import { getMessageDetails } from '@app/actions/messages';
import { connect, useSelector } from 'react-redux';

function Item({ 
    title,
    message,
    messageOwner,
    time
}) {
    return (
        <View style={[Style.item, messageOwner && Style.messageOwner]}>
            <View style={Style.messageTitleWrapper}>
                <Text style={Style.messageTitle}>{messageOwner ? 'Ben' : title}</Text>
                <Text style={Style.messageTime}>{time}</Text>
            </View>
            <Text style={[Style.messageContent]}>
                {message}
            </Text>
        </View>
    )
}

function List({ messages, getMessageDetails }) {
    const scrollView = useRef();
    
    useEffect(() => {
        getMessageDetails();
    }, []);

    useEffect(() => {
        scrollView.current.scrollToEnd();
    }, [messages])

    return (
        <ScrollView ref={scrollView}>
            {messages.messages.map(message => <Item 
                key={message.id}
                title={messages.name}
                message={message.message}
                messageOwner={message.owner}
                time={message.time}
            />)}
        </ScrollView>
    )
}

const mapStateToProps = state => ({ messages: state.messages.detailMessageList });
export default connect(mapStateToProps, { getMessageDetails }) (List);