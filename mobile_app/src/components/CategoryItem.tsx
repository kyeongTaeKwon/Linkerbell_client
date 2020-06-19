import React, { useState } from "react";
import useLinkData from "../hooks/useLinkData";
import editCategoryApi from "../core/apis/editCategory";
import styled from "../styles/EditCategoryModalStyles/index";
const { Category, NameText, Emoji } = styled;

type Props = {
  item: {
    id: number;
    name: string;
    emoji: string;
  };
  linkId: number;
};

const CategoryItem = ({ linkId, item }: Props): JSX.Element => {
  const { onEditCategory } = useLinkData();
  const category_id = item.id;

  const handlePress = async () => {
    console.log(category_id);
    try {
      editCategoryApi(linkId, category_id);
      await onEditCategory(linkId, category_id);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Category onPress={handlePress} item={item}>
      <Emoji>{item.emoji}</Emoji>
      <NameText>{item.name}</NameText>
    </Category>
  );
};

export default CategoryItem;
