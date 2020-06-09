import React, { useState, useEffect } from "react";
import { TouchableWithoutFeedback, Keyboard, Platform } from "react-native";
import { LoginValue } from "../models/LoginTypes";
import { validateValue } from "../core/utils/validate";
import { style } from "../styles/SigninStyles/StyleIndex";
import Input from "../components/Input";
import Btn from "../components/Btn";
import useAuth from "../hooks/useAuth";
const { MainText, Container } = style;

const Login = (): JSX.Element => {
  const [value, setValue] = useState<LoginValue>({
    email: "",
    password: "",
    err: {},
  });
  const { user_id, age, gender, onLogin } = useAuth();

  useEffect(() => {
    validateValue(setValue, value);
  }, [value.email, value.password]);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Container>
        <MainText OS={Platform.OS}>로그인하기</MainText>
        <Input name="email" value={value} onChange={setValue} />
        <Input name="password" value={value} onChange={setValue} />
        <Btn state={value} setState={setValue} />
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default Login;
