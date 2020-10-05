import React, { useState, createContext } from "react";

const ExerciseContext = createContext([{}, () => {}]);

const ExerciseProvider = (props) => {
  const [state, setState] = useState({
    counts: {
      exerciseCount: 0,
      workoutCount: 0,
    },
    dates: {
      completedDates: {
        "2020-10-18": { selected: true },
        "2020-10-19": { selected: true },
        "2020-10-20": { selected: true },
        "2020-10-21": { selected: true },
      },
    },
  });

  // Cant access the stats screen now the keys are in the object together!

  return (
    <ExerciseContext.Provider value={[state, setState]}>
      {props.children}
    </ExerciseContext.Provider>
  );
};

export { ExerciseContext, ExerciseProvider };
