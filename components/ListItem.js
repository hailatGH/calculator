import { View, Text, StyleSheet } from "react-native";

import { useTheme } from "../context";
import { colors } from "../data/UIData";

export default function ListItem({ value }) {
  const darkTheme = useTheme();

  return (
    <View style={styles.historyContent}>
      <Text
        style={[
          styles.historyText,
          {
            fontWeight: 300,
            color: darkTheme ? colors.dark.resultText : colors.light.resultText,
          },
        ]}
      >
        {value?.input}
      </Text>
      <Text
        style={[
          styles.historyText,
          {
            color: darkTheme ? colors.dark.resultText : colors.light.resultText,
          },
        ]}
      >
        = {value?.result}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  historyContent: {},
  historyText: {
    fontSize: 20,
    fontWeight: 900,
    textAlign: "right",
  },
});
