import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Colors } from "../colors/Colors";

import { Calendar } from "react-native-calendars";
import moment from "moment";

const stretch = { key: "stretch", color: "red" };
const foamRoll = { key: "foamRoll", color: "blue" };

const _format = "YYYY-MM-DD";
const _today = moment(new Date().dateString).format(_format);

export default function CalendarScreenEdit() {
  return (
    <View style={styles.container}>
      <Text style={styles.pageRef}>CALENDAR</Text>
      <Calendar
        markedDates={_markedDates}
        markingType={"multi-dot"}
        onDayPress={onDaySelect}
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
          When a workout is completed, your dates exercised will be marked on
          the calendar. One study found that stretching 4 times per week
          provided 82% greater flexibility improvements than stretching 2 times
          per week. It is not clear where the upper limit of frequency benefits
          is, so the recommended frequency is therefore 3-7 days per week.
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
    justifyContent: "center",
  },
  pageRef: {
    position: "absolute",
    top: 20,
    left: 15,
    color: "grey",
    fontSize: 10,
    zIndex: 4,
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
});
