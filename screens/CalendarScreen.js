import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

import { Calendar, CalendarList, Agenda } from "react-native-calendars";

export default function CalendarScreen() {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
