import { StyleSheet } from 'react-native';
import { color, bgSecondary, fontFamily } from './Constants';

const height = 75;

export default StyleSheet.create({
    header: {
        height,
        backgroundColor: bgSecondary,
        flexDirection: 'row',
        alignItems: 'center',
        zIndex: 10
    },
    arrowBackIcon: {
        marginLeft: 10
    },
    actionIcon: {
        marginLeft: 'auto',
        marginRight: 15
    },
    actionList: {
        backgroundColor: bgSecondary,
        width: 150,
        position: 'absolute',
        top: height - 25,
        right: 25,
        borderRadius: 3,
        borderColor: '#3a3c59',
        borderWidth: 1,
        borderBottomWidth: 2
    },
    actionItem: {
        padding: 5,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    actionItemIcon: {
        margin: 3
    },
    actionItemText: {
        color,
        fontFamily,
        fontSize: 18,
        marginLeft: 5
    }
});