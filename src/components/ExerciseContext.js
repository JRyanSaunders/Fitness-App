// import { createContext } from "react";

// export const ExerciseContext = createContext(null);
import React, { useState, createContext } from "react";

const ExcerciseContext = createContext([{}, () => {}]);

const ExcerciseProvider = (props) => {
  const [state, setState] = useState({
    count: 0,
  });

  return (
    <ExcerciseContext.Provider value={[state, setState]}>
      {props.children}
    </ExcerciseContext.Provider>
  );
};

export { ExcerciseContext, ExcerciseProvider };
