import React, { useState } from "react";
import { View, Platform } from "react-native";
import { style } from "../styles/HomeStyles/HStyleIndex";
import { ShortBar } from "../styles/ShortBar";
import { LogOutBtn, LogOutText } from "../styles/MypageStyles./logOutBtn";
import sendSignOutRequest from "../core/apis/logOut";
import useAuth from "../hooks/useAuth";
const { UpperText } = style;

const Mypage = (): JSX.Element => {
  const { onLogOut } = useAuth();
  const handleLogOutBtnPress = async () => {
    try {
      await sendSignOutRequest();
      setTimeout(() => {
        onLogOut();
      }, 1000);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <UpperText OS={Platform.OS}>마이페이지</UpperText>
      <ShortBar />
      <LogOutBtn onPress={handleLogOutBtnPress}>
        <LogOutText>{"👋  로그아웃"}</LogOutText>
      </LogOutBtn>
    </View>
  );
};

export default Mypage;
