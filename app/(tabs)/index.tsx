import * as ImagePicker from "expo-image-picker"; //スマホのフォトライブラリを開いて写真を選択する機能
import * as MediaLibrary from "expo-media-library"; //画像を保存する機能。作成した画像をスマホのアルバムに書き込んだり、保存の許可をもらう
import { useEffect, useRef, useState } from "react";
import { ImageSourcePropType, Platform, StyleSheet, View } from "react-native"; //Platform: 今動いているプラットフォーム(ios or web)を特定する。
import { GestureHandlerRootView } from "react-native-gesture-handler"; //タッチ操作を担う機能
import { captureRef } from 'react-native-view-shot'; //アプリ内の特定の場所を画像にするライブラリ
import domtoimage from 'dom-to-image'; // アプリ内の特定の場所を画像にするライブラリ(web用)

import Button from "@/components/Button";
import CircleButton from "@/components/CircleButton";
import EmojiList from "@/components/EmojiList";
import EmojiPicker from "@/components/EmojiPicker";
import EmojiSticker from "@/components/EmojiSticker";
import IconButton from "@/components/IconButton";
import ImageViewer from "../../components/imageViewer";

const PlaceholderImage = require("@/assets/images/background-image.png"); // requireを使うと、アプリをビルド（作成）するときに、この画像ファイルがアプリの中に埋め込まれます。@/...: プロジェクトのルート（一番上の階層）を意味する

export default function Index() {

  //selectedImageは現在選択中の画像でsetSelectedImageは画像を更新する関数
  const [selectedImage, setSelectedImage] = useState<string | undefined>( //string | undefined は この state の型。string(画像のパス) か undefined のどちらかになる
    undefined //imgの初期値
  );

  const imageRef = useRef<View>(null);

  const [permissionResponse, requestPermission] = MediaLibrary.usePermissions();

  useEffect(() => {
    if (!permissionResponse?.granted) {
      requestPermission();
    }
  }, []);

  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [pickedEmoji, setPickedEmoji] = useState<
    ImageSourcePropType | undefined
  >(undefined);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert("画像を選択してください");
    }
  };

  const onReset = () => {
    setShowAppOptions(false);
  };

  const onAddSticker = () => {
    setIsModalVisible(true);
  };

  const onModalClose = async () => {
    setIsModalVisible(false);
  };

  const onSaveImageAsync = async () => {
    if (Platform.OS !== 'web') {
      try {
        const localUri = await captureRef(imageRef, {
          height: 440,
          quality: 1,
        });

        await MediaLibrary.saveToLibraryAsync(localUri);
        if (localUri) {
          alert('画像を保存しました!')
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      try {
        const dataUrl = await domtoimage.toJpeg(imageRef.current as unknown as Node, {
          quality: 0.95,
          width: 320,
          height: 440,
        });

        let link = document.createElement('a');
        link.download = 'sticker-smash.jpeg';
        link.href = dataUrl;
        link.click();
      } catch(e) {
        console.log(e);
      }
    }
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.ImageConteiner}>
          <View ref={imageRef} collapsable={false}>
            <ImageViewer
              imgSorce={PlaceholderImage} //デフォルトの画像
              selectedImage={selectedImage}
            />
            {pickedEmoji && (
              <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />
            )}
          </View>
        </View>
        {showAppOptions ? (
          <View style={styles.optionsContainer}>
            <View style={styles.optionsRow}>
              <IconButton
                icon="refresh"
                label="Reset"
                onPress={onReset}
              />
              <CircleButton onPress={onAddSticker} />
              <IconButton
                icon="save-alt"
                label="Save"
                onPress={onSaveImageAsync}
              />
            </View>
          </View>
        ) : (
          <View style={styles.footerContainer}>
            <Button
              theme="primary"
              label="ライブラリから選択"
              onPress={pickImageAsync}
            />
            <Button
              label="この写真を使う"
              onPress={() => setShowAppOptions(true)}
            />
          </View>
        )}
        <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
          <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
        </EmojiPicker>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 54,
    gap: 40,
  },

  ImageConteiner: {
    position: "relative",
  },
  footerContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  optionsContainer: {
    alignItems: "center",
  },
  optionsRow: {
    alignItems: "center",
    flexDirection: "row",
  },
});
