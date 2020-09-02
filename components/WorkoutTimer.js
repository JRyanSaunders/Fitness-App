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
  return (
    <View style={styles.container}>
      <CountdownCircleTimer
        isPlaying
        duration={60}
        size={240}
        colors={"#7B4FFF"}
        onComplete={() => {
          // do your stuff here
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
