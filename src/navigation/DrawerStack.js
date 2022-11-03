/* eslint-disable prettier/prettier */
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Components
import { CustomDrawer } from '../components';

// Pages
import { TabStack } from './';

const Drawer = createDrawerNavigator();

const DrawerStack = () => {

    return (
        <Drawer.Navigator
            edgeWidth={100}
            gestureEnabled
            swipeEnabled={false}
            screenOptions={{
                headerShown: false,
                drawerStyle: { backgroundColor: 'transparent' },
            }}
            drawerContent={props => <CustomDrawer {...props} />}
        >
            <Drawer.Screen name="MainTab" component={TabStack} />
        </Drawer.Navigator>
    );
};

export default DrawerStack;

