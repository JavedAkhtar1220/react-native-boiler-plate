/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Text, SafeAreaView } from 'react-native';
import { TextInput } from '../../../components';
import { Button } from '../../../components';
import { styles } from './style';

const Login = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.heading}>Login</Text>

            <TextInput
                label="Email"
                required
                value={email}
                setValue={setEmail}
                type="email"
                placeholer="Enter Email Address" />
            <TextInput
                label="Password"
                required
                value={password}
                setValue={setPassword}
                type="password"
                placeholer="Enter Password" />

            <Button onPress={() => navigation.navigate('Drawers')} />

        </SafeAreaView>
    );
};

export default Login;
