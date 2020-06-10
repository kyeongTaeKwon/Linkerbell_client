import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import {
  BottomNavigation,
  BottomNavigationTab,
  Layout,
  Text,
} from "@ui-kitten/components";
import Start from "../screens/start";
import Signin from "../screens/signIn";
import Signup from "../screens/signUp";
import Loding from "../screens/loading";
import UserDetail from "../screens/userDetail";
import Home from "../screens/home";

// interface RoutesProps {}
import useAuth from "../hooks/useAuth";

const renderNavigator = (user_id: number) => {
  if (user_id === 0) {
    const Stack = createStackNavigator();
    return (
      <Stack.Navigator

        initialRouteName="SignIn"
        screenOptions={{ header: () => null }}
      >
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Loading" component={Loding} />
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="UserDetail" component={UserDetail} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    );
  } else {
    const Tab = createBottomTabNavigator();
    return (
      <Tab.Navigator
        tabBarOptions={{
          style: {
            borderTopLeftRadius: 32,
            borderTopRightRadius: 32,
            borderRadiuse: 32,
            backgroundColor: "#fff",
            position: "absolute",
            bottom: 0,
            paddingBottom: 45,
            height: 85,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.16,
            shadowRadius: 16,
            elevation: 19,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: "Home",
          }}
        />
        <Tab.Screen
          name="Start"
          component={Start}
          options={{
            tabBarLabel: "Start",
          }}
        />
      </Tab.Navigator>
    );
  }
};

export const Routes: React.FC = () => {
  const { user_id } = useAuth();
  return <NavigationContainer>{renderNavigator(user_id)}</NavigationContainer>;
};
