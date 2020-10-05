import React, { useState, createContext } from "react";

const ExerciseContext = createContext([{}, () => {}]);

const ExerciseProvider = (props) => {
  const [state, setState] = useState({
    exerciseCount: 0,
    workoutCount: 0,
    isComplete: true,
  });

  // Cant access the stats screen now the keys are in the object together!

  return (
    <ExerciseContext.Provider value={[state, setState]}>
      {props.children}
    </ExerciseContext.Provider>
  );
};

export { ExerciseContext, ExerciseProvider };
