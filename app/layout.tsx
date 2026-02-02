import { Stack } from "expo-router";

// layout principal msm
export default function RootLayout() {
  const opts = { headerShown: false };

  return (
    <Stack>
      <Stack.Screen name="index" options={opts} />
      <Stack.Screen name="list" options={opts} />
      <Stack.Screen name="list2" options={opts} />
    </Stack>
  );
}
