import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";

import { Colors } from "../colors/Colors";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>SUMMARY</Text>
      <Text style={styles.heading}>STRETCH & ROLL</Text>
      <View style={styles.content}>
        <TouchableOpacity
          style={styles.timerDefault}
          onPress={() => navigation.navigate("WorkoutScreen")}
        >
          <Button title="START WORKOUT" color={Colors.primary} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.statContainer}
          onPress={() => navigation.navigate("StatsScreen")}
        >
          <AntDesign name="barschart" size={18} color={Colors.primary} />
          <Text style={{ color: Colors.primary }}>Statistics</Text>
          <AntDesign name="book" size={18} color={Colors.primary} />
        </TouchableOpacity>
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
  title: {
    position: "absolute",
    top: 20,
    left: 15,
    color: "grey",
    fontSize: 10,
  },
  heading: {
    position: "absolute",
    top: 80,
    fontFamily: "lato-regular",
    fontSize: 24,
    color: Colors.primary,
  },
  callToAction: {
    color: Colors.primary,
    fontSize: 24,
  },
  statContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 20,
    alignItems: "center",
    flexDirection: "row",
    width: 200,
    height: 50,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#eeeeee",
    marginHorizontal: 5,
    marginVertical: 5,

    // add shadows for iOS only
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.26,
    shadowColor: "black",

    // add shadows for Android only
    // No options for shadow color, shadow offset, shadow opacity like iOS
    elevation: 8,
  },
  timerDefault: {
    justifyContent: "center",
    alignItems: "center",
    width: 250,
    height: 250,
    backgroundColor: "white",
    borderRadius: 200,
    borderWidth: 1,
    borderColor: "#eeeeee",
    marginHorizontal: 5,
    marginVertical: 60,
    // add shadows for iOS only
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.26,
    shadowColor: "black",
    // add shadows for Android only
    // No options for shadow color, shadow offset, shadow opacity like iOS
    elevation: 8,
  },
  content: {
    alignItems: "center",
  },
});
