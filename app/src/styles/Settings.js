import { StyleSheet } from 'react-native';
import { color, fontFamily, bgSecondary } from './Constants';


export default StyleSheet.create({
    page: {
        padding: 10,
        flex: 1,
        justifyContent: 'space-between',
        paddingBottom: 50
    },
    item: {
        padding: 10
    },
    itemTitle: {
        color,
        fontFamily,
        fontSize: 17
    },
    itemInput: {
        backgroundColor: bgSecondary,
        borderRadius: 5,
        marginTop: 2,
        color,
        fontFamily,
        fontSize: 16,
        borderColor: color,
        borderWidth: .5,
        borderBottomWidth: 1.5,
        paddingLeft: 10,
        paddingRight: 10
    }
});