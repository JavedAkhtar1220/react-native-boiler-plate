/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import { styles } from './style';

const InputTextField = ({ label, type, required, placeholer, value, setValue }) => {

    const [isFocused, setIsFocused] = useState(false);

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.label}>{label} </Text>
                {required && <Text style={styles.required}>*</Text>}
            </View>
            <TextInput
                placeholder={placeholer}
                value={value}
                onChangeText={(e) => setValue(e)}
                onBlur={() => setIsFocused(false)}
                onFocus={() => setIsFocused(true)}
                secureTextEntry={type === 'password' ? true : false}
                style={[styles.input, isFocused && styles.inputFocued]}
            />
            {type === 'email' ?
                <FontAwesomeIcon name="envelope-o" style={[styles.icon, isFocused && styles.iconFocused]} />
                : type === 'password' ?
                    <FontAwesomeIcon name="lock" style={[styles.icon, isFocused && styles.iconFocused]} />
                    : null}

        </View>
    );
};

export default InputTextField;

