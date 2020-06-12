/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Layout } from "@ui-kitten/components";
import { style } from "../styles/HomeStyles/HStyleIndex";
import { renderCategoryText } from "../core/utils/category";

const { CategoryText, HContainer } = style;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Item = ({ item }: any): any => {
  return (
    <View style={styles.container}>
      <CategoryText>{renderCategoryText(item.category_id).emoji}</CategoryText>
      <CategoryText>{renderCategoryText(item.category_id).name}</CategoryText>
      <Text style={styles.isnewbutton}>{item.count}</Text>
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    // backgroundColor: "transparent",
    marginLeft: 44,
    marginRight: 44,
  },
  isnewbutton: {
    marginLeft: 2,
    borderRadius: 17,
    minWidth: 34,
    backgroundColor: "#FF5E5E",
    borderWidth: 0,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  button: {
    marginLeft: 2,
    borderRadius: 17,
    height: 4,
    minWidth: 34,
    backgroundColor: "#686868",
    borderWidth: 0,
  },
  outerContainer: {
    flex: 1,
    marginBottom: 90,
    backgroundColor: "transparent",
  },
});
