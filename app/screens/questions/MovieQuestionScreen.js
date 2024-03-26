import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { router, Link } from "expo-router";
import { useLocalSearchParams } from "expo-router";

import movieQuestions from "../../components/database/movieQuestions";

export default function MovieQuestionScreen() {
  const params = useLocalSearchParams();

  const [qIndex, setQIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(-1);
  const [score, setScore] = useState(0);
  const correctAnswerIndex = movieQuestions[qIndex].correctAnswer;
  const correctAnswerText = movieQuestions[qIndex].correctAnswerText;
  const [check, setCheck] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  function checkAnswer() {
    if (selectedAnswer === correctAnswerIndex) {
      setScore(score + 1);
    } else {
      setScore(score);
      setShowAnswer(true);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.welcomeMessage}>
        Topic: <Text style={styles.highlightText}>Movies</Text>{" "}
      </Text>
      {showAnswer ? (
        <Text style={styles.questionAndAnswer}>
          Correct answer:
          <Text style={styles.highlightText}>{correctAnswerText}</Text>
        </Text>
      ) : null}
      <Text style={styles.questionAndAnswer}>
        {movieQuestions[qIndex].question}{" "}
      </Text>
      {!check ? (
        <FlatList
          data={movieQuestions[qIndex].possibleAnswers}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              key={index}
              onPress={() => setSelectedAnswer(index)}
              style={
                selectedAnswer === index
                  ? styles.selectedButton
                  : styles.unselectedButton
              }
            >
              <Text
                style={
                  selectedAnswer === index
                    ? styles.selectedAnswer
                    : styles.unselectedAnswer
                }
              >
                {item}
              </Text>
            </TouchableOpacity>
          )}
        />
      ) : (
        <FlatList
          data={movieQuestions[qIndex].possibleAnswers}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              key={index}
              disabled={check ? true : false}
              onPress={() => setSelectedAnswer(index)}
              style={
                selectedAnswer === index
                  ? index === correctAnswerIndex
                    ? styles.correctButton
                    : styles.wrongButton
                  : styles.unselectedButton
              }
            >
              <Text
                style={
                  selectedAnswer === index
                    ? styles.selectedAnswer
                    : styles.unselectedAnswer
                }
              >
                {item}
              </Text>
            </TouchableOpacity>
          )}
        />
      )}

      {qIndex < 10 ? (
        selectedAnswer === -1 ? (
          <View>
            <TouchableOpacity
              style={styles.nextButton}
              onPress={() =>
                alert("You cannot pass without selecting an answer")
              }
            >
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            {!check ? (
              <TouchableOpacity
                onPress={() => [setCheck(true), checkAnswer()]}
                style={styles.nextButton}
              >
                <Text style={styles.buttonText}>Check </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.nextButton}
                onPress={() => [
                  setQIndex(qIndex + 1),
                  setSelectedAnswer(-1),
                  setCheck(false),
                  setShowAnswer(false),
                ]}
              >
                <Text style={styles.buttonText}>Next</Text>
              </TouchableOpacity>
            )}
          </View>
        )
      ) : (
        <View>
          {!check ? (
            <TouchableOpacity
              onPress={() => [setCheck(true), checkAnswer()]}
              style={styles.nextButton}
            >
              <Text style={styles.buttonText}>Check </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.nextButton}
              onPress={() => [
                router.navigate({
                  pathname: "screens/EndScreen",
                  params: { score: score, name: params.name },
                }),
              ]}
            >
              <Text style={styles.buttonText}>End screen</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeMessage: {
    flex: 1,
    justifyContent: "flex-start",
    marginTop: 20,
    fontWeight: "bold",
    fontSize: 20,
  },
  highlightText: {
    flex: 1,
    justifyContent: "flex-start",
    marginTop: 20,
    fontWeight: "bold",
    fontSize: 20,
    color: "yellow",
  },
  questionAndAnswer: {
    fontWeight: "bold",
    fontSize: 20,
    margin: 5,
    textAlign: "center",
  },
  nextButton: {
    backgroundColor: "whitesmoke",
    padding: 10,
    borderRadius: 10,
    color: "#fff",
    margin: 15,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "bold",
  },
  selectedButton: {
    backgroundColor: "orange",
    padding: 10,
    borderRadius: 10,
    color: "#fff",
    margin: 15,
  },
  unselectedButton: {
    backgroundColor: "whitesmoke",
    padding: 10,
    borderRadius: 10,
    color: "#fff",
    margin: 15,
  },
  correctButton: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 10,
    color: "#fff",
    margin: 15,
  },
  wrongButton: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 10,
    color: "#fff",
    margin: 15,
  },
  selectedAnswer: { color: "white" },
  unselectedAnswer: { color: "black" },
});
