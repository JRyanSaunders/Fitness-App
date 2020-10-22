import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Colors } from "../colors/Colors";

import WorkoutTimer from "../components/WorkoutTimer";

export default function WorkoutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.desc}>Improves your overall flexibility and movement</Text>
      <View style={styles.exerciseType}>
        <Text style={styles.textExercise}>Exercise</Text>
        <Text style={styles.textExerciseType}>Full Body</Text>
      </View>
      <WorkoutTimer />
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
  exerciseType: {
    position: "absolute",
    zIndex: 1,
    top: 30,
    right: 40,
  },
  textExercise: {
    color: "grey",
    textAlign: "center",
  },
  textExerciseType: {
    fontSize: 20,
    color: Colors.primary,
    fontWeight: "500",
  },
  desc: {
    top: 35,
    left: 30,
    zIndex: 2,
    width: "40%",
    fontSize: 12,
    color: "grey",
    position: "absolute"
  }
});
