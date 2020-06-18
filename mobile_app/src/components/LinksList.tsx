import React from "react";
import { FlatList } from "react-native";
import Link from "../components/Link";

const LinkList = ({ list, onCategoryEdit }): JSX.Element => {
  return (
    <FlatList
      data={list}
      renderItem={({ item }) => (
        <Link data={item} onCategoryEdit={onCategoryEdit}>
          {item.title}
        </Link>
      )}
      keyExtractor={(item) => item.id.toString()}
      style={{ marginLeft: 0, marginBottom: 80, paddingTop: 10 }}
    />
  );
};

export default LinkList;
