import React from "react";
import { StyleSheet, View } from "react-native";

import WorkoutTimer from "../components/WorkoutTimer";

export default function WorkoutScreen(props) {
  return (
    <View style={styles.container}>
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
});
