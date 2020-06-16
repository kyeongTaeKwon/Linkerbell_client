import React from "react";
import { TouchableOpacity } from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

type Props = {
  onPress: any;
};
const AddLinkBtn = ({ onPress }: Props): JSX.Element => {
  return (
    // <MaterialIcons
    //   name="add-box"
    //   size={75}
    //   color="#FFD93B"
    //   style={styles.addButton}
    //   onPress={onPress}
    // />
    //! switch
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <MaterialCommunityIcons name="plus" size={43} color="white" />
    </TouchableOpacity>
  );
};

export default AddLinkBtn;

const styles = StyleSheet.create({
  addButton: {
    alignSelf: "flex-end",
    position: "absolute",
    marginTop: 680,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 40,
    borderRadius: 5,
  },
  button: {
    alignSelf: "flex-end",
    position: "absolute",
    bottom: 92,
    right: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 6,
    borderRadius: 10,
    backgroundColor: "#FFD93B",
    height: 55,
    width: 55,
    alignItems: "center",
    justifyContent: "center",
  },
});
