import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  Animated,
} from "react-native";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";

export default function WorkoutTimer() {
  const Exercise = new Array(10);
  exercise[1] = "../assets/e1.jpg";
  exercise[2] = "../assets/e2.jpg";
  exercise[3] = "../assets/e3.jpg";
  exercise[4] = "../assets/e4.jpg";
  exercise[5] = "../assets/e5.jpg";
  exercise[6] = "../assets/e6.jpg";
  exercise[7] = "../assets/e7.jpg";
  exercise[8] = "../assets/e8.jpg";
  exercise[9] = "../assets/e9.jpg";
  exercise[10] = "../assets/e10.jpg";
  var num = 0;

  return (
    <View style={styles.container}>
      <CountdownCircleTimer
        isPlaying
        duration={60}
        size={240}
        colors={"#7B4FFF"}
        onComplete={() => {
          // do stuff here
          return [true, 1500]; // repeat animation in 1.5 seconds
        }}
      >
        {({ remainingTime, animatedColor }) => (
          <Animated.Text style={{ color: animatedColor }}>
            {remainingTime}
          </Animated.Text>
        )}
      </CountdownCircleTimer>
    </View>
  );
}

const styles = StyleSheet.create({});
