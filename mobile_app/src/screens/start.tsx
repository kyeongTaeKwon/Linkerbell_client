import React from "react";
import { Text, Platform } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthParamList } from "../models/AuthParamList";
import LoginBox from "../components/LoginBox";
import { styled } from "../styles/StartStyles/StyleIndex";
import * as Facebook from "expo-facebook";
import * as Google from "expo-google-app-auth";
import Axios from "axios";

const {
  MainText,
  Container,
  LinkToSignUp,
  LinkToLabel,
  Wrapper,
  BtnWrapper,
  LinkToBox,
} = styled;
const Start = ({
  navigation,
}: {
  navigation: StackNavigationProp<AuthParamList, "Start">;
}): JSX.Element => {
  const handlePressLoginBtn = (): void => {
    navigation.navigate("Signin");
  };

  const hanldePressLinkToSignUp = (): void => {
    navigation.navigate("Signup");
  };

  const signInWithGoogleAsync = async () => {
    try {
      const result = await Google.logInAsync({
        // behavior: "web",
        androidClientId:
          "147556589644-04r747fl2tqmt9bi5og8cuk73rm38f8u.apps.googleusercontent.com",
        iosClientId:
          "147556589644-kh89d71eo39krfuj4aj8s8ml3psh6do5.apps.googleusercontent.com",
        scopes: ["profile", "email"],
      });

      if (result.type === "success") {
        console.log(result);
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
  };

  const signInWithFacebookAsync = async () => {
    try {
      await Facebook.initializeAsync("924191098007571");
      const { type, token }: any = await Facebook.logInWithReadPermissionsAsync(
        {
          permissions: ["public_profile"],
        },
      );
      if (type === "success") {
        // Get the user's name using Facebook's Graph API
        // console.log(token);
        const response = await Axios.get(
          `https://graph.facebook.com/me?access_token=${token}`,
        );
        console.log(response);
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  };
  return (
    <Container>
      <Wrapper OS={Platform.OS}>
        <MainText>LinkerBell</MainText>
        <BtnWrapper OS={Platform.OS}>
          <LoginBox name="Google 로그인" onPress={signInWithGoogleAsync} />
          <LoginBox name="Facebook 로그인" onPress={signInWithFacebookAsync} />
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
        </BtnWrapper>
      </Wrapper>
    </Container>
  );
};

export default Start;
