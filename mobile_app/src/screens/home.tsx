import React, { useState } from "react";
import {
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
} from "react-native";
import { Button, Layout } from "@ui-kitten/components";
// import { LoginValue } from "../models/LoginTypes";
import { StackNavigationProp } from "@react-navigation/stack";
import { style } from "../styles/HomeStyles/HStyleIndex";
import { ShortBar } from "../styles/ShortBar";
const { UpperText, TitleText, CategoryText, HContainer } = style;
import { renderCategoryText } from "../core/utils/category";
// import { initialLinkDataState } from "../store/module/linkData";
import Item from "../components/Category";
// const { categories } = initialLinkDataState;

const Home = ({
  navigation,
}: {
  navigation: StackNavigationProp<any>;
}): JSX.Element => {
  //   const [value, setValue] = useState</*types*/>({});
  // onPress={() => navigation.navigate("list")} // 리스트페이지로 네비게이트
  const [data, setData] = useState([
    { category_id: 1, isnew: 1, count: 12 },
    { category_id: 2, isnew: 0, count: 8 },
    { category_id: 3, isnew: 0, count: 5 },
    { category_id: 4, isnew: 1, count: 3 },
    { category_id: 5, isnew: 1, count: 12 },
    { category_id: 6, isnew: 0, count: 8 },
    { category_id: 7, isnew: 0, count: 5 },
    { category_id: 8, isnew: 1, count: 3 },
    { category_id: 9, isnew: 1, count: 12 },
    { category_id: 10, isnew: 0, count: 8 },
    { category_id: 11, isnew: 0, count: 5 },
    { category_id: 12, isnew: 1, count: 3 },
  ]);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <HContainer>
        <UpperText>전체 글 보기</UpperText>
        <ShortBar />
        <TitleText>카테고리</TitleText>
        <View style={styles.outerContainer}>
          <FlatList
            keyExtractor={(item) => item.category_id.toString()}
            data={data}
            renderItem={({ item }) => <Item item={item} />}
          />
        </View>
        {/* <Input name="email" value={value} onChange={setValue} />
        <Input name="password" value={value} onChange={setValue} />
        <Btn name="signin" state={value} setState={setValue} /> */}
      </HContainer>
    </TouchableWithoutFeedback>
  );
};

export default Home;

const styles = StyleSheet.create({
  outerContainer: {
    paddingTop: 20,
    flex: 1,
    marginBottom: 120,
    backgroundColor: "transparent",
  },
});
