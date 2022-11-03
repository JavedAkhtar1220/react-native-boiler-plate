/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { FONTITALIC } from '../../constants';

export const styles = StyleSheet.create({
    scrollContainer: {
        paddingHorizontal: hp('2%'),
        marginBottom: hp('8%'),
    },
    txt: {
        fontFamily: FONTITALIC,
        fontSize: 30,
    },

});
