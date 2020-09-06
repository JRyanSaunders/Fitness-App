import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  Animated,
  Image,
  SafeAreaView,
} from "react-native";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";

export default function WorkoutTimer() {
  const [count, setCount] = useState(0);
  const [completedTime, setCompletedTime] = useState(0);

  const exercise = new Array(21);
  exercise[1] = require("../assets/FR1.png");
  exercise[2] = require("../assets/FR2.png");
  exercise[3] = require("../assets/FR3.png");
  exercise[4] = require("../assets/FR4.png");
  exercise[5] = require("../assets/FR5.png");
  exercise[6] = require("../assets/FR6.png");
  exercise[7] = require("../assets/FR7.png");
  exercise[8] = require("../assets/FR8.png");
  exercise[9] = require("../assets/S1.png");
  exercise[10] = require("../assets/S2.png");
  exercise[11] = require("../assets/S3.png");
  exercise[12] = require("../assets/S4.png");
  exercise[13] = require("../assets/S5.png");
  exercise[14] = require("../assets/S6.png");
  exercise[15] = require("../assets/S7.png");
  exercise[16] = require("../assets/S8.png");
  exercise[17] = require("../assets/S9.png");
  exercise[18] = require("../assets/S10.png");
  exercise[19] = require("../assets/S11.png");
  exercise[20] = require("../assets/S12.png");
  exercise[21] = require("../assets/S13.png");

  useEffect(() => {
    setCount((prev) => prev + 1);
  }, [completedTime, setCount]);

  return (
    <View style={styles.container}>
      <View style={styles.timerCont}>
        <CountdownCircleTimer
          {...props}
          onComplete={() => {
            countRef.current += 1;
            setCompletedTime(Date.now()); // new value every time it hits the onComplete
            return [true, 0];
          }}
          isPlaying
          duration={5}
          size={240}
          colors={"#7B4FFF"}
        >
          {({ remainingTime, animatedColor }) => (
            <Animated.Text style={{ color: animatedColor }}>
              {remainingTime}
            </Animated.Text>
          )}
        </CountdownCircleTimer>
        <Image source={exercise[count]} style={{ width: 150, height: 150 }} />
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
  },
});
