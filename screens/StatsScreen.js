import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { exerciseCount, workoutCount } from "../components/WorkoutTimer";

export default function StatsScreen() {
  return (
    <View style={styles.container}>
      <Text display={exerciseCount} style={styles.exerciseText}>
        {exerciseCount}
      </Text>
      <Text display={workoutCount} style={styles.workoutText}>
        {workoutCount}
      </Text>
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
