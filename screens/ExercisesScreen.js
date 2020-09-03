import React from "react";
import { StyleSheet, Text, View, SafeAreaView, width } from "react-native";

import { Colors } from "../colors/Colors";

export default function ExercisesScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tabBackground}>
        <Text style={styles.title}>EXERCISES</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  tabBackground: {
    position: "absolute",
    backgroundColor: Colors.primary,
    width: "100%",
    height: "20%",
    top: 0,
    left: 0,
  },
  title: {
    position: "absolute",
    top: 20,
    left: 15,
    color: "white",
    fontSize: 10,
  },
});
