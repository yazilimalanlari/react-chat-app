import { StyleSheet } from 'react-native';
import { color, bgSecondary, colorSecondary, fontFamily } from './Constants';

export default StyleSheet.create({
    item: {
        backgroundColor: bgSecondary,
        height: 75,
        marginLeft: 10,
        marginTop: 5,
        marginRight: 10,
        borderRadius: 3,
        padding: 5,
        elevation: 5,
        flex: 1,
        justifyContent: 'space-between'
    },
    itemTitleWrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5
    },
    itemTitle: {
        color,
        fontSize: 18,
        fontFamily
    },
    itemTime: {
        color: colorSecondary,
        fontSize: 12,
        fontFamily
    },
    itemContent: {
        color: colorSecondary,
        fontSize: 14,
        marginLeft: 10,
        marginBottom: 10,
        fontFamily
    }
});