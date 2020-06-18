import React, { useState, useEffect } from "react";
import _ from "lodash";
import { Platform } from "react-native";
import { renderCategoryName } from "../core/utils/category";
import styled from "../styles/listStyles/index";
import { Url } from "../models/UrlStateTypes";
import { ShortBar } from "../styles/ShortBar";
import TagList from "../components/TagList";
import LinkList from "../components/LinksList";
import Header from "../components/ListHeader";
import useLinkData from "../hooks/useLinkData";
import sortLink from "../core/utils/sortLink";
import EditCategoryModal from "../components/EditCategoryModal";

const { Container } = styled;

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
  const [isModalVisible, setModalVisible] = useState(false);
  const [currentLinkId, setCurrentLinkId] = useState(0);
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

  const updateList = (category_id: number) => {
    let list;
    if (category_id === 0) {
      list = sortLink(all_category_url_list, value.orderType);
    } else {
      list = sortLink(categories_url_list[category_id], value.orderType);
    }
    setValue({ ...value, list, cur_list: list });
  };
  useEffect(() => {
    const { category_id } = route.params;
    updateList(category_id);
  }, [categories_url_list, all_category_url_list]);

  useEffect(() => {
    const { list, orderType } = value;
    const cur_list = sortLink(list, orderType);
    setValue({ ...value, cur_list });
  }, [value.orderType]);

  useEffect(() => {
    const { category_id } = route.params;
    updateList(category_id);
  }, []);

  const handlePress = (tagName: string): void => {
    setValue({ ...value, cur_tag: tagName });
  };
  const handleTextChange = (text: string) => {
    setValue({ ...value, text });
  };
  const handleSortButton = (order: string) => {
    setValue({ ...value, orderType: order });
  };

  const handleEditCategoryModal = (id: number) => {
    setCurrentLinkId(id);
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };
  return (
    <Container OS={Platform.OS}>
      <Header
        category_name={value.category_name}
        onTextChange={handleTextChange}
        ordered={value.orderType}
        onSort={handleSortButton}
      />

      <ShortBar />
      <TagList
        currentTag={value.cur_tag}
        tags={value.tags}
        onPress={handlePress}
      />
      <LinkList
        list={value.cur_list}
        onCategoryEdit={handleEditCategoryModal}
      />
      <EditCategoryModal
        isVisible={isModalVisible}
        toggleModal={closeModal}
        currentLinkId={currentLinkId}
      />
    </Container>
  );
};

export default List;
