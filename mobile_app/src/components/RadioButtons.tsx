import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Layout, Radio, RadioGroup } from "@ui-kitten/components";

const RadioButtons = (): JSX.Element => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
    <Layout style={styles.radioContainer} level="1">
      <RadioGroup
        selectedIndex={selectedIndex}
        onChange={(index) => setSelectedIndex(index)}
      >
        <Radio style={styles.radio}>여성</Radio>
        <Radio style={styles.radio}>남성</Radio>
        <Radio style={styles.radio}>해당없음</Radio>
      </RadioGroup>
    </Layout>
  );
};

const styles = StyleSheet.create({
  radioContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "60%",
    marginLeft: 50,
    minHeight: 40,
    backgroundColor: "transparent",
  },
  radio: {
    margin: 2,
    width: 70,
  },
});

export default RadioButtons;
