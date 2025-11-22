import { Link, Stack } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function Index() {
  return (
    <>
      <Stack.Screen options={{ title: "エラー画面です" }} />
      <View style={styles.container}>
        <Link href="/" style={styles.button}>
          前の画面に戻る
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    color: "#fff",
  },

  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff",
  },
});
