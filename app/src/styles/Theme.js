import { StyleSheet } from 'react-native';
import { backgroundColor, color, fontFamily } from './Constants';

export default StyleSheet.create({
    app: {
        backgroundColor,
        color,
        flex: 1
    },
    button: {
        color,
        borderColor: color,
        borderWidth: 2,
        padding: 10,
        textAlign: 'center',
        borderRadius: 2,
        fontFamily,
        fontSize: 16
    }
});