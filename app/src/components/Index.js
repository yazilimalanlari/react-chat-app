import React, { useEffect } from 'react';
import List from '@components/global/List';

// Redux
import { connect, useDispatch } from 'react-redux';
import { getMessages, setMessageDetails } from '@app/actions/messages';
import { changePage } from '@app/actions/app';

function Index({ messages, getMessages, changePage }) {
    const dispatch = useDispatch();
    const onPress = userId => {
        dispatch(setMessageDetails(userId));
        changePage('messages');
    }

    useEffect(() => {
        getMessages();
    }, []);


    return (
        <List>
            {
                messages.map(message => <List.Item
                    key={message.id} 
                    title={message.name}
                    time={message.lastMessageTime}
                    message={message.messages[message.messages.length - 1].message}
                    onPress={() => onPress(message.id)}
                />)
            }
        </List>
    )
}

const mapStateToProps = ({ messages }) => ({ messages: messages.allMessages });
export default connect(mapStateToProps, { getMessages, changePage }) (Index);