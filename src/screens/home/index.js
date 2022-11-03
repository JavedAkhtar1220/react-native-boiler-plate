/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, SafeAreaView, ScrollView } from 'react-native';
import { Header } from '../../components';
import { styles } from './style';

const Home = () => {

    return (
        <SafeAreaView>
            <Header />
            <ScrollView style={styles.scrollContainer}>
                <Text style={styles.txt}>Home</Text>
            </ScrollView>
        </SafeAreaView>
    );
};




export default Home;

