import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import {
  useTheme,
  useToggleTheme,
  useInput,
  useResult,
  useDisplayHistory,
  useHistory,
} from "../context";
import { colors } from "../data/UIData";

import ListItem from "./ListItem";

export default function Header() {
  const toggleTheme = useToggleTheme();
  const darkTheme = useTheme();

  const input = useInput();
  const result = useResult();

  const displayHistory = useDisplayHistory();
  const history = useHistory();

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

      {displayHistory ? (
        <View
          style={[
            styles.histroyWraper,
            {
              backgroundColor: darkTheme
                ? colors.dark.historyContainer
                : colors.light.historyContainer,
            },
          ]}
        >
          <FlatList
            data={history}
            renderItem={({ item }) => <ListItem value={item} />}
            keyExtractor={(item) => item?.id}
            ItemSeparatorComponent={() => (
              <View style={styles.sparatorComp}></View>
            )}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      ) : (
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
            numberOfLines={2}
          >
            {input}
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
            numberOfLines={1}
          >
            {result}
          </Text>
        </View>
      )}
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
    justifyContent: "space-between",
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
  histroyWraper: {
    backgroundColor: "lightgray",
    height: "100%",
    width: "100%",
    zIndex: -1,
    alignItems: "flex-end",
    paddingHorizontal: 30,
    paddingTop: 10,
    paddingBottom: 20,
  },
  sparatorComp: {
    width: 100,
    height: 20,
  },
});
