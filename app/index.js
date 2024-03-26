import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
  SafeAreaView,
  Image,
} from "react-native";
import React from "react";
import { router } from "expo-router";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.welcomeMessageContainer}>
        <Text style={styles.welcomeMessage}>Welcome</Text>
        <Text style={styles.welcomeMessage}>to the best quiz</Text>
      </View>

      <Image
        source={require("../assets/icons/monopoly-man.jpg")}
        resizeMode="contain"
        style={styles.image}
      />

      <TouchableOpacity
        onPress={() => router.push("/screens/LoginScreen")}
        style={styles.button}
      >
        <Text style={styles.buttonMessage}>Let`s go ! </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "lightblue",
  },
  welcomeMessageContainer: {
    flex: 0.3,
    marginTop: 50,
  },
  welcomeMessage: {
    fontSize: 30,
    fontWeight: "bold",
    fontStyle: "italic",
    textAlign: "center",
    color: "#000",
  },

  image: {
    width: 300,
    height: 300,
  },

  button: {
    backgroundColor: "#f7862f",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius: 10,
    marginBottom: 30,
  },
  buttonMessage: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
  },
});
