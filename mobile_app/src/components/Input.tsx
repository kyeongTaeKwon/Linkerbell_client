import React from "react";
import { Platform } from "react-native";
import { LoginValue } from "../models/LoginTypes";
import { InputForm } from "../styles/Input";
import { InputWrapper } from "../styles/InputWrapper";
import { isEmail } from "../core/utils/emailValidate";
import { style } from "../styles/SigninStyles/StyleIndex";
const { SubText } = style;

type stringOrNull = string | null;
type InputProps = {
  name: string;
  onChange: React.Dispatch<React.SetStateAction<LoginValue>>;
  value: LoginValue;
};
type err = {
  email: stringOrNull;
  password: stringOrNull;
  passwordCheck: stringOrNull;
  [key: string]: null | string;
};

const Input = ({ name, onChange, value }: InputProps): JSX.Element => {
  const inputTitle = name === "email" ? "이메일" : "패스워드";
  const placeholderKeyword = `${inputTitle}${name === "email" ? "을" : "를"}`;
  const signUpPlaceholder = `${placeholderKeyword} ${
    name === "passwordCheck" ? "다시 " : ""
  }`;

  const renderSubText = (err: err): JSX.Element => {
    let text = inputTitle;
    if (name in err) {
      if (name === "email" && err[name] === `wrong ${name}`) {
        text = "이메일 형식이 잘못되었습니다";
        return (
          <SubText danger={true} OS={Platform.OS}>
            {text}
          </SubText>
        );
      } else if (
        name === "passwordCheck" &&
        err[name] === "different password"
      ) {
        text = "비밀번호가 다릅니다";
        return (
          <SubText danger={true} OS={Platform.OS}>
            {text}
          </SubText>
        );
      }
    }
    return <SubText OS={Platform.OS}>{text}</SubText>;
  };

  const validateEmail = () => {
    if (name === "email" && value.email.length !== 0) {
      const err = { ...value.err };
      if (!isEmail(value.email)) {
        err.email = "wrong email";
      } else {
        delete err.email;
      }
      onChange({ ...value, err });
    }
  };

  const checkPassword = () => {
    const passwordCheck = value.passwordCheck ? value.passwordCheck : "";
    if (name === "passwordCheck" && passwordCheck.length !== 0) {
      const err = { ...value.err };
      if (passwordCheck !== value.password) {
        err.passwordCheck = "different password";
      } else {
        delete err.passwordCheck;
      }
      onChange({ ...value, err });
    }
  };

  const initValidateEmail = () => {
    const err = { ...value.err };
    if (name === "email" && err.email === "wrong email") {
      delete err.email;
    }
    onChange({ ...value, err });
  };

  return (
    <InputWrapper>
      {renderSubText(value.err)}
      <InputForm
        autoCapitalize="none"
        OS={Platform.OS}
        placeholder={`${signUpPlaceholder} 입력해주세요`}
        onChangeText={(val) => onChange({ ...value, [name]: val })}
        onFocus={() => initValidateEmail()}
        onBlur={() => (name === "email" ? validateEmail() : checkPassword())}
        secureTextEntry={
          name === "password" || name === "passwordCheck" ? true : false
        }
      ></InputForm>
    </InputWrapper>
  );
};

export default Input;
