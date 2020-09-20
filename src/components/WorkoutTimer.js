import React, { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  Image,
} from "react-native";

import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import { AntDesign } from "@expo/vector-icons";
import { Colors } from "../colors/Colors";
import { ExerciseContext } from "../components/ExerciseContext";

export default function WorkoutTimer() {
  const [count, setCount] = useState(1);
  const [key, setKey] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [disabled, setDisabled] = useState(false);

  const { value, setExerciseCount } = useContext(ExerciseContext);

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
    setCount((prevState) => prevState + 1), setKey((prevKey) => prevKey + 1);
  };

  useEffect(() => {
    if (count >= 21) setDisabled(true);
  }, [count]);

  // const renderTime = () => {
  //   if (remainingTime === 0 && count >= 21) {
  //     return <Text style={styles.timerOver}>Too Late...</Text>;
  //   }
  // };

  return (
    <View style={styles.container}>
      <View style={styles.timerCont}>
        <CountdownCircleTimer
          isPlaying={isPlaying}
          duration={2}
          size={240}
          colors={"#7B4FFF"}
          key={key}
          //renderTime={renderTime}
          onComplete={() => {
            setCount((prevState) => prevState + 1);
            setExerciseCount((prevState) => prevState + 1);
            if (count >= 21) {
              return [false, 0];
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
                <Text style={styles.value}>seconds</Text>
                <View style={styles.control}>
                  <TouchableOpacity
                    style={styles.skipButton}
                    onPress={onPressSkip}
                    disabled={disabled}
                  >
                    <Text style={styles.skipText}>Skip</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    title="Play / Pause"
                    onPress={() => setIsPlaying((prev) => !prev)}
                    color={Colors.primary}
                    style={styles.toggleTimer}
                  >
                    {isPlaying ? (
                      <AntDesign
                        name="pausecircleo"
                        size={24}
                        color={Colors.primary}
                      />
                    ) : (
                      <AntDesign
                        name="playcircleo"
                        size={24}
                        color={Colors.primary}
                      />
                    )}
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

// return <p>{countRef.current}</p>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  timerCont: {
    top: 0,
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
    fontSize: 20,
    color: Colors.primary,
    position: "absolute",
    marginTop: 65,
    marginLeft: 60,
  },
  timeOutside: {
    bottom: 11,
  },
  control: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    position: "absolute",
    marginTop: 110,
  },
  skipButton: {
    fontSize: 20,
    color: Colors.primary,
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 10,
    padding: 5,
    marginLeft: 45,
  },
  skipText: {
    color: Colors.primary,
  },
  toggleTimer: {
    flexDirection: "row",
    fontSize: 20,
    color: Colors.primary,
    marginLeft: 10,
  },
  timerOver: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 72,
    position: "absolute",
  },
});
