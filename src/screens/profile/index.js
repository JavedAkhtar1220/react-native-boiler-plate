/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, SafeAreaView, ScrollView } from 'react-native';
import { Header } from '../../components';

import { styles } from './style';

const Profile = () => {
    return (
        <SafeAreaView>
            <Header />
            <ScrollView style={styles.scrollContainer}>
                <Text style={styles.txt}>Profile</Text>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Profile;
