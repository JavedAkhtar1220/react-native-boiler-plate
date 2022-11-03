/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLORS, FONTKANIT } from '../../constants';

const Button = ({ onPress }) => {
    return (
        <TouchableOpacity style={styles.btn} activeOpacity={0.8} onPress={onPress}>
            <Text style={styles.btnTxt}>Button</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    btn: {
        backgroundColor: COLORS.themeColor,
        paddingVertical: 12,
        alignItems: 'center',
        borderRadius: hp('0.5%'),
    },
    btnTxt: {
        color: COLORS.white,
        fontFamily: FONTKANIT,
        fontSize: 18,
        letterSpacing: 2,
    },
});

export default Button;
