import React, { useState, useEffect } from "react";
import _ from "lodash";
import { Platform } from "react-native";
import { renderCategoryName } from "../core/utils/category";
import styled from "../styles/listStyles/index";
import { Url } from "../models/UrlStateTypes";
import { ShortBar } from "../styles/ShortBar";
import TagList from "../components/TagList";
import LinkList from "../components/LinksList";
import fetchList from "../core/apis/fetchList";
import fetchAllList from "../core/apis/fetchAllList";
const { Container, CategoryText } = styled;

type value = {
  category_name: string;
  cur_tag: string;
  tags: string[];
  cur_list: Url[];
  list: Url[];
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
  });

  useEffect(() => {
    const updateList = async (category_id: number) => {
      const res = await fetchList(category_id);
      const { lists, tag_list } = res.data;
      const tags = ["All", ...tag_list];
      setValue({
        ...value,
        list: lists,
        cur_list: lists,
        tags,
      });
    };
    const updateAllList = async () => {
      const res = await fetchAllList();
      const { lists, tag_list } = res.data;
      const tags = ["All", ...tag_list];
      setValue({
        ...value,
        list: lists,
        cur_list: lists,
        tags,
      });
    };
    const { category_id } = route.params;
    category_id === 0 ? updateAllList() : updateList(category_id);
  }, []);

  useEffect(() => {
    const filterLinkList = () => {
      const { cur_tag, list } = value;
      if (cur_tag === "All") return list;
      else {
        return _.filter(list, (link) => _.includes(link.tags, cur_tag));
      }
    };
    const cur_list = filterLinkList();
    setValue({ ...value, cur_list });
  }, [value.cur_tag]);

  const handlePress = (tagName: string): void => {
    setValue({ ...value, cur_tag: tagName });
  };

  return (
    <Container OS={Platform.OS}>
      <CategoryText>{value.category_name}</CategoryText>
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
