/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLORS } from '../../constants';


export const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 130,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.primary,
    },
    profile: {
        borderRadius: 100,
        resizeMode: 'contain',
    },
    emailView: {
        width: '90%',
        borderRadius: 10,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    name: {
        color: 'white',
        fontWeight: '900',
    },
    email: {
        fontSize: hp('2%'),
        textAlign: 'center',
        color: 'white',
        marginTop: 4,
    },
    listContainer: {
        borderBottomWidth: 1,
        paddingHorizontal: 20,
        borderColor: COLORS.grey,
        alignItems: 'center',
        paddingVertical: 15,
        flexDirection: 'row',
    },
    prefix: {
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 8,
        marginLeft: 15,
    },
    title: {
        marginLeft: 10,
        fontSize: 18,
        opacity: 0.6,
    },
});
