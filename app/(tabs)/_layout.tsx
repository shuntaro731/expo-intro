import { Tabs } from "expo-router";

export default function TabLayout() {
  <Tabs>
    <Tabs.Screen name="index" options={{ title: "Home" }} />
    <Tabs.Screen name="about" options={{ title: "About" }} />
  </Tabs>;
}
