import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  TouchableWithoutFeedback,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { style } from "../styles/HomeStyles/HStyleIndex";
import { ShortBar } from "../styles/ShortBar";
const { UpperText, TitleText, HContainer } = style;
import useLinkData from "../hooks/useLinkData";
import Item from "../components/Category";
import fetchCategoryRequest from "../core/apis/fetchCategory";
import { Category } from "../models/UrlStateTypes";
// const { categories } = initialLinkDataState;
import { Clipboard } from "react-native";
import useServices from "../hooks/useServices";
import LinkModal from "../components/AddLinkModal";
import { MaterialIcons } from "@expo/vector-icons";
const Home = ({
  navigation,
}: {
  navigation: StackNavigationProp<any>;
}): JSX.Element => {
  const [data, setData] = useState<Category[]>([]);
  const { onHome, categories } = useLinkData();
  const [isModalVisible, setModalVisible] = useState(false);
  const { getCopiedUrl, copiedUrl } = useServices();

  const handleAllListbtnPress = () => {
    navigation.navigate("List", { category_id: 0 });
  };
  const onPress = (category_id: number) => {
    navigation.navigate("List", { category_id });
  };

  const getCategoryList = async () => {
    const categories = await fetchCategoryRequest();
    await sortCategory(categories);
    onHome(categories);
  };

  const sortCategory = (array: any) => {
    array.sort((a, b) => {
      if (a.isnew > b.isnew) return -1;
      if (a.isnew < b.isnew) return 1;
      if (a.count > b.count) return -1;
      if (a.count < b.count) return 1;
    });
  };

  useEffect(() => {
    getCategoryList();
  }, []);

  useEffect(() => {
    setData(categories);
    console.log(categories);
  }, [categories]);

  useFocusEffect(() => {
    checkClipboard();
  });

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
        <UpperText onPress={handleAllListbtnPress}>전체 글 보기</UpperText>
        <ShortBar />
        <TouchableWithoutFeedback>
          <View style={styles.titleContainer}>
            <TitleText>카테고리</TitleText>
          </View>
        </TouchableWithoutFeedback>

        <FlatList
          keyExtractor={(item) => item.category_id.toString()}
          data={data}
          renderItem={({ item }) => <Item item={item} onPress={onPress} />}
          showsVerticalScrollIndicator={false}
          style={styles.listContainer}
        />
        <MaterialIcons
          name="add-box"
          size={75}
          color="#FFD93B"
          style={styles.addButton}
          onPress={() => console.log("add button clicked")}
        />
      </HContainer>
      <LinkModal
        isVisible={isModalVisible}
        toggleModal={closeModal}
        onReload={getCategoryList}
      />
    </React.Fragment>
  );
};

export default Home;

const styles = StyleSheet.create({
  addButton: {
    alignSelf: "flex-end",
    position: "absolute",
    marginTop: 680,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    // marginBottom: 20,
  },
  listContainer: {
    marginBottom: 100,
    position: "relative",
  },
});
