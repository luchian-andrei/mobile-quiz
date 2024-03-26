import { View, Text } from "react-native";
import React from "react";
import { Stack, router } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
          headerTitle: "Home",
          headerTintColor: "blue",
        }}
      />
      <Stack.Screen
        name="screens/LoginScreen"
        options={{
          headerShown: false,
          gestureEnabled: true,
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="screens/StartScreen"
        options={{
          headerTitle: "Start",
          headerShown: false,
          headerBackVisible: false,
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name="screens/QuestionScreen"
        options={{
          headerShown: false,
          headerBackVisible: true,
          gestureEnabled: true,
        }}
      />
      <Stack.Screen
        name="screens/EndScreen"
        options={{
          headerTitle: "End ",
          headerShown: false,
          headerBackVisible: false,
          gestureEnabled: false,
        }}
      />
    </Stack>
  );
}
