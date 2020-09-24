// import { createContext } from "react";

// export const ExerciseContext = createContext(null);
import React, { useState, createContext } from "react";

const ExerciseContext = createContext([{}, () => {}]);

const ExerciseProvider = (props) => {
  const [state, setState] = useState(0);
  //{ exerciseCount: 0, workoutCount: 0, isComplete: true }

  return (
    <ExerciseContext.Provider value={[state, setState]}>
      {props.children}
    </ExerciseContext.Provider>
  );
};

export { ExerciseContext, ExerciseProvider };
