import React from "react";
import { View, Text } from "react-native";
const Home = (): JSX.Element => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        backgroundColor: "#fff",
      }}
    >
      <Text>홈화면</Text>
    </View>
  );
};

export default Home;
