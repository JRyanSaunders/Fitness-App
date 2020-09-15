import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import WorkoutTimer from "../components/WorkoutTimer";

export default function WorkoutScreen() {
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
