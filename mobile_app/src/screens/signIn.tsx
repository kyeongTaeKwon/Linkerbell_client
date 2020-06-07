import React from "react";
import { TextInput } from "react-native";
import { style } from "../styles/SigninStyles/StyleIndex";
const { MainText, Container } = style;
const Login = (): JSX.Element => {
  return (
    <Container>
      <MainText>로그인하기</MainText>
      <TextInput placeholder={"이메일을 입력하세요"}></TextInput>
    </Container>
  );
};

export default Login;
