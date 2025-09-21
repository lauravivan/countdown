import { differenceInCalendarDays } from "date-fns";

export function getCountingOfDays(dateToEvent: Date): string {
  const currentDate = new Date();
  const difference = differenceInCalendarDays(dateToEvent, currentDate);

  const happened = difference < 0 && "Already happened";
  const today = difference == 0 && "It's today!!";
  const oneDay = difference == 1 && `In ${difference} day`;

  return happened || today || oneDay || `In ${difference} days`;
}
