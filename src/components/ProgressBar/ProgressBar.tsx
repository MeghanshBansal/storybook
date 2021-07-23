import React from "react";

interface Props {
  value: number;
  color: string;
}

const ProgressBar: React.FC<Props> = ({ value, color }) => {
  if (value < 0) {
    value = 0;
  }
  if (value > 100) {
    value = 100;
  }
  const style = {
    backgroundColor: color,
    "text-align": "right",
    "text-color": "white",
    padding: "1px",
    width: value + "%",
    "border-radius": "1rem",
  };
  return (
    <div className="bg-gray-100 w-97 rounded-2xl border-black">
      <div style={style}>{value}</div>
    </div>
  );
};

ProgressBar.defaultProps = {
  color: "black",
  value: 50,
};

export default ProgressBar;
