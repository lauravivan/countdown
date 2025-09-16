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
    const x = new Date(a.date);
    const y = new Date(b.date);
    return x.getTime() - y.getTime();
  });

  return events;
}

export function getSortedEvents(
  filteredEvents: Array<EventType>,
  typeOfSort: string
) {
  const sortLower = typeOfSort.toLowerCase();

  if (sortLower.includes("alphabet")) {
    return sortByAlphabet(filteredEvents);
  }

  if (sortLower.includes("color")) {
    return sortByColor(filteredEvents);
  }

  if (sortLower.includes("date")) {
    return sortByDate(filteredEvents);
  }

  return filteredEvents;
}
