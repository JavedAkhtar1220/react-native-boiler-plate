/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, SafeAreaView, ScrollView } from 'react-native';
import { Header } from '../../components';

import { styles } from './style';

const Settings = () => {
    return (
        <SafeAreaView>
            <Header />
            <ScrollView style={styles.scrollContainer}>
                <Text style={styles.txt}>Settings</Text>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Settings;
