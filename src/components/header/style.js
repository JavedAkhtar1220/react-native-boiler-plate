/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLORS } from '../../constants';

export const styles = StyleSheet.create({
    container: {
        height: hp('8%'),
        justifyContent: 'space-between',
        paddingHorizontal: hp('3%'),
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.white,
    },
});
