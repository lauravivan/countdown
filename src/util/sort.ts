function sortByAlphabet(events: Array<EventType>) {
  events.sort((a, b) => {
    const x = a.desc.toLowerCase();
    const y = b.desc.toLowerCase();
    if (x < y) {
      return -1;
    }
    if (x > y) {
      return 1;
    }
    return 0;
  });

  return events;
}

function sortByColor(events: Array<EventType>) {
  events.sort((a, b) => {
    const x = a.color;
    const y = b.color;
    return x.localeCompare(y);
  });

  return events;
}

function sortByDate(events: Array<EventType>) {
  events.sort((a, b) => {
    const x: any = new Date(a.date);
    const y: any = new Date(b.date);

    if (x.getFullYear() - y.getFullYear()) {
      return x - y;
    }

    if (x.getMonth() - y.getMonth()) {
      return x - y;
    }

    if (x.getDate() - y.getDate()) {
      return x - y;
    }

    return 0;
  });

  return events;
}

export function getSortedEvents(
  filteredEvents: Array<EventType>,
  typeOfSort: string
) {
  const s = typeOfSort.toLowerCase().split(" ");

  if (s.includes("alphabet")) {
    return sortByAlphabet(filteredEvents);
  } else if (s.includes("color")) {
    return sortByColor(filteredEvents);
  } else if (s.includes("date")) {
    return sortByDate(filteredEvents);
  }

  return filteredEvents;
}
