import React from "react";
import Image from "next/future/image";
// Image
import backgroundImage from "../../public/images/Cloud-background.png";

type Props = {
  condition:
    | {
        text: string;
        icon: string;
        code: number;
      }
    | undefined;
};

const ShowWeather = ({ condition }: Props) => {
  return (
    <div className="relative flex items-center justify-center flex-[0_1_200px] h-full ">
      <Image
        // @ts-ignore
        layout={"raw"}
        src={backgroundImage}
        alt="background"
        className="absolute opacity-25 left-0 right-0 w-full pointer-events-none z-0 "
      />
      {condition ? (
        <Image
          src={`http:${condition.icon}`}
          alt={condition.text}
          width={125}
          height={125}
          className="!w-[125px]"
        />
      ) : (
        "loading..."
      )}
    </div>
  );
};

export default ShowWeather;
