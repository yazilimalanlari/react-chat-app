import { StyleSheet } from 'react-native';
import { color, bgSecondary, fontFamily, colorSecondary } from './Constants';

export default StyleSheet.create({
    index: {
        flex: 1,
        justifyContent: 'space-between'
    },
    item: {
        padding: 10,
        margin: 5,
        backgroundColor: '#2b3857',
        borderRadius: 10
    },
    messageOwner: {
        backgroundColor: '#2b4557'
    },
    messageTitleWrapper: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    messageTitle: {
        color,
        fontSize: 17,
        fontFamily
    },
    messageTime: {
        fontSize: 12,
        color: colorSecondary,
        marginLeft: 'auto'
    },
    messageContent: {
        color,
        padding: 10,
        fontFamily
    },
    // sendMessage: {
        
    // },
    sendMessageInput: {
        color,
        backgroundColor: bgSecondary,
        fontFamily,
        fontSize: 16
    }
});