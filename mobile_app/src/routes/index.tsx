import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Start from "../screens/start";
import Signin from "../screens/signIn";
import Signup from "../screens/Signup";
// interface RoutesProps {}

const Stack = createStackNavigator();
export const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Signin"
        screenOptions={{ header: () => null }}
      >
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
