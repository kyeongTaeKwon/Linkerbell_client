import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import store from "./src/store/index";
import * as Font from "expo-font";
import { AppLoading } from "expo";

export default function App() {
  let [isReady, setReady] = useState(false);

  useEffect(() => {
    (async function () {
      const custumFont = {
        NMedium: require("./assets/fonts/NotoSansKR-Medium.otf"),
        NBold: require("./assets/fonts/NotoSansKR-Bold.otf"),
        NRegular: require("./assets/fonts/NotoSansKR-Regular.otf"),
      };
      await Font.loadAsync(custumFont);
      setReady(true);
    })();
  }, []);

  if (isReady) {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Text
            style={{
              fontFamily: "NBold",
              fontSize: 70,
            }}
          >
            블랙
          </Text>
        </View>
      </Provider>
    );
  } else {
    return <AppLoading />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
