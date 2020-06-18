import React, { useState } from "react";

import styled from "../styles/EditCategoryModalStyles/index";
const { Category, NameText, Emoji } = styled;

type Props = {
  id: number;
  name: string;
  emoji: string;
};

const CategoryItem = ({ item }: Props): JSX.Element => {
  const handlePress = () => {
    console.log(item.id);
    //func(?,item.id)
  };

  return (
    <Category onPress={handlePress} item={item}>
      <Emoji>{item.emoji}</Emoji>
      <NameText>{item.name}</NameText>
    </Category>
  );
};

export default CategoryItem;
