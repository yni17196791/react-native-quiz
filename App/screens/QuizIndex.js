import React from "react";
import { ScrollView, StatusBar } from "react-native";

import firsttoneQuestions from "../data/firsttones";

import { RowItem } from "../components/RowItem";

export default ({ navigation }) => (
  <ScrollView>
    <StatusBar barStyle="dark-content" />
    <RowItem
      name="一声 から始まる単語"
      color="#36b1f0"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "一声 から始まる単語",
          questions: firsttoneQuestions,
          color: "#36b1f0"
        })
      }
    />
  </ScrollView>
);
