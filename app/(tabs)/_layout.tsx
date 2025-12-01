import {
  NotoSansJP_400Regular,
  NotoSansJP_500Medium,
  NotoSansJP_600SemiBold,
  NotoSansJP_700Bold, // 必要な太さのみインポート
} from "@expo-google-fonts/noto-sans-jp";
import { useFonts } from "expo-font";
import { Icon, Label, NativeTabs } from "expo-router/unstable-native-tabs"; //LiquidGlassを実装するにはnative-tabsからimport

export default function TabLayout() {
  const [fontsLoaded, fontError] = useFonts({
    "NotoSansJP-Regular": NotoSansJP_400Regular,
    "NotoSansJP-Medium": NotoSansJP_500Medium,
    "NotoSansJP-Semibold": NotoSansJP_600SemiBold,
    NotoSansJP_700Bold: NotoSansJP_700Bold,
  });

  //&&: プログラミング用語で論理積と呼ばれるもの、2つの条件が、両方とも揃う(かつ)と何かを返すという処理。フォントの準備はまだ終わってないし、かといってエラーで止まったわけでもないならreturnを返すという処理
  //||: または
  if (!fontsLoaded && !fontError) {
    return null; // または <View /> などの空画面、スプラッシュスクリーン制御など
  }

  return (
    // tintColor: ボタンがアクティブ時のカラー
    <NativeTabs tintColor="#ffd33d">
      {/* ボタンが終われた時index画面を表示する */}
      <NativeTabs.Trigger name="index">
        <Label>スタジオ</Label>
        <Icon sf="plus.circle.fill" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="about">
        <Label>お気に入り</Label>
        <Icon sf="star.fill" />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
