import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";

import Header from "../components/Header";
import KeyPadContainer from "../components/KeyPadContainer";
import { useTheme } from "../context/ThemeContext";
import { colors } from "../data/UIData";

export default function HomeScreen() {
  const darkTheme = useTheme();

  return (
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    justifyContent: "space-between",
  },
});
