import React, { useState, useEffect } from "react";
import useLinkData from "../hooks/useLinkData";
import editCategoryApi from "../core/apis/editCategory";
import styled from "../styles/EditCategoryModalStyles/index";
import fetchCategoryRequest from "../core/apis/fetchCategory";
import sortCategory from "../core/utils/sortCategory";
import { Category } from "../models/UrlStateTypes";

const { CategoryTouch, NameText, Emoji } = styled;

type Props = {
  item: {
    id: number;
    name: string;
    emoji: string;
  };
  linkId: number;
  // onPress: () => void;
};

const CategoryItem = ({ linkId, item }: Props): JSX.Element => {
  const { onEditCategory, onHome, categories } = useLinkData();
  const [data, setData] = useState<Category[]>([]);
  const category_id = item.id;

  const handlePress = async () => {
    console.log(category_id);
    try {
      await editCategoryApi(linkId, category_id);
      await onEditCategory(linkId, category_id);
      const categories = await fetchCategoryRequest();
      await sortCategory(categories);
      onHome(categories);
      // setData(categories);
      console.log(categories);

      //? home 34 getCategoryList , categories 다시 받아오는 요청.
      //? toggle 닫히게
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <CategoryTouch onPress={handlePress} item={item}>
      <Emoji>{item.emoji}</Emoji>
      <NameText>{item.name}</NameText>
    </CategoryTouch>
  );
};

export default CategoryItem;
