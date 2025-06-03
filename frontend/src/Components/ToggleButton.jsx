import React, { useState } from "react";

const ToggleButton = ({ onChange }) => {
  const [selected, setSelected] = useState(null);

  const nextState = () => {
    const next =
      selected === null
        ? "foodpanda"
        : selected === "foodpanda"
        ? "grab"
        : null;
    setSelected(next);
    if (onChange) onChange(next);
  };

  return (
    <button
      onClick={nextState}
      className={`
        px-6 py-2 rounded-md transition-colors duration-300
        text-white font-semibold shadow-md
        ${
          selected === "foodpanda"
            ? "bg-pink-500 hover:bg-pink-600"
            : selected === "grab"
            ? "bg-green-500 hover:bg-green-600"
            : "bg-[#166181] text-gray-700 hover:bg-blue-gray-600"
        }
      `}
    >
      {selected === "foodpanda"
        ? "Foodpanda"
        : selected === "grab"
        ? "Grab"
        : "Home"}
    </button>
  );
};

export default ToggleButton;
