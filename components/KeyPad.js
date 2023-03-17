import { StyleSheet, Text, TouchableOpacity } from "react-native";

import {
  useInput,
  useTheme,
  useUpdateInput,
  useUpdateResult,
} from "../context";
import { colors } from "../data/UIData";

export default function KeyPad({ name, color }) {
  const darkTheme = useTheme();
  const input = useInput();
  const updateInput = useUpdateInput();
  const updateResult = useUpdateResult();
  const operators = ["+/-", "%", "/", "*", "-", "+"];

  const handlePress = () => {
    if (name === "AC") {
      updateInput("");
      updateResult(0);
    } else if (name === "H") return;
    else if (name === "=") {
      updateResult(eval(input));
    } else return updateInput((prevInput) => prevInput + name);
  };

  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor: darkTheme ? colors.dark.keyPad : colors.light.keyPad,
        },
      ]}
      onPress={handlePress}
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
