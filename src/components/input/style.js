/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLORS, FONTKANIT } from '../../constants';

export const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    label: {
        fontFamily: FONTKANIT,
        fontSize: 20,
        letterSpacing: 1,
        marginBottom: 5,
    },
    required: {
        fontFamily: FONTKANIT,
        fontSize: 20,
        color: COLORS.require,
    },
    input: {
        borderWidth: 1,
        borderColor: COLORS.black,
        paddingLeft: 40,
        borderRadius: hp('0.5%'),
        fontFamily: FONTKANIT,
    },
    inputFocued: {
        borderColor: COLORS.themeColor,
    },
    icon: {
        fontSize: 20,
        position: 'absolute',
        top: '57%',
        left: '4%',
    },
    iconFocused: {
        color: COLORS.themeColor,
    },
});
