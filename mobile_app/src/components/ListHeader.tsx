import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import styled from "../styles/listStyles/index";

const { CategoryText } = styled;
const HeaderContainer = ({ category_name, onTextChange }) => {
  return (
    <View style={styles.container}>
      <CategoryText>{category_name}</CategoryText>
      <View style={styles.searchSection}>
        <TextInput
          onChangeText={(text) => onTextChange(text)}
          style={styles.input}
          underlineColorAndroid="transparent"
        />
        <EvilIcons
          name="search"
          size={35}
          color="black"
          style={styles.searchIcon}
        />
      </View>
    </View>
  );
};

export default HeaderContainer;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    paddingRight: 18,
  },
  searchSection: {
    marginLeft: 25,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FAFAFA",
    borderRadius: 11,
    height: 36,
  },
  searchIcon: {
    backgroundColor: "transparent",
  },
  input: {
    flex: 1,
    paddingLeft: 10,
    backgroundColor: "transparent",
    marginLeft: 10,
    fontSize: 16,
  },
});
