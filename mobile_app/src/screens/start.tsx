import React from "react";
import { Text, Platform, Dimensions } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthParamList } from "../models/AuthParamList";
import LoginBox from "../components/LoginBox";
import { styled } from "../styles/StartStyles/StyleIndex";
const {
  MainText,
  Container,
  LinkToSignUp,
  LinkToLabel,
  Wrapper,
  LinkToBox,
} = styled;
const Start = ({
  navigation,
}: {
  navigation: StackNavigationProp<AuthParamList, "Start">;
}): JSX.Element => {
  const handlePressLoginBtn = (): void => {
    navigation.navigate("Signin");
    console.log(Platform.OS);
  };

  const hanldePressLinkToSignUp = (): void => {
    navigation.navigate("Signup");
  };
  return (
    <Container>
      <Wrapper>
        <MainText height={Dimensions.get("window").height}>LinkerBell</MainText>
        <LoginBox name="Google 로그인" />
        <LoginBox name="Kakao 로그인" />
        <LoginBox name="로그인" onPress={handlePressLoginBtn} />
        <LinkToSignUp onPress={hanldePressLinkToSignUp}>
          <LinkToBox>
            <Text
              style={{
                fontSize: 14,
                color: "#000",
              }}
            >
              아직 링커벨 회원이 아니신가요?
            </Text>
            <LinkToLabel>회원가입</LinkToLabel>
          </LinkToBox>
        </LinkToSignUp>
      </Wrapper>
    </Container>
  );
};

export default Start;
