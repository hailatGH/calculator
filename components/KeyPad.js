import { StyleSheet, Text, TouchableOpacity } from "react-native";

import { useTheme } from "../context/ThemeContext";
import { colors } from "../data/UIData";

export default function KeyPad({ name, color }) {
  const darkTheme = useTheme();

  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor: darkTheme ? colors.dark.keyPad : colors.light.keyPad,
        },
      ]}
    >
      <Text style={[styles.text, { color: color }]}>{name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: -1, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  text: {
    fontWeight: 600,
    fontSize: 22,
  },
});
