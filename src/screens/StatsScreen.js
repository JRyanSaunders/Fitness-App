import React, { useContext, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { ExerciseContext } from "../components/ExerciseContext";

import AsyncStorage from '@react-native-community/async-storage';
import { AntDesign } from "@expo/vector-icons";
import { Colors } from "../colors/Colors";

export default function StatsScreen() {
  const [exerciseContext, setExerciseContext] = useContext(ExerciseContext);

  const removeExercise = async () => {
    try {
      await AsyncStorage.removeItem("MyExerciseCount");
    } catch (err) {
      alert(err);
    } finally {
      setExerciseContext((prevState) => ({
        ...prevState,
        counts: {
          exerciseCount: 0,
          workoutCount: prevState.counts.workoutCount,
        },
      }));
    }
  };

  const removeWorkout = async () => {
    try {
      await AsyncStorage.removeItem("MyWorkoutCount");
    } catch (err) {
      alert(err);
    } finally {
      setExerciseContext((prevState) => ({
        ...prevState,
        counts: {
          workoutCount: 0,
          exerciseCount: prevState.counts.exerciseCount,
        },
      }));
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/mindfulness.png")}
        style={{ width: "100%", height: 200, marginTop: 14 }}
        resizeMode="contain"
      />
      <View style={styles.cardWide}>
        <AntDesign
          style={styles.iconOne}
          name="Trophy"
          size={24}
          color="white"
        />
        <Text style={styles.headerOne}>Exercises Completed:</Text>
        <Text style={styles.exerciseNumber}>
          {exerciseContext.counts.exerciseCount.toString()}
        </Text>
        <TouchableOpacity style={styles.remove} onPress={() => removeExercise()}>
          <Text style={{ color: "white", fontWeight: "bold" }}>Restart</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardWide}>
        <AntDesign
          style={styles.iconOne}
          name="staro"
          size={24}
          color="white"
        />
        <Text style={styles.headerOne}>Workouts Completed:</Text>
        <Text style={styles.exerciseNumber}>
          {exerciseContext.counts.workoutCount.toString()}
        </Text>
        <TouchableOpacity style={styles.remove} onPress={() => removeWorkout()}>
          <Text style={{ color: "white", fontWeight: "bold" }}>Restart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  cardWide: {
    borderRadius: 15,
    height: 90,
    width: "90%",
    paddingTop: 10,
    paddingHorizontal: 10,
    backgroundColor: Colors.primary,
    marginTop: 5,
  },
  iconOne: {
    left: 0,
    top: 0,
  },
  headerOne: {
    position: "absolute",
    top: 10,
    left: 40,
    color: "white",
    fontWeight: "bold",
    fontSize: 20
  },
  exerciseNumber: {
    top: 20,
    right: 45,
    position: "absolute",
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
  remove: {
    width: "30%",
    padding: "2%",
    alignItems: "center",
    bottom: 0,
    left: 0,
    backgroundColor: "#fc6781",
    borderRadius: 10,
    marginLeft: "10%",
    marginTop: 5,
  },
});