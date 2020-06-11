import React from "react";
import { View, Text } from "react-native";

type ListProps = {
  category_id: number;
};
const List = (): JSX.Element => {
  return (
    <View style={{ flex: 1, alignContent: "center", justifyContent: "center" }}>
      <Text>리스트페이지</Text>
    </View>
  );
};

export default List;
