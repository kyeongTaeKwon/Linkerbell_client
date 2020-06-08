import React from "react";
import { Btn, BtnText } from "../styles/Btn";
import { LoginValue } from "../models/LoginTypes";
import loginRequest from "../apis/signin";
type Props = {
  state: LoginValue;
  setState: React.Dispatch<React.SetStateAction<LoginValue>>;
};
const LoginBtn = ({ state, setState }: Props): JSX.Element => {
  const handlePress = () => {
    //   if(loginRequest.status)
  };

  const renderBtn = () => {
    // eslint-disable-next-line react/prop-types
    const { err } = state;
    if (Object.keys(err).length === 0) {
      return (
        <Btn onPress={() => console.log(state)}>
          <BtnText>로그인</BtnText>
        </Btn>
      );
    }
    return (
      <Btn onPress={() => console.log(state)} isEmpty disabled={true}>
        <BtnText isEmpty>로그인</BtnText>
      </Btn>
    );
  };
  return <React.Fragment>{renderBtn()}</React.Fragment>;
};
export default LoginBtn;
