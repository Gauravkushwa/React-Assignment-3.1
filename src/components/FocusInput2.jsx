// src/components/FocusInput2.jsx

import { useRef, useEffect } from "react";

function FocusInput2() {
  const inputRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      divRef.current.style.backgroundColor = "yellow";
    }, 3000);
  }, []);

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Focus me on component mount"
      />
    </div>
  );
}

export default FocusInput2;
