import React, { useState, useEffect } from "react";
import _ from "lodash";
import { Platform } from "react-native";
import styled from "../styles/listStyles/index";
import { Url } from "../models/UrlStateTypes";
import { ShortBar } from "../styles/ShortBar";
import LinkList from "../components/LinksList";
import fetchAllList from "../core/apis/fetchAllList";
import Header from "../components/ListHeader";
const { Container } = styled;

type value = {
  cur_list: Url[];
  list: Url[];
  text: string;
};

const Favorite = (): JSX.Element => {
  const [value, setValue] = useState<value>({
    list: [],
    cur_list: [],
    text: "",
  });

  useEffect(() => {
    const sortLink = (array: Url[]) => {
      return array.sort((a, b) => {
        if (a.isnew > b.isnew) return 1;
        if (a.isnew < b.isnew) return -1;
        if (a.og_title > b.og_title) return -1;
        if (a.og_title > b.og_title) return 1;
      });
    };

    const updateList = async () => {
      const res = await fetchAllList();
      const { lists } = res.data;
      const Favorite_list = _.filter(lists, { favorite: true });
      const cur_list = sortLink(Favorite_list);
      setValue({
        ...value,
        list: lists,
        cur_list,
      });
    };
    updateList();
  }, []);

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

  const handleTextChange = (text: string) => {
    setValue({ ...value, text });
  };

  return (
    <Container OS={Platform.OS}>
      <Header onTextChange={handleTextChange} category_name="즐겨찾기" />
      <ShortBar />
      <LinkList list={value.cur_list} />
    </Container>
  );
};

export default Favorite;
