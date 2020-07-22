import React from "react";
function Color({ choice, setChoice }) {
  return (
    <>
      <button
        className={choice === 0 ? "yes" : "no"}
        onClick={() => {
          setChoice(0);
        }}
      >
        Blanc nacré multicouches - 0 €
      </button>

      <button
        className={choice === 1000 ? "yes" : "no"}
        onClick={() => {
          setChoice(1000);
        }}
      >
        Noir uni - 1000 €
      </button>
    </>
  );
}

export default Color;
