import { Image } from "expo-image";
import { ImageSourcePropType, StyleSheet } from "react-native";

type Props = {
  imgSorce: ImageSourcePropType;
  selectedImage?: string;
};

export default function ImageViewer({ imgSorce, selectedImage }: Props) {
  const ImageSource = selectedImage ? { uri: selectedImage } : imgSorce;

  return <Image source={ImageSource} style={styles.image} />;
}
const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 320,
    borderRadius: 18,
  },
});
