import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import React from "react";
import { router } from "expo-router";
import { useState } from "react";

export default function LoginScreen() {
  const [input, setInput] = useState("");
  const [name, setName] = useState("");

  function handlePress() {
    router.navigate("screens/LoginScreen");
    setName("");
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.welcomeMessageContainer}>
        <Text numberOfLines={3} style={styles.welcomeMessage}>
          To start the quiz you will have to tell us your name
        </Text>
        <Text>( Don't worry, we'll keep it secret )</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter you name (please)"
          placeholderTextColor={"whitesmoke"}
          style={styles.input}
          onChangeText={(text) => setInput(text)}
          value={input}
        />
      </View>
      {name === "" ? (
        <TouchableOpacity
          onPress={() =>
            input === "" ? alert("Please enter a name") : setName(input)
          }
          style={styles.setNameButton}
        >
          <Text style={styles.buttonText}>Set name</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => [
            router.navigate({
              pathname: "screens/StartScreen",
              params: { name: name },
              handlePress: handlePress,
            }),
            setInput(""),
          ]}
          style={styles.startButton}
        >
          <Text style={styles.startButtonText}>Start</Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightblue",
  },
  welcomeMessageContainer: {
    flex: 1,
    justifyContent: "flex-start",
  },
  welcomeMessage: {
    fontSize: 30,
    fontWeight: "bold",
    fontStyle: "italic",
    textAlign: "center",
    color: "#000",
    marginTop: 50,
  },
  setNameButton: {
    backgroundColor: "#f7862f",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    width: 100,
    height: 50,
    borderRadius: 10,
    marginBottom: 30,
  },
  startButton: {
    backgroundColor: "lightgreen",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    width: 100,
    height: 50,
    borderRadius: 10,
    marginBottom: 30,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  startButtonText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 18,
  },
  inputContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  input: {
    width: 300,
    height: 60,
    margin: 12,
    borderWidth: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 20,
    backgroundColor: "#e9976a",
    padding: 20,
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
});
