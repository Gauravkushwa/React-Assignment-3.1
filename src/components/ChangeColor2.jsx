// src/components/ChangeColor2.jsx

import { useRef } from "react";

function ChangeColor2() {
  const divRef = useRef(null);

  const handleChangeColor = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <div
        ref={divRef}
        style={{ width: "100px", height: "100px", backgroundColor: "red" }}
      >
        Color Box
      </div>
      <button onClick={handleChangeColor}>Change Color</button>
    </div>
  );
}

export default ChangeColor2;
