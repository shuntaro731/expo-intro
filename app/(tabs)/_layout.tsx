import { Icon, Label, NativeTabs } from "expo-router/unstable-native-tabs"; //LiquidGlassを実装するにはnative-tabsからimport

export default function TabLayout() {
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
