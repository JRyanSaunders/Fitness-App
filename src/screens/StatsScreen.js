import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function StatsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.exerciseText}></Text>
      <Text style={styles.workoutText}></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  exerciseCount: {
    justifyContent: "center",
    alignItems: "center",
    color: "black",
  },
  workoutCount: {
    justifyContent: "center",
    alignItems: "center",
    color: "black",
  },
});
