/* eslint-disable react/display-name */
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNav from "./stackNav";
import BtmNav from "./bottomTabNav";
import useAuth from "../hooks/useAuth";

const renderNavigator = (user_id: number) => {
  if (user_id === -1) {
    return <StackNav />;
  } else {
    return <BtmNav />;
  }
};

export const Routes: React.FC = () => {
  const { user_id } = useAuth();
  return <NavigationContainer>{renderNavigator(user_id)}</NavigationContainer>;
};
