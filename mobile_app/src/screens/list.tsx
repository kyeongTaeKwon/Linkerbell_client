import React, { useState, useEffect } from "react";
import _ from "lodash";
import { Platform } from "react-native";
import { renderCategoryText } from "../core/utils/category";
import styled from "../styles/listStyles/index";
import { Url } from "../models/UrlStateTypes";
import { ShortBar } from "../styles/ShortBar";
import FakeData from "../core/services/fakeData";
import TagList from "../components/TagList";
import LinkList from "../components/LinksList";

const { Container, CategoryText } = styled;
const { Clist } = FakeData;

type value = {
  cur_tag: string;
  tags: string[];
  cur_list: Url[];
  list: Url[];
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
  });

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

  return (
    <Container OS={Platform.OS}>
      <CategoryText>{categoryName}</CategoryText>
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
