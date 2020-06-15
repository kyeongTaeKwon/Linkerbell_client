import React, { useState, useEffect } from "react";
import _ from "lodash";
import { Platform, StyleSheet } from "react-native";
import { renderCategoryName } from "../core/utils/category";
import styled from "../styles/listStyles/index";
import { Url } from "../models/UrlStateTypes";
import { ShortBar } from "../styles/ShortBar";
import TagList from "../components/TagList";
import LinkList from "../components/LinksList";
import fetchList from "../core/apis/fetchList";
import fetchAllList from "../core/apis/fetchAllList";
import Header from "../components/ListHeader";
import useLinkData from "../hooks/useLinkData";
const { Container } = styled;

type value = {
  category_name: string;
  cur_tag: string;
  tags: string[];
  cur_list: Url[];
  list: Url[];
  text: string;
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
  });
  const { all_category_url_list, categories_url_list } = useLinkData();

  useEffect(() => {
    const filterLinkBySearch = () => {
      const { list, text } = value;
      if (text !== "") {
        return list.filter((link) =>
          link.og_title.toLowerCase().includes(text.toLowerCase()),
        );
      }
      return list;
    };
    const cur_list = filterLinkBySearch();
    setValue({ ...value, cur_list });
  }, [value.text]);

  useEffect(() => {
    const filterLinkByTag = () => {
      const { cur_tag, list } = value;
      if (cur_tag === "All") return list;
      else {
        return _.filter(list, (link) => _.includes(link.tags, cur_tag));
      }
    };
    const cur_list = filterLinkByTag();
    setValue({ ...value, cur_list });
  }, [value.cur_tag]);

  useEffect(() => {
    const sortLink = (array: Url[]) => {
      return array.sort((a, b) => {
        if (a.isnew > b.isnew) return 1;
        if (a.isnew < b.isnew) return -1;
        if (a.og_title > b.og_title) return -1;
        if (a.og_title > b.og_title) return 1;
      });
    };

    // const updateList = async (category_id: number) => {
    //   const res = await fetchList(category_id);
    //   const { lists, tag_list } = res.data;
    //   const tags = ["All", ...tag_list];
    //   const cur_list = sortLink(lists);
    //   console.log(cur_list);
    //   setValue({
    //     ...value,
    //     list: lists,
    //     cur_list,
    //     tags,
    //   });
    // };
    // const updateAllList = async () => {
    //   const res = await fetchAllList();
    //   const { lists, tag_list } = res.data;
    //   const tags = ["All", ...tag_list];
    //   const cur_list = sortLink(lists);
    //   console.log(lists);
    //   setValue({
    //     ...value,
    //     list: lists,
    //     cur_list,
    //     tags,
    //   });
    // };
    const { category_id } = route.params;
    const updateList = (category_id: number) => {
      let list;
      if (category_id === 0) {
        list = sortLink(all_category_url_list);
      } else {
        list = sortLink(categories_url_list[category_id]);
      }
      setValue({ ...value, list, cur_list: list });
    };
    updateList(category_id);
  }, []);

  const handlePress = (tagName: string): void => {
    setValue({ ...value, cur_tag: tagName });
  };
  const handleTextChange = (text: string) => {
    setValue({ ...value, text });
  };

  return (
    <Container OS={Platform.OS}>
      <Header
        category_name={value.category_name}
        onTextChange={handleTextChange}
      />
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
