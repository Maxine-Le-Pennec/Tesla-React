import React from "react";
function Car({ choice, setChoice }) {
  return (
    <>
      <button
        className={choice === 90700 ? "yes" : "no"}
        onClick={() => {
          setChoice(90700);
        }}
      >
        Grande autonomie - 90 700 €
      </button>

      <button
        className={choice === 106700 ? "yes" : "no"}
        onClick={() => {
          setChoice(106700);
        }}
      >
        Performance - 106700 €
      </button>
    </>
  );
}

export default Car;
