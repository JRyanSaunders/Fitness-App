import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  Button,
  SafeAreaView,
} from "react-native";

import { Colors } from "../colors/Colors";

import { Calendar, CalendarList, Agenda } from "react-native-calendars";
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
        markedDates={this.state._markedDates}
        markingType={"multi-dot"}
        onDayPress={this.onDaySelect}
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

      <Modal
        style={[styles.modal, styles.modal3]}
        position={"center"}
        visible={this.state.isOpen}
        isDisabled={this.state.isDisabled}
      >
        <SafeAreaView style={styles.main}>
          <View style={styles.answerContainer}>
            <Text style={styles.text}>Stretch</Text>
            <Button
              title={this.state.isDisabledOne ? "YES" : "NO"}
              onPress={() =>
                this.setState({ isDisabledOne: !this.state.isDisabledOne })
              }
              color={Colors.primary}
              style={styles.btn}
            />
          </View>
          <View style={styles.answerContainer}>
            <Text style={styles.text}>Foam Roll</Text>
            <Button
              title={this.state.isDisabledTwo ? "YES" : "NO"}
              onPress={() =>
                this.setState({ isDisabledTwo: !this.state.isDisabledTwo })
              }
              color={Colors.primary}
              style={styles.btn}
            />
          </View>

          <BContent />
        </SafeAreaView>
      </Modal>
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
