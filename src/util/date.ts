import { differenceInCalendarDays } from "date-fns";

export function getCountingOfDays(dateToEvent: string) {
  const currentDate = new Date();
  const parsedDate = new Date(dateToEvent);

  const difference = differenceInCalendarDays(parsedDate, currentDate);

  if (difference < 0) {
    return "Already happened";
  } else if (difference == 0) {
    return "🌈 It's today!! 🌈";
  } else if (difference == 1) {
    return "In " + difference + " day";
  }

  return "In " + difference + " days";
}

export function extractDateFromUTCString(utcString: string) {
  const splitString = utcString.split(" ");

  const dayOfWeek = splitString[0];

  const day = splitString[1];

  const month = splitString[2];

  const year = splitString[3];

  return `${dayOfWeek} ${day} ${month} ${year}`;
}

export function getUserTimeZone() {
  const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return userTimeZone;
}

export function getFormattedDate(date?: string): string {
  let dateFormatted: any = date ? new Date(date) : new Date();

  dateFormatted = dateFormatted.toUTCString();

  dateFormatted = dateFormatted.toLocaleString("en-US", {
    timeZone: getUserTimeZone(),
  });

  dateFormatted = extractDateFromUTCString(dateFormatted);

  return dateFormatted;
}
