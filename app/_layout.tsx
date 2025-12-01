import { Stack } from "expo-router"; //Stackは画面が重なっていくような画面遷移
import { StatusBar } from "expo-status-bar"; //スマホ画面の一番上(時計や電池残量がある部分)の色などのスタイルを変更できる

export default function RootLayout() {
  return (
    // returnで一つの親しか返せないためフラグメント(<></>)でまとめる
    // Viewでまとめない理由はViewは実際に画面上に箱を作るためレイアウトが崩れる可能性がある、フラグメントは中身をグールプにするが余計な箱は作らないためレイアウトなどが崩れない
    <>
    <Stack>
      {/* - スタックの中にある一つの画面を定義
          - headerShown: false: stackには画面タイトルと戻るボタンを自動で生成する機能があるので、その表示を無くす
          - (tabs): カッコをつけるとURLにそのフォルダ名がつかなくなりURLがシンプルで短くなる
      */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
    {/* ステータスバーの色を白や黒に変更できるautoにすればスマホの設定に合わせられる */}
    <StatusBar style="light"/>
    </>
  );
}
