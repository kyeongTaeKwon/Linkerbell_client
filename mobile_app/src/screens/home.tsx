import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, ScrollView } from "react-native";
// import { LoginValue } from "../models/LoginTypes";
import { StackNavigationProp } from "@react-navigation/stack";
import { style } from "../styles/HomeStyles/HStyleIndex";
import { ShortBar } from "../styles/ShortBar";
const { UpperText, TitleText, CategoryText, HContainer } = style;
import useLinkData from "../hooks/useLinkData";
import Item from "../components/Category";
// import FakeData from "../core/services/fakeData";
// const { home } = FakeData;
import fetchCategoryRequest from "../core/apis/fetchCategory";
import { Category } from "../models/UrlStateTypes";

const Home = ({
  navigation,
}: {
  navigation: StackNavigationProp<any>;
}): JSX.Element => {
  const [data, setData] = useState<Category[]>([]);

  const { onHome, categories } = useLinkData();

  const getCategoryList = async () => {
    const categories = await fetchCategoryRequest();
    onHome(categories);
  };

  // const onPress = () => {
  //   navigation.navigate("list");
  // };

  useEffect(() => {
    getCategoryList();
  }, []);

  useEffect(() => {
    setData(categories);
    console.log(categories);
  }, [categories]);

  // onPress={() => navigation.navigate("list")} // 리스트페이지로 네비게이트

  return (
    <HContainer>
      <UpperText>전체 글 보기</UpperText>
      <ShortBar />
      <TitleText onPress={() => navigation.navigate("List")}>
        카테고리
      </TitleText>
      <View style={styles.outerContainer}>
        <FlatList
          keyExtractor={(item) => item.category_id.toString()}
          data={data}
          renderItem={({ item }) => <Item item={item} /*onPress={onPress}*/ />}
        />
      </View>
    </HContainer>
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
