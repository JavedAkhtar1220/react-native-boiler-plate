/* eslint-disable prettier/prettier */
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import FeatherIcon from 'react-native-vector-icons/Feather';

// Stylesheet
import { styles } from './style';

const Header = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <FeatherIcon name="menu" size={20} />
            </TouchableOpacity>
            <Text>Header</Text>
        </View>
    );
};

export default Header;
