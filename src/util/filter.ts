/* eslint-disable no-case-declarations */

function filterEvents(
  differenceInMonths: number,
  events: Array<EventType>,
  operator = "=="
): Array<EventType> {
  const date = new Date();
  const currentMonth = date.getMonth();
  const filtered: Array<EventType> = [];

  events.filter((event: EventType) => {
    const eventDate = new Date(event.date);
    const difference = eventDate.getMonth() - currentMonth;

    switch (operator) {
      case "==":
        if (difference == differenceInMonths) {
          filtered.push(event);
        }
        break;
      case ">":
        if (difference > differenceInMonths) {
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
  const f: Array<string> = filter.toLowerCase().split(" ");
  const e = [...events];

  if (f.includes("this" || "month")) {
    return filterEvents(0, e);
  } else if (f.includes("next" || "month")) {
    return filterEvents(1, e);
  } else if (f.includes("2" || "months")) {
    return filterEvents(2, e);
  } else if (f.includes("3" || "months")) {
    return filterEvents(3, e);
  } else if (f.includes("4" || "months")) {
    return filterEvents(4, e);
  } else if (f.includes("5" || "months")) {
    return filterEvents(5, e);
  } else if (f.includes("6" || "months")) {
    return filterEvents(6, e);
  } else if (f.includes("than" || "6" || "months")) {
    return filterEvents(6, e, ">");
  }

  return events;
}
