import { parseISO, format } from "date-fns";
import React from "react";

interface IDateProps {
  dateString: string;
}
const Date: React.FC<IDateProps> = ({ dateString }) => {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
};

export default Date;
