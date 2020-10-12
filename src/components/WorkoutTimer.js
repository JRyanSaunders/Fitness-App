import React, { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  Image,
  Alert,
} from "react-native";

import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import { AntDesign } from "@expo/vector-icons";
import { Colors } from "../colors/Colors";
import { ExerciseContext } from "../components/ExerciseContext";
import moment from "moment";

export default function WorkoutTimer() {
  const [count, setCount] = useState(1);
  const [key, setKey] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const [exerciseContext, setExerciseContext] = useContext(ExerciseContext);

  const _format = "YYYY-MM-DD";
  const _today = moment(new Date().dateString).format(_format);

  const exercise = new Array(21);
  exercise[1] = require("../../assets/images/FR1.png");
  exercise[2] = require("../../assets/images/FR2.png");
  exercise[3] = require("../../assets/images/FR3.png");
  exercise[4] = require("../../assets/images/FR4.png");
  exercise[5] = require("../../assets/images/FR5.png");
  exercise[6] = require("../../assets/images/FR6.png");
  exercise[7] = require("../../assets/images/FR7.png");
  exercise[8] = require("../../assets/images/FR8.png");
  exercise[9] = require("../../assets/images/S1.png");
  exercise[10] = require("../../assets/images/S2.png");
  exercise[11] = require("../../assets/images/S3.png");
  exercise[12] = require("../../assets/images/S4.png");
  exercise[13] = require("../../assets/images/S5.png");
  exercise[14] = require("../../assets/images/S6.png");
  exercise[15] = require("../../assets/images/S7.png");
  exercise[16] = require("../../assets/images/S8.png");
  exercise[17] = require("../../assets/images/S9.png");
  exercise[18] = require("../../assets/images/S10.png");
  exercise[19] = require("../../assets/images/S11.png");
  exercise[20] = require("../../assets/images/S12.png");
  exercise[21] = require("../../assets/images/S13.png");

  const onPressSkip = () => {
    if (count < 21) {
      setCount((prevState) => prevState + 1);
      setKey((prevKey) => prevKey + 1);
    }
  };

  const onPressBack = () => {
    if (count > 1) {
      setCount((prevState) => prevState - 1);
      setKey((prevKey) => prevKey + 1);
    }
  };

  let date = {
    [_today]: { selected: true },
  };

  useEffect(() => {
    if (count >= 21) {
      setExerciseContext((prevState) => ({
        ...prevState,
        counts: {
          workoutCount: prevState.counts.workoutCount + 1,
          exerciseCount: prevState.counts.exerciseCount,
        },
      }));
      setExerciseContext((prevState) => ({
        ...prevState,
        completedDates: {
          ...prevState.completedDates,
          ...date,
        },
      })) }}, [count]);

  return (
    <View style={styles.container}>
      <View style={styles.timerCont}>
        <CountdownCircleTimer
          isPlaying={isPlaying}
          duration={2}
          size={240}
          colors={Colors.primary}
          key={key}
          onComplete={() => {
            console.log("Before: ", count)
            setCount((prevState) => prevState + 1);
            console.log("After: ", count)
            setExerciseContext((prevState) => ({
              ...prevState,
              counts: 
               {
                workoutCount: (count >= 21) ? prevState.counts.workoutCount + 1 : prevState.counts.workoutCount,
                exerciseCount: (count < 21) ? prevState.counts.exerciseCount + 1 : prevState.counts.exerciseCount,
              },
              completedDates: {
                ...prevState.completedDates,
                ...date,
              }, 
            }));
            if (count >= 21) {
              console.log(exerciseContext);
              const createTwoButtonAlert = () =>
                Alert.alert(
                  "Workout Complete!",
                  "Please return to the home screen.",
                  [
                    {
                      text: "OK",
                      onPress: () => console.log("okay"),
                    },
                  ],
                  { cancelable: true }
                );
              return [false, 0], createTwoButtonAlert();
            }
            return [true, 0];
          }}
        >
          {({ remainingTime, animatedColor }) => (
            <View>
              <Image
                source={exercise[count]}
                style={{
                  width: 150,
                  height: 150,
                }}
              />
              <View style={styles.timeOutside}>
                <Animated.Text
                  style={{
                    color: animatedColor,
                    fontSize: 18,
                    position: "absolute",
                    marginTop: 67,
                    marginLeft: 35,
                  }}
                >
                  {remainingTime}
                </Animated.Text>
                <Text style={styles.value}>SECONDS</Text>
                <View style={styles.control}>
                  <TouchableOpacity
                    style={styles.backButton}
                    onPress={onPressBack}
                    disabled={count === 1}
                  >
                    <AntDesign
                      name="leftcircleo"
                      size={30}
                      color={Colors.primary}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => setIsPlaying((prev) => !prev)}
                    color={Colors.primary}
                    style={styles.toggleTimer}
                  >
                    {isPlaying ? (
                      <AntDesign
                        name="pausecircleo"
                        size={56}
                        color={Colors.primary}
                      />
                    ) : (
                      <AntDesign
                        name="playcircleo"
                        size={56}
                        color={Colors.primary}
                      />
                    )}
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.forwardButton}
                    onPress={onPressSkip}
                    disabled={count === 21}
                  >
                    <AntDesign
                      name="rightcircleo"
                      size={30}
                      color={Colors.primary}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        </CountdownCircleTimer>
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
  timerCont: {
    bottom: 20,
    left: 0,
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Roboto",
  },
  timer: {
    fontFamily: "lato-regular",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontSize: 18,
    color: Colors.primary,
  },
  text: {
    color: "#aaa",
    fontSize: 18,
  },
  value: {
    fontSize: 17,
    color: Colors.primary,
    position: "absolute",
    marginTop: 68,
    marginLeft: 58,
  },
  timeOutside: {
    bottom: 11,
  },
  control: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    marginTop: 110,
  },
  timerOver: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 72,
    position: "absolute",
  },
  complete: {
    fontFamily: "lato-regular",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontSize: 18,
    marginTop: "25%",
    marginLeft: "15%",
    color: Colors.primary,
    justifyContent: "center",
    position: "absolute",
  },
  toggleTimer: {
    flexDirection: "row",
    fontSize: 20,
    color: Colors.primary,
    marginLeft: 13,
  },
  backButton: {
    flexDirection: "row",
    fontSize: 20,
    color: Colors.primary,
    marginLeft: 10,
    marginLeft: 13,
  },
  forwardButton: {
    flexDirection: "row",
    fontSize: 20,
    color: Colors.primary,
    marginLeft: 10,
    marginLeft: 13,
  },
});
