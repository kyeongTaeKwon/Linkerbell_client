import React, { useState, useEffect } from "react";
import { TouchableWithoutFeedback, Keyboard, Platform } from "react-native";
import { AuthParamList } from "../models/AuthParamList";
import { StackNavigationProp } from "@react-navigation/stack";
import { LoginValue } from "../models/LoginTypes";
import { validateValue } from "../core/utils/validate";
import { style } from "../styles/SigninStyles/StyleIndex";
import Input from "../components/Input";
import Btn from "../components/Btn";
import useAuth from "../hooks/useAuth";
const { MainText, Container } = style;

const Login = ({
  navigation,
}: {
  navigation: StackNavigationProp<AuthParamList, "Signin">;
}): JSX.Element => {
  const [value, setValue] = useState<LoginValue>({
    email: "",
    password: "",
    err: {},
  });
  const { onLogin, user_id } = useAuth();

  useEffect(() => {
    validateValue(value, setValue);
  }, [value.email, value.password]);

  useEffect(() => {
    user_id !== -1 && navigation.navigate("Home");
  }, [user_id]);

  const handlePress = (value: LoginValue) => {
    const { email, password } = value;
    onLogin({ email, password });
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Container>
        <MainText OS={Platform.OS}>로그인하기</MainText>
        <Input name="email" value={value} onChange={setValue} />
        <Input name="password" value={value} onChange={setValue} />
        <Btn
          name="signin"
          state={value}
          setState={setValue}
          onPress={handlePress}
        />
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default Login;
