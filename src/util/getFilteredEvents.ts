import { differenceInMonths } from "date-fns";

function filterEvents(
  diffInMonths: number,
  events: Array<EventType>,
  operator = "=="
): Array<EventType> {
  const date = new Date();
  const filtered: Array<EventType> = [];

  events.filter((event: EventType) => {
    const difference = differenceInMonths(event.date, date);

    switch (operator) {
      case "==":
        if (difference == diffInMonths) {
          filtered.push(event);
        }
        break;
      case ">":
        if (difference > diffInMonths) {
          filtered.push(event);
        }
        break;
      default:
        break;
    }
  });

  return filtered;
}

export function getFilteredEvents(
  filter: string,
  events: Array<EventType>
): Array<EventType> {
  const e = [...events];
  const filterLower = filter.toLowerCase();

  if (filterLower.includes("this")) {
    return filterEvents(0, e);
  }

  if (filterLower.includes("next")) {
    return filterEvents(1, e);
  }

  if (filter.includes("2")) {
    return filterEvents(2, e);
  }

  if (filter.includes("3")) {
    return filterEvents(3, e);
  }

  if (filter.includes("4")) {
    return filterEvents(4, e);
  }

  if (filter.includes("5")) {
    return filterEvents(5, e);
  }

  if (filterLower.includes("in 6")) {
    return filterEvents(6, e);
  }

  if (filterLower.includes("more than")) {
    return filterEvents(6, e, ">");
  }

  return events;
}
