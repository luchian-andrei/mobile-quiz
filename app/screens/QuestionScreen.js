import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

import GeneralQuestionScreen from "./questions/GeneralQuestionScreen";
import TechQuestionScreen from "./questions/TechQuestionsScreen";
import MovieQuestionScreen from "./questions/MovieQuestionScreen";
import SportQuestionScreen from "./questions/SportQuestionScreen";

export default function QuestionScreen() {
  const params = useLocalSearchParams();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "lightblue" }}>
      {params.topic === "General" && (
        <GeneralQuestionScreen name={params.name} />
      )}
      {params.topic === "Movies" && <MovieQuestionScreen name={params.name} />}
      {params.topic === "Sport" && <SportQuestionScreen name={params.name} />}
      {params.topic === "Tech" && <TechQuestionScreen name={params.name} />}
    </SafeAreaView>
  );
}
