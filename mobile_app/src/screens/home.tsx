import React, { useState } from "react";
import {
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
  // Button,
} from "react-native";
import { Button, Layout } from "@ui-kitten/components";
// import { LoginValue } from "../models/LoginTypes";
import { StackNavigationProp } from "@react-navigation/stack";
import { style } from "../styles/HomeStyles/HStyleIndex";
import { ShortBar } from "../styles/ShortBar";
const { UpperText, TitleText, CategoryText, HContainer } = style;

const Home = ({
  navigation,
}: {
  navigation: StackNavigationProp<any>;
}): JSX.Element => {
  //   const [value, setValue] = useState</*types*/>({});

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <HContainer>
        <UpperText>전체 글 보기</UpperText>
        <ShortBar />
        <TitleText>카테고리</TitleText>
        <Layout style={styles.container} level="1">
          <CategoryText>🥘 음식</CategoryText>
          <Button
            style={styles.isnewbutton}
            size="tiny"
            // onPress={() => navigation.navigate("list")} // 리스트페이지로 네비게이트
          >
            12
          </Button>
        </Layout>
        <Layout style={styles.container} level="1">
          <CategoryText>🎨 예술</CategoryText>
          <Button style={styles.button} size="tiny">
            8
          </Button>
        </Layout>
        <Layout style={styles.container} level="1">
          <CategoryText>⚽️ 스포츠</CategoryText>

          <Button style={styles.button} size="tiny">
            5
          </Button>
        </Layout>
        <Layout style={styles.container} level="1">
          <CategoryText>🎤 엔터테인먼트</CategoryText>

          <Button style={styles.isnewbutton} size="tiny">
            3
          </Button>
        </Layout>

        {/* <Input name="email" value={value} onChange={setValue} />
        <Input name="password" value={value} onChange={setValue} />
        <Btn name="signin" state={value} setState={setValue} /> */}
      </HContainer>
    </TouchableWithoutFeedback>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    backgroundColor: "transparent",
  },
  isnewbutton: {
    marginLeft: 2,
    borderRadius: 17,
    minWidth: 34,
    backgroundColor: "#FF5E5E",
    borderWidth: 0,
  },
  button: {
    marginLeft: 2,
    borderRadius: 17,
    height: 4,
    minWidth: 34,
    backgroundColor: "#686868",
    borderWidth: 0,
  },
});
