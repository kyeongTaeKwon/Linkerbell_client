import React from "react";
import { StyleSheet } from "react-native";
import { Layout, Radio, RadioGroup } from "@ui-kitten/components";
import { UserDetailValue } from "../screens/userDetail";

type RadioProps = {
  value: UserDetailValue;
  setValue: React.Dispatch<React.SetStateAction<UserDetailValue>>;
};

const RadioButtons = ({ value, setValue }: RadioProps): JSX.Element => {
  const [selectedIndex, setSelectedIndex] = React.useState(2);

  return (
    <Layout style={styles.radioContainer} level="1">
      <RadioGroup
        selectedIndex={selectedIndex}
        onChange={(index) => {
          setSelectedIndex(index);
          setValue({ ...value, gender: index });
          console.log(index);
        }}
      >
        <Radio style={styles.radio}>여성</Radio>
        <Radio style={styles.radio}>남성</Radio>
        <Radio style={styles.radio}>선택안함</Radio>
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
