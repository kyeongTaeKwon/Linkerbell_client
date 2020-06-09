import React, { useState, useEffect } from "react";
import {
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
} from "react-native";
// import { Dropdown } from "react-native-material-dropdown";
import { style } from "../styles/SigninStyles/StyleIndex";
// import { Picker } from "@react-native-community/picker";
// import RadioButton from "../components/RadioButton";
// import Btn from "../components/Btn";
const { MainText, Container, SubText } = style;

/* eslint-disable @typescript-eslint/no-explicit-any */
type UserDetailValue = {
  age: React.ReactText;
  gender?: string[];
  policy?: boolean;
  err?: any;
  [key: string]: any;
};

const UserDetail = (): JSX.Element => {
  const [value, setValue] = useState<UserDetailValue>({
    age: "",
    gender: ["여성", "남성", "해당없음"],
    checked: 0,
    policy: true,
    err: {},
  });

  const ageValues = [
    { value: "10대" },
    { value: "20대" },
    { value: "30대" },
    { value: "40대" },
    { value: "50대 이상" },
  ];
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Container>
        <MainText>추가 정보</MainText>
        <SubText OS={Platform.OS}>나이</SubText>
        {/* <Picker
          style={[styles.picker]}
          selectedValue={value.age}
          onValueChange={(itemValue, itemIndex) => {
            setValue({ age: itemValue });
          }}
        >
          <Picker.Item label="나이를 입력하세요" value="" />
          <Picker.Item label="10대" value="1" />
          <Picker.Item label="20대" value="2" />
          <Picker.Item label="30대" value="3" />
          <Picker.Item label="40대" value="4" />
          <Picker.Item label="50대 이상" value="5" />
        </Picker> */}
        {/* <Dropdown
          style={[styles.picker]}
          data={ageValues}
          onChangeText={(itemValue) => {
            setValue({ age: itemValue });
          }}
        ></Dropdown>
        <SubText OS={Platform.OS}>성별</SubText> */}
        {/* <RadioButton genderOptions={genderOptions} /> */}
        <View>
          {value.gender?.map((item, i) => (
            <Text key={i}>{item}</Text>
          ))}
        </View>
        {/* <Btn state={value} setState={setValue} /> */}
      </Container>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  picker: {
    width: 200,
    borderColor: "black",
    borderWidth: 1,
    marginLeft: 50,
  },
});

export default UserDetail;
