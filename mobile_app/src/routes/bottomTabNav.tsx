import React from "react";
import { Animated, StyleProp, ViewStyle } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Favorite from "../screens/favorite";
import Home from "../screens/home";
import Trending from "../screens/trending";
import List from "../screens/list";
import Mypage from "../screens/myPage";
type NavProps = {
  focused: boolean;
  color: string;
};

const HomeStack = (): JSX.Element => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{ header: () => null }}
      initialRouteName="Home"
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="List" component={List} />
    </Stack.Navigator>
  );
};

const BottomTabNav = (): JSX.Element => {
  const Tab = createBottomTabNavigator();

  const renderTapBarStyle = ():
    | Animated.WithAnimatedValue<StyleProp<ViewStyle>>
    | undefined => {
    return {
      borderTopLeftRadius: 32,
      borderTopRightRadius: 32,
      borderRadius: 32,
      backgroundColor: "#fff",
      position: "absolute",
      bottom: 0,
      paddingBottom: 0,
      height: 75,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.08,
      shadowRadius: 16,
      elevation: 19,
    };
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // eslint-disable-next-line react/display-name
        tabBarIcon: ({ focused }: NavProps) => {
          let iconName = "";
          const { name } = route;
          const renderColor = focused ? "#4e4e4e" : "#b9b9b9";
          if (name === "Home") {
            iconName = "home";
          } else if (name === "Favorite") {
            iconName = "bookmark-multiple";
          } else if (name === "Trending") {
            iconName = "file-document-box";
          } else if (name === "Mypage") {
            iconName = "account";
          }
          return (
            <MaterialCommunityIcons
              name={`${iconName}-outline`}
              size={name === "Home" ? 40 : 36}
              color={renderColor}
            />
          );
        },
      })}
      tabBarOptions={{ style: renderTapBarStyle() }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: "",
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          tabBarLabel: "",
        }}
      />
      <Tab.Screen
        name="Trending"
        component={Trending}
        options={{
          tabBarLabel: "",
        }}
      />
      <Tab.Screen
        name="Mypage"
        component={Mypage}
        options={{
          tabBarLabel: "",
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNav;
