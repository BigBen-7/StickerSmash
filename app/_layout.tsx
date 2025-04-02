import { Stack } from "expo-router";

export default function RootLayout() {
  // This is the root layout for your app. You can add global providers here.
  // For example, you can add a theme provider or a navigation container.
  // You can also add a custom status bar or navigation bar here.
  // This is a simple layout that renders a stack navigator.
  // You can customize the stack navigator by adding options to it.
  // For example, you can change the header style or the animation type.
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
