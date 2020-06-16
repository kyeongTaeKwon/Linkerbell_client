import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import styled from "../styles/listStyles/index";
import SortButton from "../components/SortButton";
const { CategoryText, SearchInput, SearchContainer } = styled;

type Props = {
  category_name: string;
  onTextChange: (text: string) => void;
  ordered: string;
  onSort: (orderType: string) => void;
};

const HeaderContainer = ({
  category_name,
  onTextChange,
  ordered,
  onSort,
}: Props): JSX.Element => {
  return (
    <View style={styles.container}>
      <CategoryText>{category_name}</CategoryText>
      <SortButton orderType={ordered} onPress={onSort} />
      <SearchContainer>
        <SearchInput
          onChangeText={(text) => onTextChange(text)}
          underlineColorAndroid="transparent"
        />
        <EvilIcons
          name="search"
          size={32}
          color="black"
          style={styles.searchIcon}
        />
      </SearchContainer>
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
  searchIcon: {
    backgroundColor: "transparent",
  },
});
