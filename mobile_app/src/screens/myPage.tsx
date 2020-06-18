import React, { useState } from "react";
import { View } from "react-native";
import { style } from "../styles/HomeStyles/HStyleIndex";
import { ShortBar } from "../styles/ShortBar";
import { LogOutBtn, LogOutText } from "../styles/MypageStyles./logOutBtn";
import sendSignOutRequest from "../core/apis/logOut";
import useAuth from "../hooks/useAuth";
import EditCategoryModal from "../components/EditCategoryModal";
const { UpperText } = style;

const Mypage = (): JSX.Element => {
  const { onLogOut } = useAuth();
  const [isModalVisible, setModalVisible] = useState(false);
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
  const handleEditCategoryModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };
  return (
    <View>
      <UpperText>마이페이지</UpperText>
      <ShortBar />
      <LogOutBtn onPress={handleLogOutBtnPress}>
        <LogOutText>{"👋  로그아웃"}</LogOutText>
      </LogOutBtn>
      <LogOutBtn onPress={handleEditCategoryModal}>
        <LogOutText>{"모달"}</LogOutText>
      </LogOutBtn>
      <EditCategoryModal isVisible={isModalVisible} toggleModal={closeModal} />
    </View>
  );
};

export default Mypage;
