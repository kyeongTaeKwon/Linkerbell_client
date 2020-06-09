import React from "react";
import { StyleSheet } from "react-native";
import { IndexPath, Layout, Select, SelectItem } from "@ui-kitten/components";

const data = ["나이를 입력하세요", "10대", "20대", "30대", "40대", "50대 이상"];

const AgeSelect = (): JSX.Element => {
  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));
  const displayValue = data[selectedIndex.row];

  const renderOption = (title: string) => (
    <SelectItem title={title} key={title} />
  );

  return (
    <Layout style={styles.container} level="1">
      <Select
        placeholder={"나이를 입력하세요"}
        value={displayValue}
        // value={(evaProps) => <Text {...evaProps}>10대</Text>}
        selectedIndex={selectedIndex}
        onSelect={(index) => {
          setSelectedIndex(index);
        }}
      >
        {data.map(renderOption)}
      </Select>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "60%",
    minHeight: 40,
    marginLeft: 50,
  },
});

export default AgeSelect;

{
  /* <Picker
          style={[styles.picker]}
          selectedValue={value.age}
          onValueChange={(itemValue, itemIndex) => {
            setValue({ age: itemValue });
          }}
        >
          <Picker.Item label="나이를 입력하세요" value="" />
          <Picker.Item label="10대" value="1" />
          <Picker.Item label="20대" value="2" />
          <Picker.Item label="30대" value="3" />
          <Picker.Item label="40대" value="4" />
          <Picker.Item label="50대 이상" value="5" />
        </Picker> */
}
