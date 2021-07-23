import React from "react";

interface Props {
  imageurl: string[];
  diameter: string;
  bordercolor: string;
  borderWidth: string;
  stackNumber: string;
}

const StackedAvatar: React.FC<Props> = ({
  imageurl,
  diameter,
  bordercolor,
  borderWidth,
  stackNumber,
}) => {
  const theme =
    "rounded-full border-" +
    bordercolor +
    " w-" +
    diameter +
    " h-" +
    diameter +
    " border-" +
    borderWidth;
  const stackamount = " -ml-" + stackNumber;

  return (
    <div className="py-5 px-5 ">
      <div className="flex">
        <img className={theme} src={imageurl[0]} alt=""></img>
        <img className={theme + stackamount} src={imageurl[1]} alt=""></img>
        <img className={theme + stackamount} src={imageurl[2]} alt=""></img>
        <img className={theme + stackamount} src={imageurl[3]} alt=""></img>
        <span className={"flex items-center justify-center font-semibold bg-gray-200 text-gray-600 " + theme + stackamount}>
          +{imageurl.length - 4}
        </span>
      </div>
    </div>
  );
};

export default StackedAvatar;
