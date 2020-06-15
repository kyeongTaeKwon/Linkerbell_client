import React from "react";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  // state: LoginValue | UserDetailValue;
  // setState: React.Dispatch<React.SetStateAction<LoginValue>>;
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
          onPress={() => onPress("desc")}
        />
      );
    }
    return (
      <Ionicons
        name="ios-arrow-up"
        size={24}
        color="black"
        onPress={() => onPress("asc")}
      />
    );
  };
  return <React.Fragment>{renderSortButton()}</React.Fragment>;
};

export default SortButton;
