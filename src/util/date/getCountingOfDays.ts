import { differenceInCalendarDays } from "date-fns";

export function getCountingOfDays(dateToEvent: Date) {
  const currentDate = new Date();

  const difference = differenceInCalendarDays(dateToEvent, currentDate);

  if (difference < 0) {
    return "Already happened";
  } else if (difference == 0) {
    return "It's today!!";
  } else if (difference == 1) {
    return "In " + difference + " day";
  }

  return "In " + difference + " days";
}
