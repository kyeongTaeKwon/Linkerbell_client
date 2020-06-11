import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Favorite from "../screens/favorite";
import Home from "../screens/home";
import Trending from "../screens/trending";

type NavProps = {
  focused: boolean;
  color: string;
};
const BottomTabNav = (): JSX.Element => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // eslint-disable-next-line react/display-name
        tabBarIcon: ({ focused, color }: NavProps) => {
          let iconName = "";

          if (route.name === "Home") {
            iconName = "home-outline";
            color = focused ? "#4e4e4e" : "#b9b9b9";
          } else if (route.name === "Favorite") {
            iconName = "bookmark-multiple-outline";
            color = focused ? "#4e4e4e" : "#b9b9b9";
          } else if (route.name === "Trending") {
            iconName = "file-document-box-outline";
            color = focused ? "#4e4e4e" : "#b9b9b9";
          }
          return (
            <MaterialCommunityIcons name={iconName} size={40} color={color} />
          );
        },
      })}
      tabBarOptions={{
        style: {
          borderTopLeftRadius: 32,
          borderTopRightRadius: 32,
          borderRadiuse: 32,
          backgroundColor: "#fff",
          position: "absolute",
          bottom: 0,
          paddingBottom: 15,
          height: 100,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.08,
          shadowRadius: 16,
          elevation: 19,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
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
    </Tab.Navigator>
  );
};

export default BottomTabNav;
