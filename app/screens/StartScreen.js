import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { router, useLocalSearchParams } from "expo-router";

export default function StartScreen() {
  const params = useLocalSearchParams();
  const [topic, setTopic] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.introContainer}>
        <Text style={styles.introText}>
          First question,{" "}
          <Text style={styles.highlightText}>{params.name}</Text>:{""}
        </Text>
        <Text style={styles.questionText}>Are you ready ?</Text>
      </View>
      <View style={styles.changesContainer}>
        <Text numberOfLines={3} style={styles.changesText}>
          If you want to change your name you can do it by clicking here.
        </Text>
        <TouchableOpacity
          style={styles.changeNameButton}
          onPress={() => router.navigate("/")}
        >
          <Text style={styles.changesButtonText}>Change name</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.topicContainer}>
        <Text style={styles.topicText}>Select a topic from below</Text>

        <View style={styles.topicLeftRow}>
          <TouchableOpacity
            style={
              topic === "General"
                ? styles.topicButtonEnabled
                : styles.topicButton
            }
            onPress={() => setTopic("General")}
            onLongPress={() => setTopic("")}
          >
            <Text
              style={
                topic === "General" ? styles.topicTextEnabled : styles.topicText
              }
            >
              General questions
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              topic === "Movies"
                ? styles.topicButtonEnabled
                : styles.topicButton
            }
            onPress={() => setTopic("Movies")}
            onLongPress={() => setTopic("")}
          >
            <Text
              style={
                topic === "Movies" ? styles.topicTextEnabled : styles.topicText
              }
            >
              Movies questions
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.topicRightRow}>
          <TouchableOpacity
            style={
              topic === "Sport" ? styles.topicButtonEnabled : styles.topicButton
            }
            onPress={() => setTopic("Sport")}
            onLongPress={() => setTopic("")}
          >
            <Text
              style={
                topic === "Sport" ? styles.topicTextEnabled : styles.topicText
              }
            >
              Sport questions
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              topic === "Tech" ? styles.topicButtonEnabled : styles.topicButton
            }
            onPress={() => setTopic("Tech")}
            onLongPress={() => setTopic("")}
          >
            <Text
              style={
                topic === "Tech" ? styles.topicTextEnabled : styles.topicText
              }
            >
              Tech questions
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.startContainer}>
        <Text style={styles.startText}>If you are ready to go click here.</Text>
        {topic === "" ? (
          <TouchableOpacity
            style={styles.startButton}
            onPress={() => alert("Please select a topic first")}
          >
            <Text style={styles.startText}>Go</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.startButton}
            onPress={() =>
              router.navigate({
                pathname: "screens/QuestionScreen",
                params: { topic: topic, name: params.name },
              })
            }
          >
            <Text style={styles.startText}>Go</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "lightblue",
  },
  introContainer: {
    justifyContent: "start",
    alignItems: "center",
  },
  introText: {
    fontSize: 30,
    color: "#000",
    marginBottom: 10,
    fontWeight: "bold",
  },
  highlightText: {
    fontSize: 30,
    color: "yellow",
    fontWeight: "bold",
  },
  questionText: {
    fontSize: 30,
    color: "#000",
    textDecorationLine: "underline",
  },
  changesContainer: {
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 20,
  },
  changeNameButton: {
    marginTop: 10,
    backgroundColor: "#f7862f",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius: 10,
    marginBottom: 30,
  },
  changesText: {
    color: "#000",
    fontSize: 20,
    fontStyle: "italic",
  },
  changesButtonText: {
    color: "whitesmoke",
    fontSize: 20,
    fontStyle: "italic",
    fontWeight: "bold",
  },
  topicContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  topicText: {
    color: "#000",
    fontSize: 15,
    fontWeight: "bold",
  },
  topicTextEnabled: {
    color: "whitesmoke",
    fontSize: 15,
    fontWeight: "bold",
  },
  topicLeftRow: {
    flexDirection: "row",
    gap: 20,
  },
  topicRightRow: {
    flexDirection: "row",
    gap: 20,
  },

  topicButton: {
    backgroundColor: "lightgreen",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    borderRadius: 10,
    marginBottom: 30,
  },
  topicButtonEnabled: {
    backgroundColor: "#f7862f",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    borderRadius: 10,
    marginBottom: 30,
  },
  startContainer: {
    justifyContent: "center",
    alignItems: "flex-end",
    padding: 20,
  },
  startButton: {
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius: 10,
    marginBottom: 30,
  },
  startText: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
  },
});
