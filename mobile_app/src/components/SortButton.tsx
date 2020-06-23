import React from "react";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  orderType: string;
  onPress?: any;
};

const SortButton = ({ orderType, onPress }: Props): JSX.Element => {
  const renderSortButton = () => {
    if (orderType === "asc") {
      return (
        <Ionicons
          name="ios-arrow-down"
          size={24}
          color="black"
          style={{
            marginLeft: 12,
            paddingTop: 4,
            width: 30,
          }}
          onPress={() => onPress("desc")}
        />
      );
    }
    return (
      <Ionicons
        name="ios-arrow-up"
        size={24}
        color="black"
        style={{ marginLeft: 12, paddingTop: 4, width: 30 }}
        onPress={() => onPress("asc")}
      />
    );
  };
  return renderSortButton();
};

export default SortButton;
