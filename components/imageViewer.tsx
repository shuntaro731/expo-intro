import { ImageSourcePropType, StyleSheet } from "react-native";
import { Image } from "expo-image";

type Props = {
  imgSorce: ImageSourcePropType;
};

export default function ImageViewer({ imgSorce }: Props) {
  return <Image source={imgSorce} style={styles.image}/>;
}
const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 320,
    borderRadius: 20,
  }
})