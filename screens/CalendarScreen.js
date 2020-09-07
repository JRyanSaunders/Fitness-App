import React, { useState, Fragment } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import { Calendar } from "react-native-calendars";
import moment from "moment";
import _ from "lodash";

import { Colors } from "../colors/Colors";

const testIDs = require("../testIDs");

const CalendarsScreen = () => {
  const renderCalendarWithMultiDotMarking = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.pageRef}>CALENDAR</Text>
        <Fragment>
          <Text style={styles.text}>Exercise Calendar</Text>
          <Calendar
            style={styles.calendar}
            current={"2012-05-16"}
            markingType={"multi-dot"}
            markedDates={{
              "2012-05-08": {
                selected: true,
                dots: [
                  { key: "vacation", color: "blue", selectedDotColor: "red" },
                  { key: "massage", color: "red", selectedDotColor: "white" },
                ],
              },
              "2012-05-09": {
                disabled: true,
                dots: [
                  { key: "vacation", color: "green", selectedDotColor: "red" },
                  { key: "massage", color: "red", selectedDotColor: "green" },
                ],
              },
            }}
          />
        </Fragment>
      </View>
    );
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      testID={testIDs.calendars.CONTAINER}
    >
      {renderCalendarWithMultiDotMarking()}
    </ScrollView>
  );
};

export default CalendarsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    height: "100%",
    width: "100%",
  },
  pageRef: {
    position: "absolute",
    top: 20,
    left: 15,
    color: "grey",
    fontSize: 10,
  },
  calendar: {
    marginBottom: 10,
  },
  text: {
    textAlign: "center",
    padding: 20,
    backgroundColor: Colors.primary,
    color: "#FFFFFF",
    fontSize: 16,
    marginTop: 125,
  },
});
