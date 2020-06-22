import React, { useState, useEffect } from "react";
import { TextInput, View, Text } from "react-native";
const EditPassword = (): JSX.Element => {
  return (
    <View>
      <Text> 현재 비밀번호 </Text>
      <TextInput placeholder="현재 비밀번호를 입력하세요"></TextInput>
      <Text> 새 비밀번호 </Text>
      <TextInput></TextInput>
      <Text> 새 비밀번호 확인</Text>
      <TextInput></TextInput>
    </View>
  );
};

export default EditPassword;
