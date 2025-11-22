import { StyleSheet, View } from "react-native";

import Button from "@/components/Button";
import ImageViewer from "../../components/imageViewer";

const PlaceholderImage = require("@/assets/images/background-image.png");

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.ImageConteiner}>
        <ImageViewer imgSorce={PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button theme="primary" label="ライブラリから選択"/>
        <Button label="この写真を使う"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
  },

  ImageConteiner: {
    paddingTop: 46,
    flex: 1,
  },
  footerContainer: {
    flex: 2/3,
    alignItems: 'center',
  }
});

