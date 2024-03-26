import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { router, useLocalSearchParams } from "expo-router";

export default function EndScreen() {
  const params = useLocalSearchParams();
  const [message, setMessage] = useState("");

  function messageProvider() {
    if (params.score == 0) {
      setMessage("You can't be right...");
    } else if (params.score == 1) {
      setMessage("Disastrous !");
    } else if (params.score == 2) {
      setMessage("Did you even try ?");
    } else if (params.score == 3) {
      setMessage("Wow ! Just wow.");
    } else if (params.score == 4) {
      setMessage("Next time (maybe)");
    } else if (params.score == 5) {
      setMessage("You're on the right path.");
    } else if (params.score == 6) {
      setMessage("Next time you'll get it");
    } else if (params.score == 7) {
      setMessage("Nice !!!!");
    } else if (params.score == 8) {
      setMessage("You're close. Keep trying.");
    } else if (params.score == 9) {
      setMessage("You Rock!");
    } else if (params.score == 10) {
      setMessage("I'm speechless");
    } else if (params.score == 11) {
      setMessage("You hacked my answer databse ?");
    }
  }

  useEffect(() => {
    messageProvider();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.score}>
        <Text style={styles.highlightText}>{params.name}</Text>, your score is:{" "}
        <Text style={styles.highlightText}> {params.score} / 11</Text>
      </Text>
      <View style={styles.messageContainer}>
        <Text style={styles.message} numberOfLines={2}>
          "{message}"
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <Text numberOfLines={2} style={styles.buttonText}>
          Maybe you want to give it another try
        </Text>

        <TouchableOpacity
          onPress={() => router.navigate("/")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Start again</Text>
        </TouchableOpacity>
      </View>
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
  endMessageContainer: {
    marginTop: 40,
  },
  score: {
    fontSize: 30,
    marginTop: 30,
  },
  highlightText: {
    fontSize: 30,
    color: "yellow",
    fontWeight: "bold",
  },
  messageContainer: {
    borderRadius: 10,
    backgroundColor: "orange",
    padding: 10,
  },
  message: {
    fontSize: 40,
    fontWeight: "700",
    textAlign: "center",
  },
  buttonContainer: { justifyContent: "center", alignItems: "center" },

  button: {
    backgroundColor: "orange",
    padding: 15,
    borderRadius: 10,
    color: "#fff",
    marginTop: 10,
    marginBottom: 40,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "bold",
  },
});
