import React from "react";
import { FlatList } from "react-native";
import Link from "../components/Link";

const LinkList = ({ list }): JSX.Element => {
  return (
    <FlatList
      data={list}
      renderItem={({ item }) => <Link data={item}>{item.title}</Link>}
      keyExtractor={(item) => item.id.toString()}
      style={{ marginLeft: 0, marginBottom: 80 }}
    />
  );
};

export default LinkList;
