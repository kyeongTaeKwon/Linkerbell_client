import React, { useState } from "react";
import { FlatList, NativeScrollEvent } from "react-native";
import Link from "../components/Link";

const LinkList = ({ list, onCategoryEdit, onTagEdit }): JSX.Element => {
  return (
    <FlatList
      data={list}
      renderItem={({ item }) => (
        <Link data={item} onCategoryEdit={onCategoryEdit} onTagEdit={onTagEdit}>
          {item.title}
        </Link>
      )}
      keyExtractor={(item) => item.id.toString()}
      style={{ marginLeft: 0, marginBottom: 80, paddingTop: 10 }}
    />
  );
};

export default LinkList;
