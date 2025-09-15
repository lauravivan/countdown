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
  const e = [...events];

  if (filter.includes("this")) {
    return filterEvents(0, e);
  } else if (filter.includes("next")) {
    return filterEvents(1, e);
  } else if (filter.includes("2")) {
    return filterEvents(2, e);
  } else if (filter.includes("3")) {
    return filterEvents(3, e);
  } else if (filter.includes("4")) {
    return filterEvents(4, e);
  } else if (filter.includes("5")) {
    return filterEvents(5, e);
  } else if (filter.includes("6")) {
    return filterEvents(6, e);
  } else if (filter.includes("more")) {
    return filterEvents(6, e, ">");
  }

  return events;
}
