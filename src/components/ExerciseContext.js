import React, { useState, createContext, useEffect } from "react";
import AsyncStorage from '@react-native-community/async-storage';

const ExerciseContext = createContext([{}, () => {}]);

const ExerciseProvider = (props) => {
  const [state, setState] = useState({
    counts: {
      exerciseCount: 0,
      workoutCount: 0,
    },
    completedDates: {},
  });

  useEffect(() => {
  const load = async () => {
    try {
      let exerciseCount = await AsyncStorage.getItem("MyExerciseCount");
      let workoutCount = await AsyncStorage.getItem("MyWorkoutCount");

      setState((prevState) => ({
        ...prevState,
        counts: {
          exerciseCount: exerciseCount ? parseInt(exerciseCount) : 0,
          workoutCount: workoutCount ? parseInt(workoutCount) : 0,
        },
      }));
    } catch (err) {
        alert(err);
      }
  };

    load();
  }, []);

  useEffect(() => {
    const save = async () => {
      try {
        const jsonExerciseValue = state.counts.exerciseCount.toString()
        const jsonWorkoutValue = state.counts.workoutCount.toString()
  
        await AsyncStorage.setItem(
          "MyExerciseCount",
          jsonExerciseValue
        );
        await AsyncStorage.setItem(
          "MyWorkoutCount",
          jsonWorkoutValue
        );
      } catch (err) {
        alert(err);
      }
    };
  
      save();
    }, [state.counts]);

    useEffect(() => {
      const load = async () => {
        try {
          let completedDates = await AsyncStorage.getItem("MyCompletedDates");
    
          setState((prevState) => ({
            ...prevState,
            completedDates: 
              JSON.parse(completedDates),
          }));
        } catch (err) {
            alert(err);
          }
      };
    
        load();
      }, []);

    useEffect(() => {
      const save = async () => {
        try {
          const completedDatesValue = JSON.stringify(state.completedDates)
    
          await AsyncStorage.setItem(
            "MyCompletedDates",
            completedDatesValue
          );
        } catch (err) {
          alert(err);
        }
      };
    
        save();
      }, [state.completedDates]);

  

  useEffect(() => {
    console.log("Count test: ", state.counts.exerciseCount);
  })

  return (
    <ExerciseContext.Provider value={[state, setState]}>
      {props.children}
    </ExerciseContext.Provider>
  );
};

export { ExerciseContext, ExerciseProvider };
