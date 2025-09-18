export function sortByColor(events: Array<EventType>) {
  return events.sort((a, b) => {
    return a.color.localeCompare(b.color);
  });
}
