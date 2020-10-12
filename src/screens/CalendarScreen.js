import React, { useContext, useEffect } from "react";
import { StyleSheet, Text, View, Image, AsyncStorage } from "react-native";
import { ExerciseContext } from "../components/ExerciseContext";
import { Colors } from "../colors/Colors";

import { Calendar } from "react-native-calendars";

// let markedDates = {
//   "2012-05-16": { selected: true, marked: true, selectedColor: "blue" },
//   "2012-05-17": { marked: true },
//   "2012-05-18": { marked: true, dotColor: "red", activeOpacity: 0 },
//   "2012-05-19": { disabled: true, disableTouchEvent: true },
// };

// console.log("Dates: ", markedDates);

// markedDates = { ...markedDates, "2012-05-20": { selected: true, marked: true, selectedColor: "blue" } };

// console.log("NewDates: ", markedDates);

export default function CalendarScreen() {
  const [exerciseContext, setExerciseContext] = useContext(ExerciseContext);

  // const save = async () => {
  //   try {
  //     await AsyncStorage.setItem(
  //       "MyCompletedDates",
  //       exerciseContext.counts.exerciseCount.toString()
  //     );
  //     console.log(exerciseContext.counts.exerciseCount);
  //     await AsyncStorage.setItem(
  //       "MyCompletedDates",
  //       exerciseContext.counts.workoutCount.toString()
  //     );
  //   } catch (err) {
  //     alert(err);
  //   }
  // };

  // const load = async () => {
  //   try {
  //     let exerciseCount = await AsyncStorage.getItem("MyCompletedDates");

  //     if (exerciseCount !== null && workoutCount !== null) {
  //       setExerciseContext((prevState) => ({
  //         ...prevState,
  //         counts: {
  //           exerciseCount: JSON.parse(exerciseCount),
  //         },
  //       }));
  //     }
  //   } catch (err) {
  //     alert(err);
  //   }
  // };

  // const removeExercise = async () => {
  //   try {
  //     await AsyncStorage.removeItem("MyExerciseCount");
  //   } catch (err) {
  //     alert(err);
  //   } finally {
  //     setExerciseContext((prevState) => ({
  //       ...prevState,
  //       counts: {
  //         exerciseCount: 0,
  //         workoutCount: prevState.counts.workoutCount,
  //       },
  //     }));
  //   }
  // };

  // const removeWorkout = async () => {
  //   try {
  //     await AsyncStorage.removeItem("MyWorkoutCount");
  //   } catch (err) {
  //     alert(err);
  //   } finally {
  //     setExerciseContext((prevState) => ({
  //       ...prevState,
  //       counts: {
  //         workoutCount: 0,
  //         exerciseCount: prevState.counts.exerciseCount,
  //       },
  //     }));
  //   }
  // };

  // useEffect(() => {
  //   load()
  // }, []);

  // useEffect(() => {
  //   save()
  // }, [exerciseContext]);

  return (
    <View style={styles.container}>
      <Text style={styles.pageRef}>CALENDAR</Text>
      <View style={styles.filler}></View>
      <Calendar
        markedDates={exerciseContext.completedDates}
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
      <Image
        source={require("../../assets/calendar.png")}
        style={{ width: "100%", height: 200, marginBottom: 5 }}
        resizeMode="contain"
      />
      <Text style={styles.calendarSummary}>
        One study found that stretching 4 times per week provided 82% greater
        flexibility improvements than stretching 2 times per week. It is not
        clear where the upper limit of frequency benefits is, so the recommended
        frequency is therefore 3-7 days per week.
      </Text>
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
    marginTop: "15%",
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
  calendarSummary: {
    fontSize: 9,
    paddingHorizontal: 40,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 0,
    color: Colors.primaryFont,
    textAlign: "center",
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
