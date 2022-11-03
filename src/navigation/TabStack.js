/* eslint-disable prettier/prettier */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Login, Notifications, Profile, Settings, Signup } from '../screens';
import { COLORS } from '../constants';
import { TabBar } from '../components';
// import Payment from '../components/screens/Payment';
// import Book from '../components/screens/Book';
// import Profile from '../components/screens/Profile';
// import UserProfile from '../components/screens/UserProfile';

const TabStack = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                // tabBarStyle: { backgroundColor: COLORS. },
            }}
            initialRouteName={'Home'}
            tabBar={props => <TabBar {...props} />}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Notifications" component={Notifications} />
            <Tab.Screen name="Profile" component={Profile} />
            <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
    );
};

export default TabStack;
