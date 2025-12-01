//ファイル名を +not-found.tsxにすると404エラー時に自動的にこの画面が表示される
import { Link, Stack } from "expo-router"; //Link: 押すと別の画面に遷移できるようにするもの
import { StyleSheet, View } from "react-native";

export default function Index() {
  return (
    <>
      {/* RootLayout では name を指定していましたが、画面ファイルの中に直接書く場合は name は不要です。ヘッダータイトルを強制的に「エラー画面です」に変更*/}
      <Stack.Screen options={{ title: "エラー画面です" }} />
      <View style={styles.container}>
        {/* - href="/": これが移動先です。"/"はアプリの一番最初の画面を指しています
            - <Link> vs useRooter: ボタンを押して処理をしてから移動したい場合はuseRooterを使います。ただ移動するならLink
        */}
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
