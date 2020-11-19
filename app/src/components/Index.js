import React from 'react';
import List from '@components/global/List';

import Messages from '@app/messages';

import { useDispatch } from 'react-redux';
import { changePage } from '@app/actions/app';

function Index() {
    const dispatch = useDispatch();

    const onPress = () => dispatch(changePage('messages'));

    return (
        <List>
            {
                Messages.map(message => <List.Item
                    key={message.id} 
                    title={message.name}
                    onPress={onPress}
                />)
            }
        </List>
    )
}


export default Index;