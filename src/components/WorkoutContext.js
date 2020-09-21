// import { createContext } from "react";

// export const ExerciseContext = createContext(null);
import React, { useState, createContext } from "react";

const WorkoutContext = createContext([{}, () => {}]);

const WorkoutProvider = (props) => {
  const [state, setState] = useState(0);

  return (
    <WorkoutContext.Provider value={[state, setState]}>
      {props.children}
    </WorkoutContext.Provider>
  );
};

export { WorkoutContext, WorkoutProvider };
