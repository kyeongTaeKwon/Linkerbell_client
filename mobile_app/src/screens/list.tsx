import React, { useState, useEffect } from "react";
import _ from "lodash";
import { Platform, TextInput, StyleSheet, View } from "react-native";
import { renderCategoryName } from "../core/utils/category";
import styled from "../styles/listStyles/index";
import { Url } from "../models/UrlStateTypes";
import { ShortBar } from "../styles/ShortBar";
import TagList from "../components/TagList";
import LinkList from "../components/LinksList";
import { EvilIcons } from "@expo/vector-icons";
import fetchList from "../core/apis/fetchList";
import fetchAllList from "../core/apis/fetchAllList";
import sortLink from "../core/utils/sortLink";
import SortButton from "../components/SortButton";

const { Container, CategoryText } = styled;

export type value = {
  category_name: string;
  cur_tag: string;
  tags: string[];
  cur_list: Url[];
  list: Url[];
  text: string;
  orderType: string;
};
type ListProps = {
  route: any;
};

const List = ({ route }: ListProps): JSX.Element => {
  const [value, setValue] = useState<value>({
    cur_tag: "All",
    tags: ["All"],
    list: [],
    cur_list: [],
    category_name: renderCategoryName(route.params.category_id),
    text: "",
    orderType: "asc",
  });

  useEffect(() => {
    const cur_list = filterLinkBySearch();
    setValue({ ...value, cur_list });
  }, [value.text]);

  useEffect(() => {
    const updateList = async (category_id: number) => {
      const res = await fetchList(category_id);
      const { lists, tag_list } = res.data;
      const tags = ["All", ...tag_list];
      const cur_list = sortLink(lists, value.orderType);
      console.log(cur_list);
      setValue({
        ...value,
        list: lists,
        cur_list,
        tags,
      });
    };
    const updateAllList = async () => {
      const res = await fetchAllList();
      const { lists, tag_list } = res.data;
      const tags = ["All", ...tag_list];
      const cur_list = sortLink(lists, value.orderType);
      // console.log(cur_list);
      setValue({
        ...value,
        list: lists,
        cur_list,
        tags,
      });
    };
    const { category_id } = route.params;
    category_id === 0 ? updateAllList() : updateList(category_id);
  }, []);

  useEffect(() => {
    const cur_list = filterLinkByTag();
    setValue({ ...value, cur_list });
  }, [value.cur_tag]);

  const filterLinkByTag = () => {
    const { cur_tag, list } = value;
    if (cur_tag === "All") return list;
    else {
      return _.filter(list, (link) => _.includes(link.tags, cur_tag));
    }
  };

  const handlePress = (tagName: string): void => {
    setValue({ ...value, cur_tag: tagName });
    console.log(value.list[1].image);
  };

  const filterLinkBySearch = () => {
    const { list, text } = value;
    if (text !== "") {
      return list.filter((link) =>
        link.og_title.toLowerCase().includes(text.toLowerCase()),
      );
    }
    return list;
  };

  // const handleSortButton = () => {
  //   const { orderType } = value;
  // };

  return (
    <Container OS={Platform.OS}>
      <View style={styles.container}>
        <CategoryText>{value.category_name}</CategoryText>
        <SortButton orderType={value.orderType} />
        <View style={styles.searchSection}>
          <TextInput
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
    marginLeft: 50,
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
