// import { useState } from 'react';


// export default initialState => {
//   const [value, setValue] = useState("");
//   const handleChange = e => {
//     setValue(e.target.value);
//   }
//   return [value, handleChange];

//   const resetInput =() => {
//     setValue("");
//   };
//   return [value, handleChange, resetInput];
// };

import { useState } from "react";

function InitialInput() {
  const [values, setValues] = useState("");
  const handleChange = e => {
    setValues(e.target.value);
  };

  const resetInput = () => {
    setValues("");
  };

  return [values, handleChange, resetInput];
};

export default InitialInput;