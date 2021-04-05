// import { useState } from "react";


// const ToggleHook = () => {
//   const [toggle, setToggle] = useState(false);
//   const handleToggle = () => {
//     setToggle(!toggle); 
//   }
//   return [toggle, handleToggle];

// }

// export default ToggleHook;


import { useState } from "react";

function CustomToggleHook() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return [toggle, handleToggle];
}

export default CustomToggleHook;
