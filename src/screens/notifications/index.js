/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, SafeAreaView, ScrollView } from 'react-native';
import { Header } from '../../components';

import { styles } from './style';

const Notifications = () => {
    return (
        <SafeAreaView>
            <Header />
            <ScrollView style={styles.scrollContainer}>
                <Text style={styles.txt}>Notifications</Text>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Notifications;
