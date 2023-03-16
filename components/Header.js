import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { useTheme, useToggleTheme } from "../context/ThemeContext";
import { colors } from "../data/UIData";

export default function Header() {
  const toggleTheme = useToggleTheme();
  const darkTheme = useTheme();

  return (
    <View style={styles.container}>
      <View style={styles.toggleWraper}>
        <View
          style={[
            styles.toggleBtns,
            {
              backgroundColor: darkTheme
                ? colors.dark.toggleBtns
                : colors.light.toggleBtns,
            },
          ]}
        >
          <TouchableOpacity onPress={() => toggleTheme(false)}>
            <Ionicons
              name={`sunny${darkTheme ? "-outline" : ""}`}
              size={25}
              color={
                darkTheme ? colors.light.inactiveIcon : colors.dark.activeIcon
              }
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleTheme(true)}>
            <Ionicons
              name={`moon${darkTheme ? "" : "-outline"}`}
              size={25}
              color={
                darkTheme ? colors.light.activeIcon : colors.dark.activeIcon
              }
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.textInputWraper}>
        <Text
          style={[
            styles.expressionText,
            {
              color: darkTheme
                ? colors.dark.expressionText
                : colors.light.expressionText,
            },
          ]}
        >
          308 x 12
        </Text>
        <Text
          style={[
            styles.resultText,
            {
              color: darkTheme
                ? colors.dark.resultText
                : colors.light.resultText,
            },
          ]}
        >
          12,936
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  toggleWraper: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  toggleBtns: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 45,
    width: 130,
    backgroundColor: "#292D35",
    borderRadius: 20,
  },
  textInputWraper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    padding: 20,
  },
  expressionText: {
    marginTop: 50,
    fontSize: 25,
    fontWeight: "700",
    color: "#bbb",
  },
  resultText: {
    fontSize: 40,
    fontWeight: "700",
    color: "#fff",
  },
});
