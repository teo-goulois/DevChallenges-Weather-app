import React, { useMemo } from "react";
type Props = {
  date: string | undefined;
};
const DateComponent = ({ date }: Props) => {
  const dateFormat = useMemo(() => {
    if (date)
      return new Date(date).toLocaleDateString("en-UK", {
        weekday: "short",
        month: "short",
        day: "numeric",
      });
  }, [date]);

  return <>{dateFormat}</>;
};

export default DateComponent;
