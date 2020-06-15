/* eslint-disable react/prop-types */
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { style } from "../styles/HomeStyles/HStyleIndex";
import { renderCategoryText } from "../core/utils/category";

const { CategoryText } = style;

type Props = {
  category_id: number;
  isnew: 0 | 1;
  count: number;
  onPress?: any;
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Item = ({ item, onPress }: Props): JSX.Element => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        console.log(item.category_id);
        onPress(item.category_id);
      }}
    >
      <CategoryText>{renderCategoryText(item.category_id).emoji}</CategoryText>
      <CategoryText>{renderCategoryText(item.category_id).name}</CategoryText>
      <Text style={[item.isnew ? styles.isnewCount : styles.count]}>
        {item.count}
      </Text>
    </TouchableOpacity>
  );
};

export default Item;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    backgroundColor: "transparent",
    marginLeft: 44,
    marginRight: 44,
  },
  isnewCount: {
    marginLeft: 2,
    borderRadius: 12,
    minWidth: 34,
    lineHeight: 20,
    backgroundColor: "#FF5E5E",
    borderWidth: 0,
    padding: 3,
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    overflow: "hidden",
    color: "#ffffff",
    fontFamily: "NMedium",
    fontSize: 14,
  },
  count: {
    marginLeft: 2,
    borderRadius: 12,
    minWidth: 34,
    backgroundColor: "#686868",
    borderWidth: 0,
    lineHeight: 20,
    padding: 3,
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    overflow: "hidden",
    fontFamily: "NMedium",
    color: "#ffffff",
    fontSize: 14,
  },
});
