import { getFilteredEvents } from "./getFilteredEvents";
import { getSortedEvents } from "./getSortedEvents";

export function getFilterAndSortEvents(
  filter: string,
  sort: string,
  events: Array<EventType>
) {
  const filtered = getFilteredEvents(filter, events);
  const sorted = getSortedEvents(filtered, sort);

  return sorted;
}
