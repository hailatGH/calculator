import { StyleSheet, Text, TouchableOpacity } from "react-native";

import { useTheme, useUpdateInput, useInput } from "../context";
import { colors } from "../data/UIData";

export default function KeyPad({ name, color }) {
  const darkTheme = useTheme();
  const updateInput = useUpdateInput();
  const input = useInput();

  const handlePress = () => {
    if (name === "AC") return updateInput([]);
    else if (name === "=") return;
    else return updateInput((prevInput) => [...prevInput, name]);
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
