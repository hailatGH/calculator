import { StyleSheet, View } from "react-native";

import KeyPad from "./KeyPad";
import { UIData, colors } from "../data/UIData";
import { useTheme, useInput } from "../context";

export default function KeyPadContainer() {
  const darkTheme = useTheme();
  const input = useInput();

  console.log(input);

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: darkTheme
            ? colors.dark.keyPadContainer
            : colors.light.keyPadContainer,
        },
      ]}
    >
      {UIData.map((row) => (
        <View style={styles.gridRow} key={UIData.indexOf(row)}>
          {row.map((col) => (
            <KeyPad
              name={col.name}
              key={col.id}
              color={darkTheme ? col.color : col.lcolor}
            />
          ))}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "55%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 50,
    paddingHorizontal: 40,
  },
  gridRow: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
});
