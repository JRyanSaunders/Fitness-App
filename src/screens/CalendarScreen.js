import React from "react";
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

const vacation = { key: "vacation", color: "red", selectedDotColor: "blue" };
const massage = { key: "massage", color: "blue", selectedDotColor: "blue" };
const workout = { key: "workout", color: "green" };

const _format = "YYYY-MM-DD";
const _today = moment(new Date().dateString).format(_format);

export default class App extends React.Component {
  initialState = {
    [_today]: { disabled: false },
  };

  state = {
    _markedDates: this.initialState,
    isOpen: false,
    isDisabledOne: false,
    isDisabledTwo: false,
    isDisabledThree: false,
    selectedDay: "",
  };

  onDaySelect = (day) => {
    const _selectedDay = moment(day.dateString).format(_format);

    this.setState({
      selectedDay: _selectedDay,
      isOpen: true,
    });
  };

  saveDay = () => {
    const dots = [];
    let selected = true;
    const {
      isDisabledOne,
      isDisabledTwo,
      isDisabledThree,
      _markedDates,
      selectedDay,
    } = this.state;

    if (isDisabledOne) {
      dots.push(vacation);
    }

    if (isDisabledTwo) {
      dots.push(massage);
    }

    if (isDisabledThree) {
      dots.push(workout);
    }

    if (_markedDates[selectedDay]) {
      selected = !_markedDates[selectedDay].selected;
    }

    const clone = { ..._markedDates };

    clone[selectedDay] = { dots, selected };

    this.setState({
      isOpen: false,
      _markedDates: clone,
      isDisabledOne: false,
      isDisabledTwo: false,
      isDisabledThree: false,
    });
  };

  render() {
    const BContent = () => (
      <Button
        title="X"
        color="red"
        onPress={this.saveDay}
        style={[styles.btn, styles.btnModal]}
      />
    );

    return (
      <View style={styles.container}>
        <Calendar
          markedDates={this.state._markedDates}
          markingType={"multi-dot"}
          onDayPress={this.onDaySelect}
        />

        <Modal
          style={[styles.modal, styles.modal3]}
          position={"center"}
          visible={this.state.isOpen}
          isDisabled={this.state.isDisabled}
        >
          <SafeAreaView>
            <View style={styles.answerContainer}>
              <Text style={styles.text}>vacation</Text>
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
              <Text style={styles.text}>massage</Text>
              <Button
                title={this.state.isDisabledTwo ? "YES" : "NO"}
                onPress={() =>
                  this.setState({ isDisabledTwo: !this.state.isDisabledTwo })
                }
                color={Colors.primary}
                style={styles.btn}
              />
            </View>
            <View style={styles.answerContainer}>
              <Text style={styles.text}>workout</Text>
              <Button
                title={this.state.isDisabledThree ? "YES" : "NO"}
                onPress={() =>
                  this.setState({
                    isDisabledThree: !this.state.isDisabledThree,
                  })
                }
                color={Colors.primary}
                style={styles.btn}
              />
            </View>
          </SafeAreaView>
          <BContent />
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    marginTop: 0,
    paddingRight: 30,
  },
  answerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
