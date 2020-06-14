import React, { useState, useEffect } from "react";
import _ from "lodash";
import { Platform, TextInput, StyleSheet, View } from "react-native";
import { renderCategoryText } from "../core/utils/category";
import styled from "../styles/listStyles/index";
import { Url } from "../models/UrlStateTypes";
import { ShortBar } from "../styles/ShortBar";
import FakeData from "../core/services/fakeData";
import TagList from "../components/TagList";
import LinkList from "../components/LinksList";
import { EvilIcons } from "@expo/vector-icons";

const { Container, CategoryText } = styled;
const { Clist } = FakeData;

type value = {
  cur_tag: string;
  tags: string[];
  cur_list: Url[];
  list: Url[];
  text: string;
};
type ListProps = {
  category_id: number;
};

const List = (): JSX.Element => {
  const { name, emoji } = renderCategoryText(7);
  const categoryName = `${emoji}  ${name}`;
  const [value, setValue] = useState<value>({
    cur_tag: "All",
    tags: ["All", ...Clist.data.tag_list],
    list: [...Clist.data.list],
    cur_list: [],
    text: "",
  });

  useEffect(() => {
    const cur_list = filterLinkBySearch();
    setValue({ ...value, cur_list });
  }, [value.text]);

  useEffect(() => {
    const cur_list = filterLinkList();
    setValue({ ...value, cur_list });
  }, [value.cur_tag]);

  const filterLinkList = () => {
    const { cur_tag, list } = value;
    if (cur_tag === "All") return list;
    else {
      return _.filter(list, (link) => _.includes(link.tags, cur_tag));
    }
  };

  const handlePress = (tagName: string): void => {
    setValue({ ...value, cur_tag: tagName });
  };

  const filterLinkBySearch = () => {
    const { list, text } = value;
    if (text !== "") {
      return list.filter((link) =>
        link.title.toLowerCase().includes(text.toLowerCase()),
      );
    }
    return list;
  };

  return (
    <Container OS={Platform.OS}>
      <View style={styles.container}>
        <CategoryText>{categoryName}</CategoryText>
        <View style={styles.searchSection}>
          <TextInput
            // placeholder="제목 검색..."
            onChangeText={(text) => setValue({ ...value, text })}
            style={styles.input}
            underlineColorAndroid="transparent"
          />
          <EvilIcons
            name="search"
            size={35}
            color="black"
            style={styles.searchIcon}
          />
        </View>
      </View>
      <ShortBar />
      <TagList
        currentTag={value.cur_tag}
        tags={value.tags}
        onPress={handlePress}
      />
      <LinkList list={value.cur_list} />
    </Container>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    paddingRight: 18,
  },
  searchSection: {
    marginLeft: 25,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FAFAFA",
    borderRadius: 11,
    height: 36,
  },
  searchIcon: {
    backgroundColor: "transparent",
  },
  input: {
    flex: 1,
    paddingLeft: 10,
    backgroundColor: "transparent",
    marginLeft: 10,
    fontSize: 16,
  },
});
