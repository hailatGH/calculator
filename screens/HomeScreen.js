import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";

import { Header, KeyPadContainer } from "../components";
import { useTheme, InputProvider, ResultProvider } from "../context";
import { colors } from "../data/UIData";

export default function HomeScreen() {
  const darkTheme = useTheme();

  return (
    <InputProvider>
      <ResultProvider>
        <View
          style={[
            styles.container,
            {
              backgroundColor: darkTheme
                ? colors.dark.homeScreen
                : colors.light.homeScreen,
            },
          ]}
        >
          <Header />
          <KeyPadContainer />
          <StatusBar style={darkTheme ? "light" : "dark"} />
        </View>
      </ResultProvider>
    </InputProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    justifyContent: "space-between",
  },
});
