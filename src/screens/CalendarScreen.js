import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import { Colors } from "../colors/Colors";

import { Calendar } from "react-native-calendars";
import moment from "moment";

const stretch = { key: "stretch", color: "red" };
const foamRoll = { key: "foamRoll", color: "blue" };

const _format = "YYYY-MM-DD";
const _today = moment(new Date().dateString).format(_format);
const todaysDate = _today;

const dates = {
  todaysDate: { selected: true },
  "2020-09-09": { selected: true },
  "2020-09-10": { selected: true },
  "2020-09-11": { selected: true },
};

console.log(todaysDate);

export default function CalendarScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.pageRef}>CALENDAR</Text>
      <View style={styles.filler}></View>
      <Calendar
        markedDates={dates}
        markingType={"multi-dot"}
        theme={{
          backgroundColor: "#ffffff",
          calendarBackground: "#ffffff",
          textSectionTitleColor: Colors.primaryFont,
          textSectionTitleDisabledColor: "#d9e1e8",
          selectedDayBackgroundColor: Colors.primary,
          selectedDayTextColor: "#ffffff",
          todayTextColor: Colors.primary,
          dayTextColor: "#2d4150",
          textDisabledColor: "#d9e1e8",
          dotColor: "#00adf5",
          selectedDotColor: "#ffffff",
          arrowColor: Colors.primary,
          disabledArrowColor: "#d9e1e8",
          monthTextColor: Colors.primary,
          indicatorColor: "blue",
          textDayFontWeight: "300",
          textMonthFontWeight: "bold",
          textDayHeaderFontWeight: "300",
          "stylesheet.calendar.header": {
            dayHeader: {
              width: 48,
            },
          },
        }}
      />

      <View style={styles.textSection}>
        <Text style={styles.calendarSummary}>
          One study found that stretching 4 times per week provided 82% greater
          flexibility improvements than stretching 2 times per week. It is not
          clear where the upper limit of frequency benefits is, so the
          recommended frequency is therefore 3-7 days per week.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  pageRef: {
    position: "absolute",
    top: 20,
    left: 15,
    color: "grey",
    fontSize: 10,
    zIndex: 4,
  },
  filler: {
    marginTop: "20%",
  },
  text: {
    marginTop: 0,
    paddingRight: 30,
  },
  main: {
    justifyContent: "center",
    alignItems: "center",
    top: 250,
  },
  answerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  textSection: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    top: 60,
  },
  calendarSummary: {
    fontSize: 9,
    paddingHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 0,
    color: Colors.primaryFont,
    position: "absolute",
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
    marginTop: "20%",
    marginBottom: "10%",

    // add shadows for iOS only
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.26,
    shadowColor: "black",

    // add shadows for Android only
    // No options for shadow color, shadow offset, shadow opacity like iOS
    elevation: 8,
  },
});
