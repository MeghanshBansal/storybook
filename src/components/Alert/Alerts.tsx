import React from "react";

interface Props {
  theme: string;
  content: string;
}

const Alert: React.FC<Props> = ({ theme, content, ...rest }) => {
  return (
    <div className="p-5">
      <p className={theme}>{content}</p>
    </div>
  );
};

export default Alert;
