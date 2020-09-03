import React, { useState } from "react";
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

  const exercise = new Array(21);
  exercise[1] = "../assets/FR1.png";
  exercise[2] = "../assets/FR2.png";
  exercise[3] = "../assets/FR3.png";
  exercise[4] = "../assets/FR4.png";
  exercise[5] = "../assets/FR5.png";
  exercise[6] = "../assets/FR6.png";
  exercise[7] = "../assets/FR7.png";
  exercise[8] = "../assets/FR8.png";
  exercise[9] = "../assets/S1.png";
  exercise[10] = "../assets/S2.png";
  exercise[11] = "../assets/S3.png";
  exercise[12] = "../assets/S4.png";
  exercise[13] = "../assets/S5.png";
  exercise[14] = "../assets/S6.png";
  exercise[15] = "../assets/S7.png";
  exercise[16] = "../assets/S8.png";
  exercise[17] = "../assets/S9.png";
  exercise[18] = "../assets/S10.png";
  exercise[19] = "../assets/S11.png";
  exercise[20] = "../assets/S12.png";
  exercise[21] = "../assets/S13.png";

  // image={exercise[count]}

  return (
    <View style={styles.container}>
      <View style={styles.timerCont}>
        <CountdownCircleTimer
          isPlaying
          duration={5}
          size={240}
          colors={"#7B4FFF"}
          onComplete={() => {
            // do stuff here
            // setCount(count + 1);
            return [true, 1000]; // repeat animation in 1 seconds
          }}
        >
          {({ remainingTime, animatedColor }) => (
            <Animated.Text style={{ color: animatedColor }}>
              {remainingTime}
            </Animated.Text>
          )}
        </CountdownCircleTimer>
        {/* <Image image={exercise[count]} style={{ width: 400, height: 400 }} /> */}
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
    top: 0,
    left: 0,
  },
});
