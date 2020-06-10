import React, { useState } from "react";
import { TouchableWithoutFeedback, Keyboard, Platform } from "react-native";
import { style } from "../styles/SigninStyles/StyleIndex";
import Btn from "../components/Btn";
import RadioButtons from "../components/RadioButtons";
import AgeSelect from "../components/AgeSelect";
const { MainText, Container, SubText } = style;

/* eslint-disable @typescript-eslint/no-explicit-any */
export type UserDetailValue = {
  age?: React.ReactText;
  gender?: React.ReactText;
  policy?: boolean;
  err?: any;
  [key: string]: any;
};

const UserDetail = (): JSX.Element => {
  const [value, setValue] = useState<UserDetailValue>({
    age: 0,
    gender: 0,
    policy: true,
    err: {},
  });

  const onPress = (): void => {
    console.log("button clicked");
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Container>
        <MainText>추가 정보</MainText>
        <SubText OS={Platform.OS}>나이</SubText>
        <AgeSelect value={value} setValue={setValue} />
        <SubText OS={Platform.OS}>성별</SubText>
        <RadioButtons value={value} setValue={setValue} />
        <Btn
          name="optionInfo"
          state={value}
          setState={setValue}
          onPress={onPress}
        />
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default UserDetail;
