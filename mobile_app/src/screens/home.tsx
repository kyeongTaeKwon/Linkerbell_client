import React, { useState, useEffect } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { StyleSheet, Text, View, FlatList, ScrollView } from "react-native";
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
import { Clipboard } from "react-native";
import useServices from "../hooks/useServices";
import LinkModal from "../components/addLinkModal";
import AddLinkModal from "../components/AddLinkModal";
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
  const [isModalVisible, setModalVisible] = useState(false);
  const { getCopiedUrl, copiedUrl } = useServices();

  const _getContent = async () => {
    const content = await Clipboard.getString();
    return content;
  };
  const validateUrl = (text: string) => {
    const url_pattern = /^(https?|ftp|torrent|image|irc):\/\/(-\.)?([^\s\/?\.#]+\.?)+(\/[^\s]*)?$/i;
    return text.match(url_pattern) ? true : false;
  };
  const checkClipboard = async (): Promise<void> => {
    try {
      const content = await _getContent();
      if (copiedUrl !== content) {
        if (validateUrl(content)) {
          getCopiedUrl(content);
          setModalVisible(true);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  const closeModal = () => {
    setModalVisible(false);
  };
  useFocusEffect(() => {
    checkClipboard();
  });
  return (
    <React.Fragment>
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
            renderItem={({ item }) => <Item item={item} />}
          />
        </View>
        {/* <Input name="email" value={value} onChange={setValue} />
        <Input name="password" value={value} onChange={setValue} />
        <Btn name="signin" state={value} setState={setValue} /> */}
      </HContainer>
      <AddLinkModal isVisible={isModalVisible} toggleModal={closeModal} />
    </React.Fragment>
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
