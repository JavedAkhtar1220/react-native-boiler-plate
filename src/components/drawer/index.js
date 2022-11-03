/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../../constants';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import IonIcons from 'react-native-vector-icons/Ionicons';

import { styles } from './style';

const getIcon = (label) => {
    switch (label) {
        case "My Profile":
            return <FontAwesomeIcon name="user" size={30} color={COLORS.primary} />;
        case "Bookings":
            return <FontAwesome5Icon name="money-check-alt" size={30} color={COLORS.primary} />;
        case "Categories":
            return <IonIcons name="analytics-outline" size={30} color={COLORS.primary} />;
        case "Settings":
            return <IonIcons name="settings-outline" size={30} color={COLORS.primary} />;
        case "Help & Support":
            return <IonIcons name="help-circle-outline" size={30} color={COLORS.primary} />;
        case "FAQ's":
            return <FontAwesomeIcon name="question" size={30} color={COLORS.primary} />;
        default:
            return <FontAwesome5Icon name="receipt" size={30} color={COLORS.primary} />;
    }
};

const CustomDrawer = ({ descriptors }) => {
    // Context
    const navigation = useNavigation();

    const logout = async () => {
        navigation.navigate('AuthLoading');
    };

    const list = [
        { title: 'My Profile', route: 'Settings' },
        { title: 'Bookings', route: '' },
        { title: 'Categories', route: 'PrivacyPolicy' },
        { title: 'Settings', route: 'Settings' },
        { title: 'Help & Support', route: 'MainTabNav' },
        { title: `FAQ's`, route: 'TermsCondition' },
        { title: 'Terms & Condition', route: 'Rules' },
    ];


    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'space-between',
                backgroundColor: COLORS.white,
            }}
        >
            <View>
                <View style={styles.header}>
                    <View style={styles.emailView}>
                        <Image
                            style={{ width: 60, height: 60, marginRight: 10, borderRadius: 50 }}
                            source={{
                                uri:
                                    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
                            }}
                        />
                        <View>
                            <Text style={styles.name}>Username</Text>
                            <Text style={styles.email}>user@gmail.com</Text>
                        </View>
                    </View>
                </View>

                {list.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() =>
                            item.title === 'Log Out'
                                ? logout()
                                : item.route && navigation.navigate(item.route)
                        }
                        style={styles.listContainer}
                    >
                        {getIcon(item.title)}
                        {/* <FontAwesomeIcon name='user' size={30} color={COLORS.primary} /> */}
                        <Text style={styles.title}>{item.title}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};


export default CustomDrawer;
