import React, { useContext, useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  AsyncStorage,
  TouchableOpacity,
} from "react-native";
import { ExerciseContext } from "../components/ExerciseContext";

import { AntDesign } from "@expo/vector-icons";
import { Colors } from "../colors/Colors";
//import { TouchableOpacity } from "react-native-gesture-handler";

export default function StatsScreen() {
  const [exerciseCount, setExerciseCount] = useContext(ExerciseContext);
  //const [workoutCount, setWorkoutCount] = useContext(ExerciseContext);

  const save = async () => {
    try {
      await AsyncStorage.setItem("MyExerciseCount", exerciseCount);
      //await AsyncStorage.setItem("MyWorkoutCount", workoutCount);
    } catch (err) {
      alert(err);
    }
  };

  const load = async () => {
    try {
      let exerciseCount = await AsyncStorage.getItem("MyExerciseCount");
      //let workoutCount = await AsyncStorage.getItem("MyWorkoutCount");

      if (exerciseCount !== null) {
        setExerciseCount(exerciseCount);
      }
      // if (workoutCount !== null) {
      //   setWorkoutCount(workoutCount);
      // }
    } catch (err) {
      alert(err);
    }
  };

  const remove = async () => {
    try {
      await AsyncStorage.removeItem("MyExerciseCount");
    } catch (err) {
      alert(err);
    } finally {
      setExerciseCount(0);
    }
  };

  useEffect(() => {
    load();
    //save();
  }, []);

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
        <Text style={styles.exerciseNumber}> {exerciseCount}</Text>
        <TouchableOpacity style={styles.save} onPress={() => save()}>
          <Text style={{ color: "white", fontWeight: "bold" }}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.remove} onPress={() => remove()}>
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
        <Text style={styles.exerciseNumber}> {exerciseCount}</Text>
        <TouchableOpacity style={styles.remove} onPress={() => remove()}>
          <Text style={{ color: "white", fontWeight: "bold" }}>Restart</Text>
        </TouchableOpacity>
      </View>
      {/* <TouchableOpacity onPress={() => save()}>
        <Text>Save</Text>
      </TouchableOpacity> */}
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
    height: "15%",
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
    fontSize: 18,
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
    padding: 5,
    alignItems: "center",
    bottom: 0,
    left: 0,
    backgroundColor: "#fc6781",
    borderRadius: 10,
    marginLeft: "10%",
    marginTop: 5,
  },
  save: {
    width: "15%",
    position: "absolute",
    padding: 5,
    alignItems: "center",
    bottom: 14,
    left: 110,
    backgroundColor: "#fc6781",
    borderRadius: 10,
    marginLeft: "10%",
    marginTop: 5,
  },
});
