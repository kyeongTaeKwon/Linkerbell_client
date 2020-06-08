import React from "react";
import { Platform } from "react-native";
import { styled } from "../styles/StartStyles/StyleIndex";
const { LoginBtn, LoginLabel } = styled;

type Props = {
  name: string;
  onPress?: VoidFunction;
};
const LoginBox = ({ name, onPress }: Props): JSX.Element => {
  return (
    <LoginBtn onPress={onPress}>
      <LoginLabel OS={Platform.OS}>{name}</LoginLabel>
    </LoginBtn>
  );
};

export default LoginBox;
