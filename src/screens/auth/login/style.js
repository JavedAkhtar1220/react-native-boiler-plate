/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { FONTBOLD, FONTKANIT, FONTKANITBOLD } from '../../../constants';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: hp('5%'),
    },
    heading: {
        fontFamily: FONTKANITBOLD,
        fontSize: 40,
        letterSpacing: 2,
        marginBottom: 30,
    },
});
