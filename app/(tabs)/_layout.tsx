import { Icon, Label, NativeTabs } from "expo-router/unstable-native-tabs"; //LiquidGlassを実装するにはnative-tabsからimport
import { useEffect } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {
  NotoSansJP_400Regular,
  NotoSansJP_500Medium,
  NotoSansJP_600SemiBold,
  NotoSansJP_700Bold // 必要な太さのみインポート
} from '@expo-google-fonts/noto-sans-jp';

export default function TabLayout() {

  const [fontsLoaded, fontError] = useFonts({
    'NotoSansJP-Regular': NotoSansJP_400Regular,
    'NotoSansJP-Medium': NotoSansJP_500Medium,
    'NotoSansJP-Semibold': NotoSansJP_600SemiBold,
  });

  // ロード完了またはエラー発生時の処理
  useEffect(() => {
    if (fontError) throw fontError;
    if (fontsLoaded) {
      // フォントロードが完了したらスプラッシュスクリーンを隠す
      // （このファイルがアプリの最上位のエントリーポイントであれば）
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  // フォントがロードされていない、またはエラーが発生した場合、タブを表示しない
  if (!fontsLoaded && !fontError) {
    return null; // 👈 ロード完了まで待機
  }

  return (
    <NativeTabs tintColor="#ffd33d">

      <NativeTabs.Trigger name="index">
        <Label>Home</Label>
        <Icon sf="house.fill" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="about">
        <Label>About</Label>
        <Icon sf="info.circle" />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
