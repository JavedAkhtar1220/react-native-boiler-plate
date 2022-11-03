/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Fragment } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { COLORS } from '../../constants';
// import OctIcons from 'react-native-vector-icons/Octicons';
// import EntypoIcons from 'react-native-vector-icons/Entypo';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';

import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

function TabBar({ state, descriptors, navigation }) {
    const focusedOptions = descriptors[state.routes[state.index]?.key].options;

    if (focusedOptions.tabBarVisible === false) {
        return null;
    }

    return (
        <Fragment>
            <View style={styles.container}>
                {state?.routes.length > 0 &&
                    state?.routes?.map((route, index) => {
                        if (route) {
                            const { options } = descriptors[route?.key];
                            const label =
                                options.tabBarLabel !== undefined
                                    ? options.tabBarLabel
                                    : options.title !== undefined
                                        ? options.title
                                        : route.name;

                            const isFocused = state.index === index;

                            const onPress = () => {
                                const event = navigation.emit({
                                    type: 'tabPress',
                                    target: route?.key,
                                });

                                if (!isFocused && !event.defaultPrevented) {
                                    navigation.navigate(route.name);
                                }
                            };

                            const onLongPress = () => {
                                navigation.emit({
                                    type: 'tabLongPress',
                                    target: route?.key,
                                });
                            };

                            const _getIcon = () => {
                                switch (label) {
                                    case 'Home':
                                        return (
                                            <View
                                                style={
                                                    isFocused ? styles.activeTab :
                                                        styles.inActiveTab
                                                }
                                            >
                                                <Octicons name="home" size={22} color={isFocused ? COLORS.themeColor : '#000'} />
                                            </View>
                                        );
                                    case 'Notifications':
                                        return (
                                            <View
                                                style={
                                                    isFocused ? styles.activeTab :
                                                        styles.inActiveTab
                                                }
                                            >
                                                <Ionicons name="notifications-outline" size={22} color={isFocused ? COLORS.themeColor : '#000'} />
                                            </View>
                                        );
                                    case 'Profile':
                                        return (
                                            <View
                                                style={
                                                    isFocused ? styles.activeTab :
                                                        styles.inActiveTab
                                                }
                                            >
                                                <SimpleLineIcons name="user" size={20} color={isFocused ? COLORS.themeColor : '#000'} />
                                            </View>
                                        );
                                    case 'Settings':
                                        return (
                                            <View
                                                style={
                                                    isFocused ? styles.activeTab :
                                                        styles.inActiveTab
                                                }
                                            >
                                                <AntDesign name="setting" size={22} color={isFocused ? COLORS.themeColor : '#000'} />
                                            </View>
                                        );
                                    default:
                                        return (
                                            <View
                                                style={
                                                    isFocused ? styles.activeTab : styles.inActiveTab
                                                }
                                            >
                                                <Octicons name="home" size={22} color="#000" />
                                            </View>
                                        );
                                }
                            };


                            return (
                                <TouchableOpacity
                                    key={label}
                                    accessibilityRole="button"
                                    accessibilityState={isFocused ? { selected: true } : {}}
                                    accessibilityLabel={options.tabBarAccessibilityLabel}
                                    testID={options.tabBarTestID}
                                    onPress={onPress}
                                    activeOpacity={0.75}
                                    onLongPress={onLongPress}
                                    style={{
                                        flex: 1,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                >
                                    {_getIcon()}
                                    {/* <Text>{route.name}</Text> */}
                                </TouchableOpacity>
                            );
                        }
                    })}
            </View>
        </Fragment>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: COLORS.white,
        height: hp('8%'),
        padding: 0,
        paddingHorizontal: hp('4%'),
        shadowColor: COLORS.black,
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.5,
        shadowRadius: 16,
        elevation: 12,
    },
    activeTab: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        width: '100%',
        borderTopWidth: 4,
        borderTopColor: COLORS.themeColor,
    },
    inActiveTab: {
        marginTop: 4,
    },
});

export default TabBar;
