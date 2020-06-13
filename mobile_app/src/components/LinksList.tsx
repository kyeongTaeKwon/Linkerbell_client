import React from "react";
import { FlatList } from "react-native";
import Link from "../components/Link";

const LinkList = ({ list }): JSX.Element => {
  return (
    <FlatList
      data={list}
      renderItem={({ item }) => <Link data={item}>{item.title}</Link>}
      keyExtractor={(item) => item.url_id.toString()}
      style={{ marginLeft: 40 }}
    />
  );
};

export default LinkList;
